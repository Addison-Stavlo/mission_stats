const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const schema = require("./schema.js");

const app = express();
app.use(cors());

function testMiddleware(req, res, next) {
  req.key = "fubar";
  next();
}

app.use(testMiddleware);
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server start on port: ${PORT}`));
