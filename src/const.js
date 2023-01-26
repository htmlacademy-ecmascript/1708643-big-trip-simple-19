import dayjs from 'dayjs';

const POINT_TYPES = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant'
];

const CITIES = [
  'Geneva',
  'Tokio',
  'London',
  'Kazan',
  'Madrid',
  'Rim',
  'Moscow'
];

const DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.'
];

const OFFERS = [
  'Upgrade to business',
  'Upgrade to comfort',
  'Upgrade to first class',
  'Travel with kids',
  'Travel with pets',
  'Luxury'
];

const DATE_TIME_FORMAT = {
  html: 'YYYY-MM-DDTHH:mm',
  pointDate: 'MMM DD',
  pointTime: 'HH:mm',
  formDateTimeAttribute: 'DD/MM/YY HH:mm'
};

const BLANK_POINT = {
  type: POINT_TYPES[1],
  destination: 1,
  dateFrom: dayjs(),
  dateTo: dayjs(),
  basePrice: 0,
  offers: OFFERS[1]
};

export { POINT_TYPES, CITIES, DESCRIPTIONS, OFFERS, DATE_TIME_FORMAT, BLANK_POINT };
