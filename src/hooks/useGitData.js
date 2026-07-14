import { useState, useEffect } from "react";

export default function useGitData({ user = "imA05-in" }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}/repos`)
      .then((res) => {
        if (!res.ok) {
          setData([]);
          return;
        }
        return res.json();
      })
      .then((data) => setData(data));
  }, []);

  return data;
}
