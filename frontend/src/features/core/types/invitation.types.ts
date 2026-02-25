import type {TypeGuestResponse} from "@/features/core/types/guest.types";
import type {TypeAlcoholResponse} from "@/features/core/types/alcohol.types";


export type TypeInvitationRequest = {
    favorite_music: string

    will_attend: boolean
    is_single_visit: boolean
}

export type TypeInvitationResponse = TypeInvitationRequest & {
    id: number
    guests: TypeGuestResponse[]
    alcohol_categories: TypeAlcoholResponse[]
}
