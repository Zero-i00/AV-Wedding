import axios from "axios";
import type {CreateAxiosDefaults} from "axios";
import {API_SERVER_URL} from "@/shared/configs/api.config";
import {APP_API_HEADERS} from "@/shared/api/api.helper";


const options: CreateAxiosDefaults = {
    baseURL: API_SERVER_URL,
    headers: APP_API_HEADERS,
    withCredentials: true
}

export const axiosClient = axios.create(options)
