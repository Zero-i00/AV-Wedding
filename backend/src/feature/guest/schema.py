from pydantic import BaseModel, ConfigDict


class GuestSchemaIn(BaseModel):
    full_name: str


class GuestSchemaOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    full_name: str
    invitation_id: int
