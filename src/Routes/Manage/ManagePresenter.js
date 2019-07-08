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

const HeaderWrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
`;
const UserTitle = styled.h1`
  font-size: 25px;
`;

const Search = styled.input`
  border: none;
  width: 50%;
  font-size: 20px;
  box-shadow: ${props => props.theme.boxShadow};
  padding: 10px 30px;
  border-radius: 5px;
`;

const Button = styled.button`
  all: unset;
  cursor: pointer;
  color: white;
  padding: 5px 20px;
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
  search,
  userDetail,
  handleUserClick,
  handleFilterClick
}) => {
  const { isDetail, isRegister, isEdit } = action;

  return (
    <Container>
      <Column>
        <HeaderWrapper>
          <UserTitle>User Dashboard</UserTitle>
          <Search
            placeholder="search.."
            value={search.value}
            onChange={search.onChange}
          />
          <Button onClick={handleFilterClick}>Filter</Button>
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
          <UserDetail userDetail={userDetail} />
        )}
      </Column>
    </Container>
  );
};

export default ManagePresenter;