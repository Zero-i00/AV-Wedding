import {AxiosError} from "axios";
import type {AxiosRequestHeaders} from "axios";

export const APP_API_HEADERS: Partial<AxiosRequestHeaders> = {
    'Content-Type': 'application/json',
    'X-App-Context': 'AppFrontend'
}

export const extractError = (error: Error): string[] => {

    if (error instanceof AxiosError) {
        return []
    }

    return [error.message]
}