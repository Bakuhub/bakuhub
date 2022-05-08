import {NextApiRequest, NextApiResponse} from "next";
import {uploadMediaToS3, UploadUrlToS3Response} from "../../src/services/uploadMediaToS3";

export default async function handler(
        req: NextApiRequest,
        res: NextApiResponse<UploadUrlToS3Response>
) {
    const snapshot = await uploadMediaToS3(req.body);
    res.status(200).json(snapshot);
}