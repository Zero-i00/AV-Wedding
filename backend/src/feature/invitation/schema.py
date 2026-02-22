from typing import List

from pydantic import BaseModel

from feature.alcohol_category.schema import AlcoholCategorySchemaOut
from feature.guest.schema import GuestSchemaOut


class InvitationSchemaIn(BaseModel):
    comment: str = ''
    favorite_music: str = ''

    will_attend: bool = False
    is_single_visit: bool = True


class InvitationSchemaOut(InvitationSchemaIn):
    id: int
    guests: List[GuestSchemaOut]
    alcohol_categories: List[AlcoholCategorySchemaOut]