import dayjs from 'dayjs';
import { DATE_TIME_FORMAT } from './const.js';

const getRandomArrayElement = (items) => (
  items[Math.floor(Math.random() * items.length)]
);

const randomElement = () => Math.random();

const onlyUnique = (value, index, self) => (self.indexOf(value) === index);

export const formatDateTimeForHtmlAttribute = (date) => dayjs(date).format(DATE_TIME_FORMAT.html);
export const formatDateForDisplay = (date) => dayjs(date).format(DATE_TIME_FORMAT.pointDate);
export const formatTimeForDisplay = (date) => dayjs(date).format(DATE_TIME_FORMAT.pointTime);

export { getRandomArrayElement, randomElement, onlyUnique };
