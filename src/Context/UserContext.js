import React, { useState, useContext, createContext } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  // about auth

  const [user, setUser] = useState({
    name: "Gwui In",
    isLoggedIn: true
  });
  const logUserIn = () => {
    setUser({
      ...user,
      isLoggedIn: true
    });
  };
  const logUserOut = () => {
    setUser({
      ...user,
      isLoggedIn: false
    });
  };

  // about serach filter

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

  const handleGenderClick = e => {
    const {
      target: {
        dataset: { value }
      }
    } = e;
    if (filter.includes(value)) {
      const filtered = filter.filter(el => el !== value);
      setFilter(filtered);
    } else {
      setFilter([...filter, value]);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        fn: {
          logUserIn,
          logUserOut
        },
        filter,
        list1,
        filterFns: {
          onFilterClick,
          handleDeleteFilter,
          handleResetFilter,
          handleGenderClick
        }
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { user } = useContext(UserContext);
  return user;
};

export const useUserFns = () => {
  const { fn } = useContext(UserContext);
  return fn;
};

export const useFilter = () => {
  const { filter, list1 } = useContext(UserContext);
  return { filter, list1 };
};

export const useFilterFns = () => {
  const { filterFns } = useContext(UserContext);
  return filterFns;
};

export default UserContextProvider;
