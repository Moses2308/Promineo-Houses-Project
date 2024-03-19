// recieves setstate functions and house data from House

import RequestManager from "../requestManager";

//needs props from house and to pass it to buttons as well as set
export default function EditHouseForm(props) {
  async function handleSubmit(event) {
    event.preventDefault();
    const defaultImg = "https://www.vinebrookhomes.com/img/default.png";
    const houseImg = event.target.houseImg.value
      ? event.target.houseImg.value
      : defaultImg;

    // new house to update server
    const editedHouse = {
      owner: event.target.owner.value,
      houseImg: houseImg,
      address: event.target.address.value,
      totalArea: event.target.area.value,
      numBathrooms: event.target.numBaths.value,
      numBedrooms: event.target.numBeds.value,
    };
    // request to put new hosue

    await RequestManager.putHouse(props.id, editedHouse);
    //TODO : update hosuesList state and make button toggle edit state
    props.setEditMode(false);
    props.setHousesList(await RequestManager.getHouses());
  }

  return (
    <>
      <div className="house__editForm">
        <form action="#" onSubmit={handleSubmit}>
          <label htmlFor={`editOwner-${props.id}`}>Owner: </label>
          <input
            defaultValue={props.owner}
            type="text"
            name="owner"
            id={`editOwner-${props.id}`}
          />
          <br />
          <label htmlFor={`editImage-${props.id}`}>IMG URL: </label>
          <input
            defaultValue={props.houseImg}
            type="text"
            name="houseImg"
            id={`editImage-${props.id}`}
          />
          <br />
          <label htmlFor={`editAddress-${props.id}`}>Address: </label>
          <input
            defaultValue={props.address}
            type="text"
            name="address"
            id={`editAddress-${props.id}`}
          />
          <br />
          <label htmlFor={`editArea-${props.id}`}>Area: </label>
          <input
            defaultValue={parseInt(props.totalArea)}
            type="number"
            name="area"
            id={`editArea-${props.id}`}
          />
          <br />
          <label htmlFor={`editBedrooms-${props.id}`}>Bedrooms: </label>
          <input
            defaultValue={parseInt(props.numBedrooms)}
            type="number"
            name="numBeds"
            id={`editBedrooms-${props.id}`}
          />
          <br />
          <label htmlFor={`editBathrooms-${props.id}`}>Bathrooms: </label>
          <input
            defaultValue={parseInt(props.numBathrooms)}
            type="number"
            name="numBaths"
            id={`editBathrooms-${props.id}`}
          />
          <EditButtons {...props}></EditButtons>
        </form>
      </div>
    </>
  );
}

function EditButtons(props) {
  return (
    <>
      <button
        type="button"
        className="house__cancelButton "
        onClick={() => props.setEditMode(false)}
      >
        Cancel
      </button>
      <button type="submit" className="house__submitButton">
        Submit
      </button>
    </>
  );
}
