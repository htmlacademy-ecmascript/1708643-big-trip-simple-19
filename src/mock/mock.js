import { getRandomArrayElement, randomElement, onlyUnique } from '../util.js';
import { POINT_TYPES, CITIES, DESCRIPTIONS, OFFERS } from '../const.js';

const mockDestinations = [
  {
    id: 1,
    title: getRandomArrayElement(CITIES),
    description: getRandomArrayElement(DESCRIPTIONS),
    pictures: [
      `https://loremflickr.com/248/152?random=${randomElement}`
    ]
  },
  {
    id: 2,
    title: getRandomArrayElement(CITIES),
    description: getRandomArrayElement(DESCRIPTIONS),
    pictures: [
      `https://loremflickr.com/248/152?random=${randomElement}`
    ]
  },
  {
    id: 3,
    title: getRandomArrayElement(CITIES),
    description: getRandomArrayElement(DESCRIPTIONS),
    pictures: [
      `https://loremflickr.com/248/152?random=${randomElement}`
    ]
  },
  {
    id: 4,
    title: getRandomArrayElement(CITIES),
    description: getRandomArrayElement(DESCRIPTIONS),
    pictures: [
      `https://loremflickr.com/248/152?random=${randomElement}`
    ]
  }
];

const getRandomDestination = () => (getRandomArrayElement(mockDestinations));

const mockOffers = [
  {
    id: 1,
    title: getRandomArrayElement(OFFERS),
    price: 100
  },
  {
    id: 2,
    title: getRandomArrayElement(OFFERS),
    price: 200
  },
  {
    id: 3,
    title: getRandomArrayElement(OFFERS),
    price: 300
  },
  {
    id: 4,
    title: getRandomArrayElement(OFFERS),
    price: 400
  },
  {
    id: 5,
    title: getRandomArrayElement(OFFERS),
    price: 500
  }
];

const getRandomOffer = () => (getRandomArrayElement(mockOffers));

const getRandomOffers = () => {
  const offerCount = Math.floor(Math.random() * 5);
  // eslint-disable-next-line no-shadow
  return Array.from({ length: offerCount }, getRandomOffer).map((OFFERS) => OFFERS.id).filter(onlyUnique);
};

const mockPoints = [
  {
    id: 0,
    type: getRandomArrayElement(POINT_TYPES),
    offers: getRandomOffers(),
    destination: getRandomDestination(),
    basePrice: 500,
    dateFrom: '2022-12-26 20:55:56',
    dateTo: '2022-12-27 10:22:13'
  },
  {
    id: 1,
    type: getRandomArrayElement(POINT_TYPES),
    offers: getRandomOffers(),
    destination: getRandomDestination(),
    basePrice: 200,
    dateFrom: '2023-01-04 18:45:52',
    dateTo: '2023-01-05 08:22:24'
  },
  {
    id: 2,
    type: getRandomArrayElement(POINT_TYPES),
    offers: getRandomOffers(),
    destination: getRandomDestination(),
    basePrice: 300,
    dateFrom: '2023-01-06 22:55:56',
    dateTo: '2023-01-07 11:22:13'
  },
  {
    id: 3,
    type: getRandomArrayElement(POINT_TYPES),
    offers: getRandomOffers(),
    destination: getRandomDestination(),
    basePrice: 100,
    dateFrom: '2023-01-12 19:50:25',
    dateTo: '2023-01-13 07:14:34'
  },
  {
    id: 4,
    type: getRandomArrayElement(POINT_TYPES),
    offers: getRandomOffers(),
    destination: getRandomDestination(),
    basePrice: 50,
    dateFrom: '2022-12-20 21:55:40',
    dateTo: '2022-12-21 10:22:24'
  },
  {
    id: 5,
    type: getRandomArrayElement(POINT_TYPES),
    offers: getRandomOffers(),
    destination: getRandomDestination(),
    basePrice: 150,
    dateFrom: '2023-01-06 22:15:16',
    dateTo: '2023-01-07 11:12:13'
  },
  {
    id: 6,
    type: getRandomArrayElement(POINT_TYPES),
    offers: getRandomOffers(),
    destination: getRandomDestination(),
    basePrice: 200,
    dateFrom: '2023-01-20 22:24:17',
    dateTo: '2023-01-21 11:19:44'
  },
  {
    id: 7,
    type: getRandomArrayElement(POINT_TYPES),
    offers: getRandomOffers(),
    destination: getRandomDestination(),
    basePrice: 120,
    dateFrom: '2023-01-15 22:32:11',
    dateTo: '2023-01-16 11:42:30'
  },
  {
    id: 8,
    type: getRandomArrayElement(POINT_TYPES),
    offers: getRandomOffers(),
    destination: getRandomDestination(),
    basePrice: 300,
    dateFrom: '2023-01-11 16:05:40',
    dateTo: '2023-01-12 07:20:20'
  }
];

const getRandomPoint = () => (getRandomArrayElement(mockPoints));

export { mockDestinations, mockOffers, mockPoints, getRandomPoint };
