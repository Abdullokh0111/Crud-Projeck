const express = require("express");
const productRoutes = require("./routes/productRoutes");
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();
app.use(express.json());
app.use("/", productRoutes);
app.use(errorMiddleware);

const port = 8100;
app.listen(config.PORT, () => {
    console.log(`Server is running on port ${port}`);
});