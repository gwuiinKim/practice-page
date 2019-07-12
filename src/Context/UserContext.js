import React, { useState, useContext, createContext } from "react";
import { userData } from "../data";
import useInput from "../Hooks/useInput";
import useSelect from "../Hooks/useSelect";

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
  const customerCategoryList = [
    "유효",
    "만기",
    "만기예정(5일)",
    "만기예정(7일)",
    "만기예정(10일)"
  ];
  const genderList = ["남", "여"];
  const search = useInput("");

  const expireSelect = useSelect("");

  const checkUniqueness = target => {
    if (filter.includes(target)) {
      const filtered = filter.filter(el => el !== target);
      setFilter(filtered);
    } else {
      setFilter([...filter, target]);
    }
  };

  const onFilterClick = e => {
    const {
      target: { innerText }
    } = e;
    checkUniqueness(innerText);
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
    checkUniqueness(value);
  };

  const handleAddKeyword = e => {
    if (search.value !== "") {
      search.setValue("");
      if (!filter.includes(search.value)) {
        setFilter([...filter, search.value]);
      }
    }
  };

  const handleEnterKeyword = e => {
    if (e.key === "Enter" && search.value !== "") {
      handleAddKeyword();
    }
  };

  const dataHandler = filter => {
    // todo : get data from db
    let filteredList = userData;
    filter.forEach(filter => {
      if (filter === "유효") {
        filteredList = filteredList.filter(user => user.remains > 0);
      } else if (filter === "만기예정(5일)") {
        filteredList = filteredList.filter(
          user => user.remains > 0 && user.remains <= 5
        );
      } else if (filter === "만기예정(7일)") {
        filteredList = filteredList.filter(
          user => user.remains > 0 && user.remains <= 7
        );
      } else if (filter === "만기예정(10일)") {
        filteredList = filteredList.filter(
          user => user.remains > 0 && user.remains <= 10
        );
      } else if (filter === "만기") {
        filteredList = filteredList.filter(user => user.remains === 0);
      } else if (filter === "남") {
        filteredList = filteredList.filter(user => user.gender === "남");
      } else if (filter === "여") {
        filteredList = filteredList.filter(user => user.gender === "여");
      } else {
        filteredList = filteredList.filter(user => user.name === filter);
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
        search,
        expireSelect,
        filter,
        customerCategoryList,
        genderList,
        filterFns: {
          onFilterClick,
          handleDeleteFilter,
          handleResetFilter,
          handleGenderClick,
          dataHandler,
          handleAddKeyword,
          handleEnterKeyword
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
  const {
    data,
    search,
    expireSelect,
    filter,
    customerCategoryList,
    genderList
  } = useContext(UserContext);
  return {
    data,
    search,
    expireSelect,
    filter,
    customerCategoryList,
    genderList
  };
};

export const useFilterFns = () => {
  const { filterFns } = useContext(UserContext);
  return filterFns;
};

export default UserContextProvider;
