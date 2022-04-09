import axios from "axios";

export const getSnapshot = async ({
                                      url,
                                  }: { url: string }): Promise<{
    url: string
    versionId: string
} | void> => {
    try {
        const result = await axios.post("/api/snapshot", {
            referenceUrl: url
        });
        if (result.status === 200) {
            if (result.data) {
                return result.data.snapshot;
            }
        }
    } catch (e) {
        console.error(e);
    }
};