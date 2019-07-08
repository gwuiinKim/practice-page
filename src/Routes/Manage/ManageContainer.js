import React, { useState, useEffect } from "react";
import { userData } from "../../data";
import ManagePresenter from "./ManagePresenter";
import useInput from "../../Hooks/useInput";
import { useRegister } from "../../Context/RegisterContext";

export default () => {
  const [data, setData] = useState();
  const [userDetail, setUserDetail] = useState([userData[0]]);
  const [loading, setLoading] = useState(true);
  const [action, setAction] = useState({
    isDetail: false,
    isRegister: true,
    isEdit: false,
    isFilter: true
  });
  const search = useInput();
  const name = useInput();
  const gender = useInput();
  const phoneNumber = useInput();
  const handleFilterClick = e => {
    setAction({
      isFilter: true
    });
  };
  const handleRegisterClick = e => {
    setAction({
      isRegister: true
    });
  };
  const handleUserClick = async e => {
    const {
      currentTarget: { id }
    } = e;
    // get Data from Database await
    setLoading(true);
    setAction({
      isDetail: true
    });
    const targetUser = await userData.filter(
      user => String(user.id) === String(id)
    );
    setUserDetail(targetUser);
    setLoading(false);
  };
  useEffect(() => {
    setData(userData);
    setLoading(false);
  }, []);

  return (
    <ManagePresenter
      data={data}
      loading={loading}
      action={action}
      search={search}
      name={name}
      gender={gender}
      phoneNumber={phoneNumber}
      userDetail={userDetail}
      handleUserClick={handleUserClick}
      handleFilterClick={handleFilterClick}
      handleRegisterClick={handleRegisterClick}
    />
  );
};
