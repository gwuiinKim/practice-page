import React, { useState, useEffect } from "react";
import { userData } from "../../data";
import ManagePresenter from "./ManagePresenter";

export default () => {
  const [data, setData] = useState();
  const [detail, setDetail] = useState();
  const [loading, setLoading] = useState(true);
  const [action, setAction] = useState({
    isDetail: false,
    isRegister: false,
    isEdit: false
  });
  const [clickOutside, setClickOutside] = useState();

  const handleUserClick = async e => {
    const {
      currentTarget: { id }
    } = e;
    // get Data from Database await
    const userDetail = await userData.find(
      user => String(user.id) === String(id)
    );
    setDetail(userDetail);
    setAction({ isDetail: true });
  };
  useEffect(() => {
    setData(userData);
    setLoading(false);
  }, []);

  return (
    <ManagePresenter
      data={data}
      loading={loading}
      handleUserClick={handleUserClick}
    />
  );
};
