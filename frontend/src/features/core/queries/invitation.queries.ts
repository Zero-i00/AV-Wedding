import {TypeInvitationRequest, TypeInvitationResponse} from "@/features/core/types/invitation.types";
import {TypeGuestRequest} from "@/features/core/types/guest.types";
import {UseMutationOptions} from "@tanstack/react-query";
import {invitationService} from "@/features/core/services/invitation.service";


class InvitationQueries {
    public BASE_KEY = '/invitation'

    create(): UseMutationOptions<TypeInvitationResponse, Error, { invitation: TypeInvitationRequest, guests: TypeGuestRequest[], alcohol_categories: number[]}> {
        return  {
            mutationKey: [this.BASE_KEY],
            mutationFn: ({invitation, guests, alcohol_categories}) => invitationService.create(invitation, guests, alcohol_categories)
        }
    }
}

export const invitationQueries = new InvitationQueries()
