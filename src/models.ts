
interface OrderItem {
	sku: string;
	name: string;
	quantity: string;
	unit_price: string;
	subtotal: string,
}

enum PAYMENT_METHOD  {
		CARD = "CARD",
		WALLET = "WALLET",
}

enum STATUS {
	CREATED = "CREATED",
	PAYMENT_PENDING = "PAYMENT_PENDING",
	PAID = "PAID",
	READY_TO_SHIP = "READY_TO_SHIP",
	SHIPPED = "SHIPPED",
	DELIVERED = "DELIVERED",
	CANCELLED = "CANCELLED"
};

type CURRENCY = "KES" | "USD";

type ShippingAddress = {

	street: string;
	city: string;
	state?: string;
	postalCode: string;
	country: string;
}


interface Order {
	 order_id: string;
	 customer_id: string;
	 status: STATUS;
	 currency: CURRENCY;
	 payment_method: PAYMENT_METHOD,
	 items: OrderItem[],
	 shipping: ShippingAddress,
	 metadata: Metadata
}

export { Order, ShippingAddress, STATUS, PAYMENT_METHOD, OrderItem }
