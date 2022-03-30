import {S3} from "aws-sdk";
import * as puppeteer from "puppeteer";
import {getUUID} from "../utils/getUUID";

export interface UploadUrlToS3Response {
    versionId?: string;
    url: string;
}

export const uploadUrlToS3 = async (url: string): Promise<UploadUrlToS3Response> => {
    const s3 = new S3({
        region: process.env.AWS_BUCKET_REGION,
        accessKeyId: process.env.AWS_S3_BUCKET_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_S3_BUCKET_SECRET_ACCESS_KEY,
    });

    const browser = await puppeteer.launch(
    );
    const page = await browser.newPage();
    await page.goto(url);
    const [button] = await page.$x("//button[contains(., 'cookies')]");
    if (button) {
        await button.click();
    }
    const screenshot = await page.screenshot({fullPage: true});
    const fileName = `snapshot/${getUUID()}.png`;
    const result = await s3.putObject({
        Body: screenshot,
        Bucket: "bakuhub",
        Key: fileName,
    }).promise();
    return {
        versionId: result.VersionId,
        url: `${process.env.AWS_S3_BUCKET_BASE_URL}/${fileName}`
    };
};