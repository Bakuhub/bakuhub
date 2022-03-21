import {S3} from "aws-sdk";

export const uploadMediaToS3 = async (file: any) => {

    const s3 = new S3();
    console.info(file);
    //   const fileName = `snapshot/${getUUID()}.${getFileExt(file.type)}`;
    try {
        const result = s3.getSignedUrl("putObject", {
            region: process.env.AWS_BUCKET_REGION,
            accessKeyId: process.env.AWS_S3_BUCKET_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_S3_BUCKET_SECRET_ACCESS_KEY,
            bucket: "bakuhub",
            Key: file.fileName,
            ContentType: "jpg",
        }, async (err, data) => {
            if (err) {
                return {success: false, error: err};
            }
            const returnData = {
                signedRequest: data,
            };
            return data;
        });
        console.info(result);
    } catch (err) {
        return "res.status(500).json(err)";
    }
};
