import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_SECRET_KEY
})

const cloudinaryOnFile = async (localfilePath) => {
  try {
    if (!localfilePath) return null;
    const response = await cloudinary.uploader.upload(localfilePath, {
      resource_type: "auto",
    });
    console.log("file is uploaded successfully on cloudinary ", response.url);
    // remove local file
    fs.unlink(localfilePath, (err) => {
      if (err) console.error("Failed to delete local file:", err);
    });
    return response;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return null;
  }
};

export default cloudinaryOnFile;