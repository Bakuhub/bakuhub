import axios from "axios";

export const getSnapshot = async ({
                                      url,
                                      referenceType,
                                      title
                                  }: { url: string, referenceType: string, title: string }) => {
    const result = await axios.post("/api/snapshot", {
        referenceUrl: url, referenceType, title,
    });
    if (result.status===200) {
        return result.data;
    }
    return result;
};