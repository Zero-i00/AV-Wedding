from typing import List

from fastapi import (
    status,
    HTTPException
)
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from database.models import InvitationModel, GuestModel
from feature.alcohol_category.service import alcohol_category_service
from feature.guest.schema import GuestSchemaIn
from feature.guest.service import guest_service
from feature.invitation.schema import InvitationSchemaIn, InvitationSchemaOut


class InvitationService:
    def __init__(self) -> None:
        self.no_any_guest_exception = HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="В анкете должен быть хотя бы один гость!"
        )

    async def create(
            self,
            session: AsyncSession,
            obj: InvitationSchemaIn,
            guests: List[GuestSchemaIn],
            alcohol_categories: List[int] = None,
    ) -> InvitationModel:
        if len(guests) == 0:
            raise self.no_any_guest_exception

        alcohol_categories_models = await alcohol_category_service.list(session, ids=alcohol_categories)

        guest_models: List[GuestModel] = []
        for guest in guests:
            model = guest_service.to_model(guest)
            guest_models.append(model)

        invitation = InvitationModel(
            comment=obj.comment,
            favorite_music=obj.favorite_music,
            will_attend=obj.will_attend,
            is_single_visit=len(guests) == 1,
            guests=guest_models,
            alcohol_categories=alcohol_categories_models,
        )

        session.add(invitation)
        await session.commit()

        result = await session.execute(
            select(InvitationModel)
            .where(InvitationModel.id == invitation.id)
            .options(
                selectinload(InvitationModel.guests),
                selectinload(InvitationModel.alcohol_categories),
            )
        )
        return result.scalar_one()

    @staticmethod
    def to_schema(obj: InvitationModel) -> InvitationSchemaOut:
        return InvitationSchemaOut(
            id=obj.id,
            comment=obj.comment,
            favorite_music=obj.favorite_music,
            will_attend=obj.will_attend,
            is_single_visit=obj.is_single_visit,
            guests=[guest_service.to_schema(g) for g in obj.guests],
            alcohol_categories=[alcohol_category_service.to_schema(c) for c in obj.alcohol_categories],
        )


invitation_service = InvitationService()
