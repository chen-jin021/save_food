const express = require("express");
const app = express();

const port = 5000;

//creating the home page
app.get("/", (req, res) => {
  const customer = [
    { id: 1, firstName: "John", lastname: "Doe" },
    { id: 2, firstName: "Steve", lastname: "Smith" },
    { id: 3, firstName: "Mary", lastname: "Swamthon" },
  ];

  res.json(customer);
});

app.listen(port, () => console.log(`Server started on port: ${port}`));
