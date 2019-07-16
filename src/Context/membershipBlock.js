export const handleMembershipClick = async (
  e,
  filter,
  expireSelect,
  checkUniqueness
) => {
  const {
    target: { innerText }
  } = e;
  // const filtered = await filter.filter(el => !el.includes("만기예정"));
  // await setFilter(filtered);
  // console.log(filtered);
  // to do 체크한 거랑 목록이랑 연동
  // 잘 안되네..
  if (innerText.includes("만기예정")) {
    const value = innerText.split("만기예정")[1];
    const regExp = /\(([^)]+)\)/;
    const matches = regExp.exec(value)[1];
    // const matchNumber = matches.slice(0, -1);
    if (
      !filter.includes("만기예정(5일)") ||
      !filter.includes("만기예정(7일)") ||
      !filter.includes("만기예정(10일)")
    ) {
      expireSelect.setValue({ value: matches, label: matches });
      console.log("working");
    } else {
      expireSelect.setValue(null);
    }
    checkUniqueness(innerText);
  }
};
