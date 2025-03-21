// lib/cloudinary.ts
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dar6mcvkm',
  api_key: '616941356144945',
  api_secret: 'f76andfCE52JhAM60W601ssDoGQ',
});

export default cloudinary;

export const uploadToCloudinary = async (
  buffer: Buffer, 
  folder: string,
  fileName: string
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const uploadOptions = {
      folder,
      resource_type: 'auto',
      public_id: fileName.replace(/\.[^/.]+$/, ""), // Remove extension
    };

    cloudinary.uploader.upload_stream(
      uploadOptions,
      (error, result) => {
        if (error) return reject(error);
        if (!result) return reject(new Error('Upload failed'));
        resolve(result.secure_url);
      }
    ).end(buffer);
  });
};