from typing import List, Optional

from fastapi import (
    status,
    APIRouter
)

from database.session import AsyncSessionDep
from feature.guest.schema import GuestSchemaIn
from feature.invitation.schema import InvitationSchemaOut, InvitationSchemaIn
from feature.invitation.service import invitation_service


class InvitationResolver:
    router = APIRouter(
        prefix="/invitation",
        tags=["Invitation"],
    )

    @staticmethod
    @router.post("/invitation", status_code=status.HTTP_201_CREATED)
    async def create(
        session: AsyncSessionDep,
        invitation: InvitationSchemaIn,
        guests: List[GuestSchemaIn],
        alcohol_categories: Optional[List[int]] = None,
    ) -> InvitationSchemaOut:
        data = await invitation_service.create(session, invitation, guests, alcohol_categories)
        return invitation_service.to_schema(data)


invitation_resolver = InvitationResolver()
