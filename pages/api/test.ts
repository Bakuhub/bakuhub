import {NextApiRequest, NextApiResponse} from "next";
import {uploadMediaToS3} from "../../src/services/uploadMediaToS3";

export interface UploadUrlToS3Response {
    versionId?: string;
    url: string;
}

export default async function handler(
        req: NextApiRequest,
        res: NextApiResponse
) {
    const file = req.body;
    console.info(req.body);
    console.info("req.body");
    const result = await uploadMediaToS3(file);
    console.info(result);
    res.status(200).json(result);
};