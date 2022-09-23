import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { createClient, Provider } from "urql";
import { Hero } from "./Hero";

const client = createClient({
  url: "http://localhost:4000/graphql",
});

function App() {
  return (
    <Provider value={client}>
      <div className="App">
        <h1>Graphql + Typescript</h1>
        <div>
          <Hero />
        </div>
      </div>
    </Provider>
  );
}

export default App;
