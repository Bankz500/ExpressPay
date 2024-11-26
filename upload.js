

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "gift_card");
  data.append("resource_type", "image")

  try {
    const res =  await fetch(
        import.meta.env.CLOUDINARY_URL,
        {
          method: 'POST',
          body: formData,
        }
      );

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;