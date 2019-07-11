import React, { useState } from "react";

const [filter, setFilter] = useState([]);
const list1 = ["유효", "만기예정", "만기"];

const onFilterClick = e => {
  const {
    target: { innerText }
  } = e;
  if (filter.includes(innerText)) {
    const filtered = filter.filter(el => el !== innerText);
    setFilter(filtered);
  } else {
    setFilter([...filter, innerText]);
  }
};

const handleDeleteFilter = e => {
  const {
    target: {
      dataset: { value }
    }
  } = e;
  const filtered = filter.filter(el => el !== value);
  setFilter(filtered);
};

const handleResetFilter = e => {
  setFilter([]);
};

export default;
