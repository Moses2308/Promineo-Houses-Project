import { useState } from "react";
import NewHouseForm from "./components/NewHouseForm";
import House from "./components/House";
import RequestManager from "./requestManager";

const initialHousesList = await RequestManager.getHouses();

function App() {
  const [housesList, setHousesList] = useState(initialHousesList);

  return (
    <>
      <NewHouseForm
        updateHousesState={(newArray) => setHousesList(newArray)}
      ></NewHouseForm>

      <div className="houses-container">
        {housesList.map((house) => (
          <House
            {...house}
            key={house.id}
            housesList={housesList}
            setHousesList={setHousesList}
          ></House>
        ))}
      </div>
    </>
  );
}

export default App;
