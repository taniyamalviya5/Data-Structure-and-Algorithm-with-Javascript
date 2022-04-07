const items = [];

const isEmpty = () => {
  return !Boolean(items.length);
};

const addFront = (item) => {
  items.unshift(item);
};

const addRear = (item) => {
  items.push(item);
};

const removeFront = () => {
  return items.shift();
};

const removeRear = () => {
  return items.pop();
};

const size = () => {
  return items.length;
};
