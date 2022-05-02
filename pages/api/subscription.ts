// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {getSession} from "next-auth/react";


export default async function handler(
        req: NextApiRequest,
        res: NextApiResponse
) {
    const session = await getSession({req});
    console.info(req.body);
    console.info(session);

    try {
        res.status(200).json({snapshot: "ss"});
    } catch (e) {
        res.status(200).json({errorMessage: e});
    }
}
