
import cors from 'cors';
import dotenv  from 'dotenv';
import express from 'express';
import mongoose from "mongoose";
import logging from './library/logging';
import product_router from './routers/product.routes';
import category_router from './routers/category.routes';



const url="mongodb://127.0.0.1:27017";
const server=express();

mongoose.Promise=global.Promise;
mongoose.set("strictQuery", false);
mongoose.connect(url,{
    retryWrites:true,
    w: "majority",
}).then(()=>{logging.info("welcome to mongo!! connected!");})
.catch((error)=>{
    logging.error("unable to connect: ");
    logging.error(error);
})

dotenv.config()
server.use(express.json());
server.use(cors());


//routes
server.use("/product", product_router);
server.use("/category", category_router);

server.listen(3005,()=>{
    // console.log(`server is listening on port : ${config.server.port}`);
    console.log(`server is listening on port : 3005`);
})
