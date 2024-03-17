export default class RequestManager {
  static async getHouses() {
    const response = await fetch("http://localhost:5000/homes");
    const houseData = await response.json();
    return houseData;
  }
}
