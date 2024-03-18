import { useState } from "react";
import HouseOwner from "./HouseOwner";
import HouseImage from "./HouseImage";
import HouseAddress from "./HouseAddress";
import HouseArea from "./HouseArea";
import HouseBathrooms from "./HouseBathrooms";
import HouseBedrooms from "./HouseBedrooms";
import RequestManager from "../requestManager";

export default function House(props) {
  const [editMode, setEditMode] = useState(false);

  const [ownerData, setOwnerData] = useState();
  const [imageData, setImageData] = useState();
  const [addressData, setAddressData] = useState();
  const [bedroomData, setBedroomData] = useState();
  const [bathroomData, setBathroomData] = useState();
  const [areaData, setAreaData] = useState();

  return (
    <div className="house">
      <HouseImage {...props} setImageState={setImageData}></HouseImage>
      <HouseOwner {...props} setOwnerState={setOwnerData}></HouseOwner>
      <HouseAddress {...props} setAddressState={setAddressData}></HouseAddress>
      <HouseArea {...props} setAreaState={setAreaData}></HouseArea>
      <HouseBathrooms
        {...props}
        setBathroomState={setBathroomData}
      ></HouseBathrooms>
      <HouseBedrooms
        {...props}
        setBedroomState={setBathroomData}
      ></HouseBedrooms>
      {editMode ? (
        <EditButtons setEditMode={setEditMode} />
      ) : (
        <Defaultbuttons {...props} setEditMode={setEditMode} />
      )}
    </div>
  );
}
//TODO : IMPLEMENT DELETE FUNCTIONALITY
//needs to update houseslist state variable and send a delete request
function Defaultbuttons(props) {
  return (
    <>
      <button
        type="button"
        className="house__editButton"
        onClick={() => props.setEditMode(true)}
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
//TODO: IMPLEMENT EDIT FUNCTIONALITY
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
