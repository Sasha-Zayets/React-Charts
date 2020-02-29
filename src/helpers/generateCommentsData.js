import { randomNumber } from "./randomNumber";

export const generateCommentsData = data => {
  const result = data.map(item => {
    return item;
  });

  return [
    {
      name: "comments",
      data: result
    }
  ];
};

export const randomData = count => {
  let data = [];

  for(let i = 0; i < count; i++) {
    data.push(randomNumber(0, 20));
  }
 
  return data;
};

export const randomCategories = count => {
  let categories = [];
  let i = 0;

  while (i < count) {
    categories.push(randomDate());
    i++;
  }

  return categories;
};

export const randomDate = () => {
  const day = randomNumber(1, 30);
  const mouth = randomNumber(1, 12);
  const year = randomNumber(2000, 2020);

  return `${day}.${mouth}.${year}`;
};
