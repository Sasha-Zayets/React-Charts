import { randomNumber } from "./randomNumber";

export const generateData = () => {
  const users = generateUserAge(20); // generate random user
  let allUserAge = [];

  users.forEach(user => {
    allUserAge.push(user.age);
  });

  const maxAge = maxNumberArray(allUserAge);

  return {
    category: generateAgeCategory(10, maxAge),
    dataUser: generateUserCountAge(users, maxAge)
  };
};

export const generateAgeCategory = (start, maxNumber) => {
  const iteration = Math.round(maxNumber / 10);
  let category = [];
  let startCategory = start;

  for (let i = 1; i <= iteration; i++) {
    const nextAge = (i + 1) * 10;

    if (i === iteration) {
      category.push(`${startCategory}+`);
    } else {
      category.push(`${startCategory}-${nextAge}`);
    }

    startCategory += 10;
  }

  return category;
};

export const generateUserCountAge = (array = [], maxNumber) => {
  const count = Math.floor(maxNumber / 10);
  let resultDataMan = [];
  let resultDataWoman = [];

  for (let i = 1; i <= count; i++) {
    const min = i * 10;
    const nextAge = (i + 1) * 10;
    let countMan = 0;
    let countWoman = 0;

    array.forEach(el => {
      if (el.name === "man") {
        if (el.age < nextAge && el.age > min) {
          countMan++;
        }
      } else {
        if (el.age < nextAge && el.age > min) {
          countWoman++;
        }
      }
    });

    resultDataMan.push(countMan);
    resultDataWoman.push(countWoman);
  }

  return [
    {
      name: "man",
      data: resultDataMan
    },
    {
      name: "woman",
      data: resultDataWoman
    }
  ];
};

export const maxNumberArray = (result = []) => {
  let count = 0;

  result.forEach(el => {
    if (count < el) {
      count = el;
    }
  });

  return count;
};

export const generateUserAge = count => {
  let users = [];

  for(let i = 0; i < count; i++) {
    const gender = randomNumber(0, 2); // man or woman

    users.push({
      age: randomNumber(10, 30)
    });

    gender === 0 ? users[i].name = 'woman' : users[i].name = 'man'
  }

  return users;
};
