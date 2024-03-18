import { useState } from "react";
import NewHouseForm from "./components/NewHouseForm";
import RequestManager from "./requestManager";

function App() {
  // Beginning of Render
  return (
    <>
      <NewHouseForm></NewHouseForm>
      <div className="homes-container"></div>
    </>
  );
}

export default App;
