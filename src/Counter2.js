import React, { useState, useEffect } from "react";

const Counter2 = ({ text = "" }) => {
  const [option, setOption] = useState("동물");
  const [optionCate] = useState(["동물", "식물"]);
  const [subOptionCate, setSubOptionCate] = useState([]);

  return (
    <>
      <select onChange={setOption}>
        {optionCate.map(data => (
          <option value={data}>{data}</option>
        ))}
      </select>
      {subOptionCate.length !== 0 && (
        <select>
          {subOptionCate.map(data => (
            <option value={data}>{data}</option>
          ))}
        </select>
      )}
    </>
  );
};

export default Counter2;
