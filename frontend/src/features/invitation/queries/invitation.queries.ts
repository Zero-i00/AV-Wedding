import type {TypeInvitationRequest, TypeInvitationResponse} from "@/features/invitation/types/invitation.types";
import type {TypeGuestRequest} from "@/features/invitation/types/guest.types";
import type {UseMutationOptions} from "@tanstack/react-query";
import {invitationService} from "@/features/invitation/services/invitation.service";


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
