import { EventEmitter }  from "node:events"
import { EcommerceServices  } from './services'

export class SAGAOrchestrator {

	constructor(
						 public readonly emitter: EventEmitter, 
						 public readonly  services: EcommerceServices){}

  start() {

			this.emitter.on('order.created', (payload: string) => {
					this.emitter.emit('payment.pending', `${payload}`);
			});

			this.emitter.on('payment.pending', (payload) => {
					this.services.handlePayment(payload);
			});

			this.emitter.on('payment.received', (payload) => {
					this.services.handleReserveStock(payload);
			});
		
			this.emitter.on('inventory.reserved', (payload) => {
					this.services.handleShipping(payload);
			});

			this.emitter.on('order.shipped', (payload) => {
					this.services.handleDelivery(payload);
			});

	}


}
