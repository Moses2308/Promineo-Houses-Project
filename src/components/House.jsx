import { useState } from "react";
import HouseOwner from "./HouseOwner";
import HouseImage from "./HouseImage";
import HouseAddress from "./HouseAddress";
import HouseArea from "./HouseArea";
import HouseBathrooms from "./HouseBathrooms";
import HouseBedrooms from "./HouseBedrooms";

export default function House(props) {
  const [editMode, setEditMode] = useState(false);

  const [ownerData, setOwnerData] = useState();
  const [imageData, setImageData] = useState();
  const [addressData, setAddressData] = useState();
  const [bedroomData, setBedroomData] = useState();
  const [bathroomData, setBathroomData] = useState();
  const [areaData, setAreaData] = useState();

  return (
    <div className="House">
      <HouseOwner {...props} setOwnerState={setOwnerData}></HouseOwner>
      <HouseImage {...props} setImageState={setImageData}></HouseImage>
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
    </div>
  );
}
