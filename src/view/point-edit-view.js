import { createElement } from '../render.js';
import { mockDestinations, mockOffers } from '../mock/mock.js';
import { formatDateTimeForHtmlAttribute } from '../util.js';
import { POINT_TYPES, CITIES, BLANK_POINT } from '../const.js';

const getCitiesOptions = () => (CITIES.map((city) => `<option value="${city}"></option>`).join(''));

const getDestination = (point) => (mockDestinations.filter((el) => el.id === point.destination)[0]);

const createEventTypeDropdownTemplate = () => (
  Object.values(POINT_TYPES).map((pointType, ind) =>
    `
    <div class="event__type-item">
      <input id="event-type-${POINT_TYPES[pointType]}-${ind}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${POINT_TYPES[pointType]}">
      <label class="event__type-label  event__type-label--${POINT_TYPES[pointType]}" for="event-type-${POINT_TYPES[pointType]}-${ind}">${POINT_TYPES[pointType]}</label>
    </div>
    `
  ).join(''));

const createDestinationTitleTemplate = (point) => (getDestination(point)?.title);

const createDestinationDescriptionTemplate = (point) => (getDestination(point)?.description);

const createDestinationImagesTemplate = (point) => {
  const destination = getDestination(point);

  return destination?.pictures.map((picture) => `<img class="event__photo" src="${picture}" alt="Event photo">`);
};

const createOfferChoiceTemplate = (point) => {
  if (point.offers.length === 0) {
    return 'No available offers';
  }
  return mockOffers.map((offer, ind) => {
    const offerChecked = point.offers.filter((el) => el === offer.id).length > 0;
    return (
      `<div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-${ind}" type="checkbox" name="event-offer-comfort" ${offerChecked ? 'checked' : ''}>
        <label class="event__offer-label" for="event-offer-comfort-${ind}">
          <span class="event__offer-title">${offer.title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${offer.price}</span>
        </label>
      </div>
  `);
  }).join('');
};

const createPointEditTemplate = (point) => (
  `<form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${POINT_TYPES[point.type]}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>
              ${createEventTypeDropdownTemplate(point)}
            </fieldset>
          </div>
        </div>
        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${POINT_TYPES[point.type]}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${createDestinationTitleTemplate(point)}" list="destination-list-1">
          <datalist id="destination-list-1">
            ${getCitiesOptions()}
          </datalist>
        </div>
        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${formatDateTimeForHtmlAttribute(point.dateFrom)}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${formatDateTimeForHtmlAttribute(point.dateTo)}">
        </div>
        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${point.price}">
        </div>
        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      <section class="event__details">
        <section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>
          <div class="event__available-offers">
            ${createOfferChoiceTemplate(point)}
          </div>
        </section>
        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${createDestinationDescriptionTemplate(point)}</p>
          <div class="event__photos-container">
            <div class="event__photos-tape">
                ${createDestinationImagesTemplate(point)}
            </div>
          </div>
        </section>
      </section>
    </form>`
);

export default class PointEditView {
  constructor ({ point = BLANK_POINT }) {
    this.point = point;
  }

  getTemplate() {
    return createPointEditTemplate(this.point);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
