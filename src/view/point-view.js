import { createElement } from '../render.js';
import { mockDestinations, mockOffers } from '../mock/mock.js';
import { formatDateForDisplay, formatDateTimeForHtmlAttribute, formatTimeForDisplay } from '../util.js';
import { POINT_TYPES } from '../const.js';

const offerTemplate = (point) => {
  if (point.offers.length === 0) {
    return '<li class="event__offer">No additional offers</li>';
  }
  return point.offers.map((pointOfferId) => {
    const offer = mockOffers.filter((el) => el.id === pointOfferId)[0];
    return (
      `<li class="event__offer">
        <span class="event__offer-title">${offer.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </li>
  `);
  }).join('');
};

const pointTemplate = (point) => {
  const destination = mockDestinations.filter((el) => el.id === point.destination)[0];
  // eslint-disable-next-line no-useless-concat
  const title = `${ POINT_TYPES[point.type] } ` + `${ destination.title }`;
  return (
    `<li class="trip-events__item">
      <div class="event">
      <time class="event__date" datetime="${formatDateTimeForHtmlAttribute(point.dateFrom)}">${formatDateForDisplay(point.dateFrom)}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${POINT_TYPES(point.type)}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${title}</h3>
        <div class="event__schedule">
          <p class="event__time">
          <time class="event__start-time" datetime="${formatDateTimeForHtmlAttribute(point.dateFrom)}">${formatTimeForDisplay(point.dateFrom)}</time>
            &mdash;
            <time class="event__end-time" datetime="${formatDateTimeForHtmlAttribute(point.dateTo)}">${formatTimeForDisplay(point.dateTo)}</time>
          </p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${point.price}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          ${offerTemplate(point)}
        </ul>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`
  );
};

export default class PointView {
  getTemplate() {
    return pointTemplate();
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
