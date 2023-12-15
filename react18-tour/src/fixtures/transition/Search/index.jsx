import React, { useState, useTransition } from "react";

export default function Search() {
  const [value, setValue] = useState("");
  const [searchQuery, setSearchQuery] = useState([]);
  const [loading, startTransition] = useTransition(2000);

  const handleChange = (e) => {
    setValue(e.target.value);
    // 延迟更新
    startTransition(() => {
      setSearchQuery(Array(20000).fill(e.target.value));
    });
  };

  return (
    <div className="App">
      <input value={value} onChange={handleChange} />
      {loading ? (
        <p>loading...</p>
      ) : (
        searchQuery.map((item, index) => <p key={index}>{item}</p>)
      )}
    </div>
  );
}
