import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { userData } from "../data";
import User from "../Components/manage/User";

const Container = styled.div`
  padding-top: 80px;
  padding-left: 200px;
  padding-right: 100px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
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

export default () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(userData);
    setLoading(false);
  }, []);

  return (
    <Container>
      <Column>
        <UserTitle>User Dashboard</UserTitle>
        {!loading && data && data.length > 0 && (
          <UserWrapper>
            {data.map(user => (
              <User key={user.id} user={user} />
            ))}
          </UserWrapper>
        )}
      </Column>
      <Column />
    </Container>
  );
};
