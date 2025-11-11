import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadToCloudinary(file: File): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "facility-services", // Dossier dans Cloudinary
        resource_type: "auto",
      },
      (error, result) => {
        if (error) {
          console.error("Erreur upload Cloudinary:", error);
          reject(error);
        } else {
          // Cloudinary retourne une URL publique comme:
          // https://res.cloudinary.com/votre-cloud/image/upload/v1234567890/facility-services/image.png
          resolve(result!.secure_url);
        }
      }
    );
    uploadStream.end(buffer);
  });
}
