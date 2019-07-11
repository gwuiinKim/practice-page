import React, { useState, useContext, createContext } from "react";
import { userData } from "../data";

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
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const list1 = ["유효", "만기예정", "만기"];
  const genderList = ["남", "여"];

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

  const dataHandler = filter => {
    // todo : get data from db
    let filteredList = userData;
    filter.forEach(filter => {
      if (filter === "유효") {
        filteredList = filteredList.filter(user => user.remains > 0);
      } else if (filter === "만기예정") {
        filteredList = filteredList.filter(
          user => user.remains > 0 && user.remains <= 5
        );
      } else if (filter === "만기") {
        filteredList = filteredList.filter(user => user.remains === 0);
      }
    });
    setData(filteredList);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        fn: {
          logUserIn,
          logUserOut
        },
        data,
        filter,
        list1,
        genderList,
        filterFns: {
          onFilterClick,
          handleDeleteFilter,
          handleResetFilter,
          handleGenderClick,
          dataHandler
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
  const { data, filter, list1, genderList } = useContext(UserContext);
  return { data, filter, list1, genderList };
};

export const useFilterFns = () => {
  const { filterFns } = useContext(UserContext);
  return filterFns;
};

export default UserContextProvider;
