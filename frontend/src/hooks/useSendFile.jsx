import { API_URL } from "./useAccounts";
import axios from "axios";

const useSendFile = async (formData) => {
  const res = await axios.post(`${API_URL}/accounts`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
};

export default useSendFile;
