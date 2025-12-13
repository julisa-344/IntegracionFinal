const cloudinary = {
    uploader: {
        upload: (path: string, options: any, cb: any) => cb(null, { secure_url: "http://url" })
    }
}
export default cloudinary;
