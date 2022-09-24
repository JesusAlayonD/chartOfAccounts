import { API_URL } from "./useAccounts";
import axios from "axios";

const useUpdate = async (id) => {
  const res = await axios.delete(`${API_URL}/accounts/${id}`);

  return res;
};

export default useUpdate;
