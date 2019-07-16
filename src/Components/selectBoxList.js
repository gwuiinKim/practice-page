export const genderOptions = [
  { value: "남자", label: "남자" },
  { value: "여자", label: "여자" }
];

const membership = ["1개월", "3개월", "6개월", "9개월", "12개월"];

export const membeshipOptions = membership.map(option => {
  return { value: option, label: option };
});
