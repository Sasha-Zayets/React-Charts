import { randomNumber } from './randomNumber';

export const generateData = () => {
    const userAge = generateUserAge(20); // generate random user
    let resultAllUserAge =  [];

    userAge.forEach(user => {
        resultAllUserAge.push(user.age);
    });

    // max Age
    const maxNumber = maxNumberArray(resultAllUserAge);

    return {
        category: generateAgeCategory(10, maxNumber),
        dataUser: generateUserCountAge(userAge, maxNumber),
    };
}

export const generateAgeCategory = (start, maxNumber) => {
    const count = Math.floor(maxNumber / 10);
    let category = [];
    let test = start;

    for(let i = 1; i <= count; i++) {
        const nextAge = (i + 1) * 10;

        if(i === count) {
            category.push(`${test}+`);
        } else {
            category.push(`${test}-${nextAge}`);
        }
        test += 10;
    }

    return category;
}

export const generateUserCountAge = (array = [], maxNumber) => {
    const count = Math.floor(maxNumber / 10);
    let resultDataMan = [];
    let resultDataWoman = [];

    for(let i = 1; i <= count; i++) {
        const min = i * 10;
        const nextAge = (i + 1) * 10;
        let countMan = 0;
        let countWoman = 0;

        array.forEach(el => {
            if (el.name === 'man') {
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
            name: 'man',
            data: resultDataMan
        },
        {
            name: 'woman',
            data: resultDataWoman
        }
    ]
}

export const maxNumberArray = (result = []) => {
    let count = 0;

    result.forEach(el => {
        if (count < el) {
            count = el;
        }
    });

    return count;
}

export const generateUserAge = (count) => {
    let userAge = [];
    let i = 0;

    while(i < count) {
        const genderNumber = randomNumber(0, 2);
        if(genderNumber === 0) {
            userAge.push({
                name: 'woman',
                age: randomNumber(10, 30)
            });
        } else {
            userAge.push({
                name: 'man',
                age: randomNumber(10, 30)
            });
        }
        i++;
    }

    return userAge;
}