import axios, {CreateAxiosDefaults} from "axios";
import {API_SERVER_URL} from "@/shared/config/api.config";
import {APP_API_HEADERS} from "@/shared/api/api.helper";


const options: CreateAxiosDefaults = {
    baseURL: API_SERVER_URL,
    headers: APP_API_HEADERS,
    withCredentials: true
}

export const axiosClient = axios.create(options)
