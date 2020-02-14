import { generateData } from "../helpers/generateUserData";
import {
  generateCommentsData,
  randomData,
  randomCategories
} from "../helpers/generateCommentsData";

export const setCategoryUser = payload => ({
  type: "SET_CATEGORY_USER",
  payload
});

export const setDataUser = payload => ({
  type: "SET_USER_DATA",
  payload
});

export const getUserData = () => dispatch => {
  const { category, dataUser } = generateData();

  dispatch(setCategoryUser(category));
  dispatch(setDataUser(dataUser));
};

export const setCommentsData = payload => ({
  type: "SET_COMMENTS_DATA",
  payload
});

export const setCommentsCategories = payload => ({
  type: "SET_COMMENTS_CATEGORIES",
  payload
});

export const getCommentsData = () => dispatch => {
  const count = 4;
  const data = randomData(count);
  const category = randomCategories(count);
  const resultData = generateCommentsData(data);

  dispatch(setCommentsData(resultData));
  dispatch(setCommentsCategories(category));
};
