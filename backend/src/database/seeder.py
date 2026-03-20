from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from database.models.core import AlcoholCategoryModel

ALCOHOL_CATEGORIES = [
    "Игристое",
    "Коньяк",
    "Красное сухое вино",
    "Виски",
    "Красное полусладкое вино",
    "Водка",
    "Белое сухое вино",
    "Не планирую пить",
    "Белое полусладкое вино",
    "Приду со своим",
]


async def seed_alcohol_categories(session: AsyncSession) -> None:
    result = await session.execute(select(AlcoholCategoryModel).limit(1))
    if result.scalar_one_or_none() is not None:
        return

    session.add_all([AlcoholCategoryModel(title=title) for title in ALCOHOL_CATEGORIES])
    await session.commit()


async def run_seeders(session: AsyncSession) -> None:
    await seed_alcohol_categories(session)
