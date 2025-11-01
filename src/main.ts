import express from "express";
import { EventEmitter }  from "node:events"
import { SAGAOrchestrator  } from './saga'
import { EcommerceServices  } from './services'
import {  Order, ShippingAddress, STATUS, PAYMENT_METHOD, OrderItem  } from './models.ts'


const app = express();

const PORT = "9000";

const emitter = new EventEmitter();

const services = new EcommerceServices(emitter);
const saga = new SAGAOrchestrator(emitter, services);
saga.start();


app.post("/order", (req, res, next) => {
		// Create order 
	 // emit event OrderCreated 
	  services.placeOrder("ORD-1234")
		res.json({ 'Succes': 'Order placed' })
});

app.listen(PORT, () => {
	console.log(`Saga running on port ${PORT}`);
})
