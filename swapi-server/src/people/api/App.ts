import "reflect-metadata";
import dotenv from "dotenv";
import AppServer from "./models/AppServer";

dotenv.config();

//Creating an instance of main app server
const app = new AppServer();

//Start application
app.Startup();

