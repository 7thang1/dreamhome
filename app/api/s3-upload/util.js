import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";


const s3Client = new S3Client({
    region: "auto",
    credentials: {
      accessKeyId: process.env.NEXT_PUBLIC_CF_R2_ACCESS_KEY_ID,
      secretAccessKey: process.env.NEXT_PUBLIC_CF_R2_SECRET_ACCESS_KEY,
    },
    endpoint: process.env.NEXT_PUBLIC_CF_R2_ENDPOINT,
  });
export default async function uploadFileToS3(file, fileName) {
    const fileBuffer = file;
    console.log(fileName);
    const params = {
      // Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME,
      Bucket: process.env.NEXT_PUBLIC_CF_R2_BUCKET_NAME,
      Key: `${fileName}`,
      Body: fileBuffer,
      ContentType: "image/jpg" || "image/png" ,
    };
    const command = new PutObjectCommand(params);
    await s3Client.send(command);
    return params.Key; 
  }