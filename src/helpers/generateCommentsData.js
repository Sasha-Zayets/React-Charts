import { randomNumber } from './randomNumber';

export const generateCommentsData = (data) => {
    const result = [];
  
    data.forEach(item => {
      result.push(item);
    });
  
    return [
      {
        name: "comments",
        data: result
      }
    ];
}

export const randomData = (count) => {
    let data = [];
    let iteration = 0;

    while (iteration < count) {
        data.push(randomNumber(0, 20));
        iteration++;
    }

    return data;
}

export const randomCategories = (count) => {
    let categories = [];
    let i = 0;

    while (i < count) {
        categories.push(randomDate());
        i++;
    }

    return categories;
}

export const randomDate = () => {
    const day = randomNumber(1, 30);
    const mouth = randomNumber(1, 12);
    const year = randomNumber(1, 20);
    const valueYear = `20${year >= 10 ? year : "0" + year}`;

    return `${day}.${mouth}.${valueYear}`;
}