// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {uploadUrlToS3} from "../../src/services/uploadUrlToS3";


export default async function handler(
        req: NextApiRequest,
        res: NextApiResponse
) {
    const {
        referenceUrl,
    } = req.body;
    try {
        const snapshot = await uploadUrlToS3(referenceUrl);
        res.status(200).json({snapshot});
    } catch (e) {
        res.status(200).json({errorMessage: e});
    }
}
