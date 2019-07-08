import React from "react";
import styled from "styled-components";
import User from "../../Components/manage/User";
import Filter from "../../Components/manage/Filter";
import UserDetail from "../../Components/manage/UserDetail";

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
`;

const UserTitle = styled.h1`
  font-size: 25px;
  margin-bottom: 40px;
`;

const UserWrapper = styled.ul``;

const ManagePresenter = ({
  loading,
  data,
  action,
  userDetail,
  handleUserClick
}) => {
  const { isDetail, isRegister, isEdit } = action;

  return (
    <Container>
      <Column>
        <UserTitle>User Dashboard</UserTitle>
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
          <UserDetail userDetail={userDetail} />
        )}
      </Column>
    </Container>
  );
};

export default ManagePresenter;
