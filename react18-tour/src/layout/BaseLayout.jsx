import { useEffect, useState } from "react";
import Fixtures from "./Fixtures";
import Side from "./Side";
import { useLatest } from "../hooks";

const BaseLayout = () => {
  const [historyCount, setHistoryCount] = useState(0);
  const historyCountRef = useLatest(historyCount)
  useEffect(() => {
    const pathChange = (...e) => {
      console.log(...e);
      setHistoryCount(historyCountRef.current + 1);
    };
    window.addEventListener("popstate", pathChange);
    return () => {
      window.removeEventListener("popstate", pathChange);
    };
  }, []);
  return (
    <div className="layout">
        <Side />
        <Fixtures />
    </div>
  );
};

export default BaseLayout;
