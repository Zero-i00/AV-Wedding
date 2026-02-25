import {queryOptions} from "@tanstack/react-query";
import {alcoholService} from "@/features/core/services/alcohol.service";


class AlcoholQueries {
    public BASE_KEY = 'alcohol_category'

    list() {
        return queryOptions({
            queryKey: [this.BASE_KEY],
            queryFn: () => alcoholService.list(),
        })
    }
}

export const alcoholQueries = new AlcoholQueries()
