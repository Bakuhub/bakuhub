import {NextApiRequest, NextApiResponse} from "next";
import {uploadMediaToS3} from "../../src/services/uploadMediaToS3";

export default async function handler(req: NextApiRequest,
                                      res: NextApiResponse) {
    const snapshot = await uploadMediaToS3(req.body);
    console.info(snapshot);
    res.status(200).json({});
}