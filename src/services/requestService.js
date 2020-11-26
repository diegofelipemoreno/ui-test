const jsonModel = require('../models/model.json');

/**
 * Request Service to get data from the API.
 */
export class RequestService {
  /**
   * Request Service constructor.
   */
  constructor() {}

  /**
    * Requests the JSON data.
    * @public
    */
   getJson() {
    return jsonModel;
  }
}

export const requestService = new RequestService();