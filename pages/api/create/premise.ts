// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import {uploadUrlToS3} from "../../../src/services/uploadUrlToS3";


export default async function handler(
        req: NextApiRequest,
        res: NextApiResponse
) {
    console.info(req.body);
    const {
        referenceUrl,
        activityDate,
        title,
    } = req.body;
    const description = "";
    const snapshot = await uploadUrlToS3(referenceUrl);
    const url = snapshot.url;
    // await prisma.premise.create({
    //     data: {
    //         title,
    //         status: PremiseStatus.RUMOUR,
    //         tagsOnPremises: {
    //             create: [{
    //                 tag: {
    //                     connect: {
    //                         label: "this is a new tag"
    //                     }
    //                 }
    //             }
    //             ]
    //         },
    //         vision: {
    //             create: [{
    //                 title,
    //                 description,
    //                 activityDate,
    //                 reference: url,
    //             }]
    //         }
    //     }
    // });
    res.status(200).json({snapshot});
}
