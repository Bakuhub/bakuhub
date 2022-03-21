import aws from "aws-sdk";

export default async function handler(req: { body: any; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: aws.Request<aws.S3.PutObjectOutput, aws.AWSError>): void; new(): any; }; }; }) {
    aws.config.update({
        region: process.env.AWS_BUCKET_REGION,
        accessKeyId: process.env.AWS_S3_BUCKET_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_S3_BUCKET_SECRET_ACCESS_KEY,
        signatureVersion: "v4",
    });
    const bucketParams = {
        Key: "test.jpg",
        Bucket: "bakuhub",
        Body: req.body
    };
    const s3 = new aws.S3();
    console.log(`Putting object "${bucketParams.Key}" in bucket`);
    const data = await s3.putObject(
            {
                Bucket: bucketParams.Bucket,
                Key: bucketParams.Key,
                Body: bucketParams.Body,
            }
    );
    res.status(200).send(data);
}