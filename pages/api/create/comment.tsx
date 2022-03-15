import type {NextApiRequest, NextApiResponse} from "next";


export default async function handler(
        req: NextApiRequest,
        res: NextApiResponse
) {

    console.info(req.body);

    res.status(200).json({body: req.body});
}
