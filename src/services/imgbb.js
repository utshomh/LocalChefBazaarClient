import axios from "axios";

export const uploadImage = async (image) => {
  const url = `${import.meta.env.VITE_IMGBB_UPLOAD_URL}?key=${
    import.meta.env.VITE_IMGBB_API_KEY
  }`;
  const formData = new FormData();
  formData.append("image", image);
  const res = await axios.post(url, formData).then((res) => res.data);
  return res.data.url;
};
