from typing import List, Any, Sequence

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from database.models import AlcoholCategoryModel
from feature.alcohol_category.schema import AlcoholCategorySchemaOut


class AlcoholCategoryService:

    async def list(self, session: AsyncSession, ids: List[int] = None) -> Sequence[Any]:
        query = select(AlcoholCategoryModel)

        if ids:
            query = query.filter(AlcoholCategoryModel.id.in_(ids))

        result = await session.execute(query)
        return result.scalars().all()


    @staticmethod
    def to_schema(obj: AlcoholCategoryModel) -> AlcoholCategorySchemaOut:
        return AlcoholCategorySchemaOut.model_validate(obj)

alcohol_category_service = AlcoholCategoryService()