import { useEffect, useState } from "react";

export default function useReadmeData({title, dirPath}) {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/imA05-in/${title}/main/${dirPath}/README.md`,
    )
      .then((res) => res.text())
      .then((data) => setData(data));
  }, []);
  return data;
}
