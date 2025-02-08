import Card from "../components/Card";

import { useState, useEffect } from "react";
import axios from "axios";

export default function Menu() {
  const [menu, setMenu] = useState([]);

  const fetchMenu = () => {
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      setMenu(response.data.results);
    });
  };

  useEffect(fetchMenu, []);

  return (
    <div className="container max-w-7xl mx-auto py-12">
      <h1 className="text-3xl font-bold text-yellow-500 mb-6">
        Lista personaggi
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {menu.map((pers) => (
          <div key={pers.id}>
            <Card pers={pers} />
          </div>
        ))}
      </div>
    </div>
  );
}
