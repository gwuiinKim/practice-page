import React from "react";
import styled from "styled-components";
import User from "../../Components/manage/User";
import Filter from "../../Components/manage/Filter";
import UserDetail from "../../Components/manage/UserDetail";
import Register from "../../Components/manage/Register";
import SearchForm from "../../Components/manage/search/SearchForm";

const Container = styled.div`
  padding-top: 80px;
  padding-left: 200px;
  padding-right: 100px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 50px;
`;

const Column = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    height: 100%;
  }
`;
const UserTitle = styled.h1`
  font-size: 25px;
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  background-color: #2e5bff;
`;

const UserWrapper = styled.ul``;

const ManagePresenter = ({
  loading,
  data,
  action,
  userDetail,
  name,
  gender,
  phoneNumber,
  handleUserClick,
  handleFilterClick,
  handleModifyClick,
  handleRegisterClick
}) => {
  const { isDetail, isRegister, isEdit } = action;

  return (
    <>
      <SearchForm />
      <Container>
        <Column>
          <HeaderWrapper>
            <UserTitle>User Dashboard</UserTitle>
            <Button onClick={handleRegisterClick}>New</Button>
          </HeaderWrapper>
          {!loading && data && data.length > 0 && (
            <UserWrapper>
              {data.map(user => (
                <User
                  handleUserClick={handleUserClick}
                  key={user.id}
                  user={user}
                />
              ))}
            </UserWrapper>
          )}
        </Column>
        <Column>
          <Filter />
          {!loading && isDetail && userDetail !== {} && (
            <UserDetail
              userDetail={userDetail}
              handleModifyClick={handleModifyClick}
            />
          )}
          {!loading && isRegister && (
            <Register
              name={name}
              gender={gender}
              phoneNumber={phoneNumber}
              isEdit={isEdit}
              userDetail={userDetail}
            />
          )}
        </Column>
      </Container>
    </>
  );
};

export default ManagePresenter;
