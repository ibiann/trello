//saveContentColumnTitle
export const saveContentColumnTitle = (e) => {
  if (e.key === "Enter") {
    e.target.preventDefault();
    e.target.blur();
  }
};

//selectAllContentColumn
export const selectAllText = (e) => {
  e.target.focus();
  document.execCommand("SelectAll", false, null);
};
