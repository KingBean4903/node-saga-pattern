import { EventEmitter } from 'node:event';

export class EcommerceServices {

	constructor(public readonly emitter: EventEmiiter){}


	placeOrder(payload) {	
		// emits OrderCreated
		console.log(`Handling order creation on order ${payload} ...`)
					this.emitter.emit('order.created', payload);
	}

	handlePayment(payload) {
			// consumes PaymentRequested
		 // emits PaymentReceived
		  console.log(`Handling payment on order ${payload}`)
			this.emitter.emit('payment.received', `${payload}`);
	}

	handleReserveStock(payload: string) {	
			// consumes payment.received 
		  // emits inventory.reserved
			console.log(`Reserving stock ${payload}`);
			this.emitter.emit('inventory.reserved', `${payload}`);
	}

	handleShipping(payload: string) {
			// consumes inventory.reserved
		  // emits  order.shipped
			console.log(`Handling shipping on order: ${payload}`)
			this.emitter.emit('order.shipped', `${payload}`);
	}

	handleDelivery(payload: string) {
			// consumes order.shipped
			// emits order.delivered
			console.log(`Handling  ${payload} received`)
	}

}
