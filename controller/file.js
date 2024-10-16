const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = (uploadDirs) => {
    return multer.diskStorage({
        destination: (req, file, cb) => {
            uploadDirs.forEach((dir) => {
                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir, { recursive: true });
                }
            });
            cb(null, uploadDirs[0]); // Set destination to the first directory
        },
        filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
            const filename = file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname);
            cb(null, filename);

            // Copy file to the second directory
            const tempPath = path.join(uploadDirs[0], filename);
            uploadDirs.slice(1).forEach((dir) => {
                const destPath = path.join(dir, filename);
                fs.copyFile(tempPath, destPath, (err) => {
                    if (err) {
                        console.error(`Error copying file to ${dir}:`, err);
                    }
                });
            });
        },
    });
};

const fileFilter = (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Only images are allowed"), false);
    }
};

const upload = multer({
    storage: storage(["./images"]),
    limits: { fileSize: 1024 * 1024 * 5 },
    fileFilter: fileFilter,
});

module.exports = { upload };
