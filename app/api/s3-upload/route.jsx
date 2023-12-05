import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
// const s3Client = new S3Client({
//   region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
//   credentials: {
//     accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID,
//     secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY,
//   },
// });
const s3Client = new S3Client({
  region: "auto",
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_CF_R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_CF_R2_SECRET_ACCESS_KEY,
  },
  endpoint: process.env.NEXT_PUBLIC_CF_R2_ENDPOINT,
});

export async function uploadFileToS3(file, fileName) {
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

export async function POST(request) {
  try {
    const formData = await request.formData();
    const files = formData.getAll("file");

    if (files.length === 0) {
      return NextResponse.json({ error: "No File Uploaded" }, { status: 400 });
    }

    const uploadedFiles = [];

    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const fileName = await uploadFileToS3(buffer, file.name);
      uploadedFiles.push(fileName);
    }

    return NextResponse.json({ success: true, files: uploadedFiles });

  } catch (error) {
    console.error("Error uploading files:", error);

    return NextResponse.json({ error: "Error Uploading Files" });
  }
}
