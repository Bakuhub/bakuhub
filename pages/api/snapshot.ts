// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {uploadUrlToS3} from "../../src/services/uploadUrlToS3";

type Data = {
    versionId?: string
    url: string
}

export default async function handler(
        req: NextApiRequest,
        res: NextApiResponse<Data>
) {
    const result = await uploadUrlToS3("");
    res.status(200).json(result
    );
}
