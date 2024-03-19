// recieves setstate functions and house data from House
//needs props from house and to pass it to buttons as well as set
export default function EditHouseForm(props) {
  return (
    <>
      <div className="house__editForm">
        <form action="#">
          <label htmlFor={`editOwner-${props.id}`}>Owner: </label>
          <input
            defaultValue={props.owner}
            type="text"
            name="Owner"
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
          <label htmlFor={`editBathrooms-${props.id}`}>Bathrooms: </label>
          <input
            defaultValue={parseInt(props.numBathrooms)}
            type="number"
            name="numBaths"
            id={`editBathrooms-${props.id}`}
          />
          <br />
          <label htmlFor={`editBedrooms-${props.id}`}>Bedrooms: </label>
          <input
            defaultValue={parseInt(props.numBedrooms)}
            type="number"
            name="numBeds"
            id={`editBedrooms-${props.id}`}
          />
          <EditButtons {...props}></EditButtons>
        </form>
      </div>
    </>
  );
}
//TODO : implement edit functionality
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
      <button type="button" className="house__submitButton">
        Submit
      </button>
    </>
  );
}
