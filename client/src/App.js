import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import bootstrapCyborgTheme from "./bootstrap.cyborg.css";
import logo from "./spaceX_logo.PNG";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <img
          src={logo}
          alt="SpaceX"
          style={{ width: 300, display: "block", margin: "0 auto" }}
        />
      </div>
    </ApolloProvider>
  );
}

export default App;
