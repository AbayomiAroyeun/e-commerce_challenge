const express = require('express');
const routes = require('./routes');
// import sequelize connection
const {Model, DataTypes, DECIMAL} = require('sequelize');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server


db.sync({ force : false}).then(() => {
  //Create a new category
Category.create({
  name: 'Vehicles',
  category_name: 'Truck', 
})
.then((newcategory) => {
console.log(newCategory);

})
.catch((error) => {
console.log(error);
});

// Start the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
});
