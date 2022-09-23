import { API_URL } from "./useAccounts";
import axios from "axios";

const useUpdate = async (id, data) => {
  const res = await axios.put(`${API_URL}/accounts/${id}`, data);

  return res;
};

export default useUpdate;
