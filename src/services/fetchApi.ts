export const fetchApi = async (url: string, init?: any) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}${url}`, init);

    const result = await res.json();
    return result;
};