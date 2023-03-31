import express from "express";
import bodyParser from "body-parser";
import mongoose, { mongo } from "mongoose";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import expenseRoutes from "./routes/expense.routes.js";

const app = express();
mongoose.connect(
	"mongodb+srv://sparshverma1511:WPQtRreiJO1CTy9e@expense-tracker-db.kulb1tx.mongodb.net/?retryWrites=true&w=majority"
);
mongoose.connection.on("error", () => {
	throw new Error(`unable to connect to database: ${config.mongoUri}`);
});

app.use("/", userRoutes);
app.use("/", authRoutes);
app.use("/", expenseRoutes);

//req body middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, (err) => {
	if (err) {
		console.log(err);
	}
	console.info("Server started on port %s.", 3000);
});
