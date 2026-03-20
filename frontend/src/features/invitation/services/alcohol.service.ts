import type {TypeAlcoholResponse} from "@/features/invitation/types/alcohol.types";
import {axiosClient} from "@/shared/api/interceptors/root.interceptor";


class AlcoholService {
    private readonly BASE_URL = 'alcohol_category'

    async list() {
        const response = await axiosClient.get<TypeAlcoholResponse[]>(this.BASE_URL)
        return response.data
    }
}

export const alcoholService = new AlcoholService()
