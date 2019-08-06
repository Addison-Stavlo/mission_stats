import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Launches from "./components/Launches";
import bootstrapCyborgTheme from "./bootstrap.cyborg.css";
import logo from "./spaceX_logo.PNG";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img
          src={logo}
          alt="SpaceX"
          style={{ width: 300, display: "block", margin: "0 auto" }}
        />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
