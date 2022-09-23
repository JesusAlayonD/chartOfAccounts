import React, { useEffect, useState } from "react";
import axios from "axios";

export const API_URL = import.meta.env.VITE_BACKEND_URL;

const useAccounts = (page) => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}/accounts/${page}`);
      setAccounts(res.data.Payload);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(page);
    getData();
  }, [page]);

  return { accounts, loading, getData };
};

export default useAccounts;
