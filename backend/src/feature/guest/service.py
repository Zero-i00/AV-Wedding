from database.models import GuestModel
from feature.guest.schema import GuestSchemaIn, GuestSchemaOut


class GuestService:

    @staticmethod
    def to_model(obj: GuestSchemaIn) -> GuestModel:
        return GuestModel(
            full_name=obj.full_name,
        )

    @staticmethod
    def to_schema(obj: GuestModel) -> GuestSchemaOut:
        return GuestSchemaOut.model_validate(obj)


guest_service = GuestService()
