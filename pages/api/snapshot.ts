import type {NextApiRequest, NextApiResponse} from "next";
import {uploadUrlToS3} from "../../src/services/uploadUrlToS3";

export type SnapshotResponse = {
    versionId?: string
    url: string
}

export default async function handler(
        req: NextApiRequest,
        res: NextApiResponse<SnapshotResponse>
) {
    const result = await uploadUrlToS3("");
    res.status(200).json(result);
}
