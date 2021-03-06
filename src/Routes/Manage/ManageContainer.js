import React, { useState, useEffect } from "react";
import { userData } from "../../data";
import ManagePresenter from "./ManagePresenter";
import useInput from "../../Hooks/useInput";
import { useFilter } from "../../Context/UserContext";
import useSelect from "../../Hooks/useSelect";

export default () => {
  const { data } = useFilter();
  const [userDetail, setUserDetail] = useState([userData[0]]);
  const [loading, setLoading] = useState(true);
  const [action, setAction] = useState({
    isDetail: false,
    isRegister: true,
    isEdit: false,
    isFilter: true
  });

  const name = useInput("");
  const gender = useSelect(null);
  const membership = useSelect(null);
  const phoneNumber = useInput("");

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
  const handleModifyClick = e => {
    setAction({
      isRegister: true,
      isEdit: true
    });
    name.setValue(userDetail[0].name);
    gender.setValue(userDetail[0].gender);
    phoneNumber.setValue(userDetail[0].phoneNumber);
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
    setLoading(false);
  }, []);

  return (
    <ManagePresenter
      data={data}
      loading={loading}
      action={action}
      name={name}
      gender={gender}
      membership={membership}
      phoneNumber={phoneNumber}
      userDetail={userDetail}
      handleUserClick={handleUserClick}
      handleFilterClick={handleFilterClick}
      handleModifyClick={handleModifyClick}
      handleRegisterClick={handleRegisterClick}
    />
  );
};
