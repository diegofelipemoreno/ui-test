/**
 * Local Storage Service.
 */
export class LocalStorageService {
  /**
   * Local Storage constructor.
   * @param {!Object} data The value data to set the data on the localstorage.
   */
  constructor(data) {
    /**
     * @private {!Object}
     */
    this.data_ = data;

    /**
     * @private {!Window}
     */
    this.global_ = window;
  }

  /**
   * Sets state model data on the window localstorage.
   * @param {!Object} state The store state object.
   * @param {string} key The key parameter to set the state data on 
   *     the localstorage.
   * @public
   */
  setState(state, key) {
    let currentState = '';

    if(typeof(state) === 'object') {
      currentState = JSON.stringify(state) || '';
      this.global_.localStorage.setItem(key, currentState);
    }
  }

  /**
   * Gets the state data.
   * @param {string} key The key parameter to set the state data on 
   *     the localstorage.
   * @return {!Object}
   * @public
   */
  getState(key) {
    const modelLocalStorage = this.global_.localStorage[key];
    let currentState = this.data_;

    if (modelLocalStorage) {
      currentState = JSON.parse(modelLocalStorage);
    } else {
      this.setState(currentState, key);
    }

    return currentState;
  }
}