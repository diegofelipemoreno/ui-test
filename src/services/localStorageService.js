import {requestService} from './requestService';


/**
 * Local Storage Service.
 */
class LocalStorageService {
  /**
   * Local Storage constructor.
   * @param {Window} global
   */
  constructor(global) {
    /**
     * @private {!Object}
     */
    this.model_ = requestService.getJson();

    /**
     * @private {!Window}
     */
    this.global_ = global;
  }

  /**
   * Checks if the model content is setted on the window.localstorage;
   * @private
   */
  isModelLocalStorage_() {
    const isModelLocalStorage = this.global_.localStorage.model;

    return isModelLocalStorage;
  }

  /**
   * Sets state model data on the window localstorage.
   * @param {!Object} state The store state object.
   * @public
   */
  setState(state) {
    let currentState = '';

    if(typeof(state) === 'object') {
      currentState = JSON.stringify(state) || '';
      this.global_.localStorage.setItem('model', currentState);
    }
  }

  /**
   * Gets the state data.
   * @return {!Object}
   * @public
   */
  getState() {
    const isModelLocalStorage = this.isModelLocalStorage_();
    let stringModelData = '';
    let currentState = this.model_;

    if (isModelLocalStorage) {
      stringModelData = this.global_.localStorage.getItem('model');
      currentState = JSON.parse(stringModelData);
    }

    return currentState;
  }
}

export const localStorageService = new LocalStorageService(window);