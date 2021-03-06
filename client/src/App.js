import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import bootstrapCyborgTheme from "./bootstrap.cyborg.css";
import logo from "./spaceX_logo.PNG";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  headers: {
    // basic test of fubar auth token
    // comment this out and recieve no data
    authorization: "fubar"
  }
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img
            src={logo}
            alt="SpaceX"
            style={{ width: 300, display: "block", margin: "0 auto" }}
          />
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch_:flight_number" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
