
const express = require('express');
const cors=require('cors')
const app = express();
const sequelize = require('./utils/database'); 
const Order = require('./models/Order');
const User = require('./models/User');
const Cart = require('./models/Cart');
const Product = require('./models/Product');

 const userRoutes = require('./routes/userRoutes');
const loginRoutes = require('./routes/loginRoutes');
const cartRoutes = require('./routes/cartRoutes');
const productRoutes = require('./routes/productRoutes')
const orderRoutes = require('./routes/orderRoutes')
app.use(express.json());
app.use(cors());


 app.use('/users', userRoutes);
app.use('/users', loginRoutes);
app.use('/cart',cartRoutes);
app.use('/product',productRoutes );
app.use('/order',orderRoutes );

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Database synced');
    app.listen(3001, () => {
      console.log('Server started on port 3001');
    });
  })
  .catch((error) => console.error('Error syncing database:', error));
