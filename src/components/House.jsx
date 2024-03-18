import { useState } from "react";
import HouseOwner from "./HouseOwner";

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
      <div className="House__image"></div>
      <div className="Hosue__address"></div>
      <div className="House__bedrooms"></div>
      <div className="House__bathroooms"></div>
      <div className="hosue__area"></div>
    </div>
  );
}
