from typing import List

from fastapi import APIRouter

from database.session import AsyncSessionDep
from feature.alcohol_category.schema import AlcoholCategorySchemaOut
from feature.alcohol_category.service import alcohol_category_service


class AlcoholCategoryResolver:
    router = APIRouter(
        prefix="/alcohol_category",
        tags=["AlcoholCategory"],
    )

    @staticmethod
    @router.get('/')
    async def list(session: AsyncSessionDep) -> List[AlcoholCategorySchemaOut]:
        data = await alcohol_category_service.list(session)
        return [alcohol_category_service.to_schema(category) for category in data]


alcohol_category_resolver = AlcoholCategoryResolver()
