import { render } from '../render.js';
import PointEditView from '../view/point-edit-view.js';
import FilterView from '../view/filter-view.js';
import PointView from '../view/point-view.js';
import SortView from '../view/sort-view.js';
import PointListView from '../view/point-list-view.js';
import { POINT_LIST_RENDER_COUNT } from '../const.js';

export default class TripPresenter {
  pointListView = new PointListView();

  constructor({filterContainer, siteMainContainer}) {
    this.filterContainer = filterContainer;
    this.siteMainContainer = siteMainContainer;
  }

  init() {
    render(new PointEditView(), this.pointListView.getElement());
    render(new FilterView(), this.filterContainer);
    render(new SortView(), this.siteMainContainer);
    render(this.pointListView, this.siteMainContainer);

    for (let i = 0; i < POINT_LIST_RENDER_COUNT; i++) {
      render(new PointView(), this.pointListView.getElement());
    }
  }
}
