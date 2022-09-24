import React, { useEffect, useState } from "react";
import axios from "axios";

export const API_URL = import.meta.env.VITE_BACKEND_URL;

const useAccounts = (page, filter, filterData) => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    console.log(page);
    console.log(filter);
    console.log(filterData);
    try {
      if (filter === 1) {
        const res = await axios.get(`${API_URL}/accounts/`, {
          params: { page: page },
        });
        setAccounts(res.data.payload);
      } else if (filter === 2) {
        const res = await axios.get(`${API_URL}/accounts/description/`, {
          params: { desc: filterData, page: page },
        });
        setAccounts(res.data.payload);
      } else {
        const res = await axios.get(`${API_URL}/accounts/account/`, {
          params: { acc: filterData, page: page },
        });
        setAccounts(res.data.payload);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(page);
    getData();
  }, [page, filter, filterData]);

  return { accounts, loading, getData };
};

export default useAccounts;
