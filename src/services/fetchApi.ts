import {getUrl} from "../utils/getUrl";

export const fetchApi = async (url: string, init?: any) => {
    const res = await fetch(`${getUrl(process.env.NEXT_PUBLIC_VERCEL_URL)}${url}`, init);

    const result = await res.json();
    return result;
};