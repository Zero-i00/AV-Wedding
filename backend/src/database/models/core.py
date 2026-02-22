from typing import Optional

from database.orm import Base, max_char_field, max_text_field
from sqlalchemy import Column, ForeignKey, Table
from sqlalchemy.orm import Mapped, mapped_column, relationship, validates


invitation_alcohol_category = Table(
    'invitation_alcohol_category',
    Base.metadata,
    Column('invitation_id', ForeignKey('invitations.id'), primary_key=True),
    Column('alcohol_category_id', ForeignKey('alcohol_categories.id'), primary_key=True),
)


class AlcoholCategoryModel(Base):
    __tablename__ = 'alcohol_categories'

    title: Mapped[max_char_field]

    invitations: Mapped[list['InvitationModel']] = relationship(
        secondary=invitation_alcohol_category, back_populates='alcohol_categories'
    )


class GuestModel(Base):
    __tablename__ = 'guests'

    full_name: Mapped[max_char_field]

    invitation_id: Mapped[int] = mapped_column(ForeignKey('invitations.id'))
    invitation: Mapped['InvitationModel'] = relationship(back_populates='guests')


class InvitationModel(Base):
    __tablename__ = "invitations"

    comment: Mapped[Optional[max_text_field]]
    favorite_music: Mapped[Optional[max_char_field]]

    will_attend: Mapped[bool] = mapped_column(default=False)
    is_single_visit: Mapped[bool] = mapped_column(default=True)

    guests: Mapped[list['GuestModel']] = relationship(back_populates='invitation')

    alcohol_categories: Mapped[list['AlcoholCategoryModel']] = relationship(
        secondary=invitation_alcohol_category, back_populates='invitations'
    )

    @validates('guests', include_removes=True)
    def validate_guests(self, key, guest, is_remove):
        if is_remove and len(self.guests) <= 1:
            raise ValueError("В анкете должен быть хотя бы один гость!")
        return guest
