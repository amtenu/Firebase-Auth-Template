import { async } from "@firebase/util";
import { addDoc, collection } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { FirebaseContext } from "../providers/FirebaseProvider";

function AddHero() {
  const fbContext = useContext(FirebaseContext);
  const db = fbContext.db;
  const [name, setName] = useState("");
  const [vehicle, setVehicle] = useState("");

  const addHero = async (heroName, heroVehicle) => {
    try {
      let collectionRef = collection(db, "heroes");
      await addDoc(collectionRef, { name: heroName, vehicle: heroVehicle });
      setName("");
      setVehicle("");
    } catch (ex) {
      console.log("FireStore Add Failure", ex.message);
    }
  };

  return (
    <div>
      <input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="vehicle"
        value={vehicle}
        onChange={(e) => setVehicle(e.target.value)}
      />
      <button onClick={()=>addHero(name,vehicle)}>Add Hero</button>
    </div>
  );
}

export default AddHero;
