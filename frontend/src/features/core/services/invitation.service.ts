import {axiosClient} from "@/shared/api/api.interceptors";
import {TypeInvitationRequest, TypeInvitationResponse} from "@/features/core/types/invitation.types";
import {TypeGuestRequest} from "@/features/core/types/guest.types";


class InvitationService {
    private readonly BASE_URL = '/invitation'

    async create(
        invitation: TypeInvitationRequest,
        guests: TypeGuestRequest[],
        alcohol_categories: number[] = []
    ) {
        const payload = {invitation, guests, alcohol_categories}

        const response = await axiosClient.post<TypeInvitationResponse>(this.BASE_URL, {
            payload
        })

        return response.data
    }
}

export const invitationService = new InvitationService()
