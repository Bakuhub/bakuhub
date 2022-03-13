// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
import * as puppeteer from "puppeteer";

type Data = {
    name: string
}

export default async function handler(
        req: NextApiRequest,
        res: NextApiResponse<Data>
) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://github.com/mehulmpt/nextjs-puppeteer-aws-s3-screenshot-service/blob/main/api/get-screenshot-image.js");
    await page.screenshot({path: "example.png", fullPage: true});

    res.status(200).json({name: "John Doe"});
}
