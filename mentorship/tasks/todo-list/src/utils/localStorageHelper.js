export const getLocalListStorage = (itemName) => {
  let list = localStorage.getItem(itemName);
  return list ? JSON.parse(list): []
};