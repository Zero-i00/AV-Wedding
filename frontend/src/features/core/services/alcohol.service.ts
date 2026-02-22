import {TypeAlcoholResponse} from "@/features/core/types/alcohol.types";
import {axiosClient} from "@/shared/api/api.interceptors";


class AlcoholService {
    private readonly BASE_URL = 'alcohol_category'

    async list() {
        const response = await axiosClient.get<TypeAlcoholResponse[]>(this.BASE_URL)
        return response.data
    }
}

export const alcoholService = new AlcoholService()
