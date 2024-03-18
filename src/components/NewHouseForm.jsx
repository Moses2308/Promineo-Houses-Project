import RequestManager from "../requestManager";

export default function NewHouseForm() {
  function HandleSubmit(event) {
    event.preventDefault();
    // logic for default img or user img
    const defaultImg = "https://www.vinebrookhomes.com/img/default.png";
    const houseImg = event.target.houseImg.value
      ? event.target.houseImg.value
      : defaultImg;
    // New house to submit to server
    const NewHouse = {
      owner: event.target.owner.value,
      houseImg: houseImg,
      address: event.target.address.value,
      numBedrooms: event.target.numBedrooms.value,
      numBathrooms: event.target.numBathrooms.value,
      totalArea: event.target.totalArea.value,
    };
    //Posting to server
    RequestManager.postHouse(NewHouse);
  }

  return (
    <form action="#" id="newHouseForm" onSubmit={HandleSubmit}>
      <label htmlFor="owner">Owner Name: </label>
      <input type="text" id="owner" name="owner" />

      <label htmlFor="houseImg">House img URL: </label>
      <input type="text" id="houseImg" name="houseImg" />

      <label htmlFor="address">Address: </label>
      <input type="text" id="address" name="address" required />

      <label htmlFor="numBedrooms">Number of Bedrooms: </label>
      <input type="number" name="numBedrooms" id="numBedrooms" required />

      <label htmlFor="numBathrooms">Number of Bathrooms: </label>
      <input type="number" name="numBathrooms" id="numBathrooms" required />

      <label htmlFor="totalArea">Total Area</label>
      <input type="number" name="totalArea" id="totalArea" required />

      <button type="submit">Create House</button>
      <button type="reset">Clear</button>
    </form>
  );
}

/*

TODO: 

form should reset the state of the application for list of houses

*/
