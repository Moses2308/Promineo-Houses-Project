import { useState } from "react";
import RequestManager from "../requestManager";
import EditHouseForm from "./EditHouseForm";

export default function House(props) {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="house">
      {editMode ? (
        <EditHouseForm {...props} setEditMode={setEditMode} />
      ) : (
        <HouseContent {...props} setEditMode={setEditMode} />
      )}
    </div>
  );
}

//needs props and to pass to buttons
function HouseContent(props) {
  return (
    <>
      <div className="house__content">
        <img src={props.houseImg} alt={`img of ${props.owner}'s house`} />
        <p>{props.owner}</p>
        <p>Address : {props.address}</p>
        <p>House Area : {props.totalArea}</p>
        <p>Bedrooms : {props.numBedrooms}</p>
        <p>Bathrooms : {props.numBathrooms}</p>
      </div>
      <Defaultbuttons {...props} />
    </>
  );
}

// needs props from house and setEditMode
function Defaultbuttons(props) {
  return (
    <>
      <button
        type="button"
        className="house__editButton"
        onClick={() => {
          props.setEditMode(true);
        }}
      >
        Edit
      </button>
      <button
        type="button"
        className="house__deleteButton"
        onClick={async () => {
          props.setHousesList(
            props.housesList.filter((house) => house.id != props.id)
          );
          await RequestManager.deleteHouse(props.id);
        }}
      >
        Delete
      </button>
    </>
  );
}

//create a new component housing house content
//put default buttons in house content
