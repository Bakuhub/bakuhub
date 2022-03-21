import {S3} from "aws-sdk";
import {getUUID} from "../utils/getUUID";

export interface UploadUrlToS3Response {
    versionId?: string;
    url: string;
}

export const uploadMediaToS3 = async (url: string): Promise<UploadUrlToS3Response> => {
    const s3 = new S3({
        region: process.env.AWS_BUCKET_REGION,
        accessKeyId: process.env.AWS_S3_BUCKET_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_S3_BUCKET_SECRET_ACCESS_KEY,
    });

    const fileName = `snapshot/${getUUID()}.jpg`;
    const result = await s3.putObject({
        Body: new Buffer(url, "binary"),
        Bucket: "bakuhub",
        Key: fileName,
    }).promise();
    return {
        versionId: result.VersionId,
        url: `${process.env.AWS_S3_BUCKET_BASE_URL}/${fileName}`
    };
};