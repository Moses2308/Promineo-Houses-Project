export default class RequestManager {
  static async getHouses() {
    const response = await fetch("http://localhost:5500/homes");
    const houseData = await response.json();
    return houseData;
  }

  static async postHouse(houseObject) {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(houseObject),
    };
    await fetch("http://localhost:5500/homes", fetchOptions);
  }

  static async deleteHouse(id) {
    const fetchOptions = {
      method: "Delete",
    };
    await fetch(`http://localhost:5500/homes/${id}`, fetchOptions);
  }
}
