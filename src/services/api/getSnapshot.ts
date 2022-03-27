import axios from "axios";

export const getSnapshot = async ({
                                      url,
                                  }: { url: string }): Promise<{
    url: string
    versionId: string
} | void> => {
    const result = await axios.post("/api/snapshot", {
        referenceUrl: url
    });
    if (result.status===200) {
        return result.data.snapshot;
    }
};