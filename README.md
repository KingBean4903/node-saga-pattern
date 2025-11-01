# Order Saga Orchestrator — Distributed Workflow with Compensating Actions

> A Node.js project demonstrating the **Saga Orchestrator pattern** with **compensating actions**, **domain events**, and **state transitions** — all inspired by real-world e-commerce order processing.

---

## Overview

This project simulates a distributed workflow that coordinates multiple services — **Order**, **Payment**, **Inventory**, **Shipping**, and **Notification** — through an **event-driven orchestration layer**.

Instead of relying on a single database transaction, it uses **compensating actions** to logically undo operations when failures occur, ensuring **eventual consistency** in a microservices environment.

---

## Core Concepts

### Saga Orchestrator
A **Saga** is a long-running business transaction split into smaller, independent steps.  
Each step emits domain events to drive the workflow forward.


### Event-Driven Flow
The orchestrator uses events (conceptually via Node.js **EventEmitter**) to coordinate transitions between services.

---
## 🔄 Workflow Overview

### ✅ **Happy Path**
1. `OrderCreated` → Payment requested  
2. `PaymentSucceeded` → Stock reserved  
3. `StockReserved` → Shipment prepared  
4. `ShipmentPrepared` → Order completed  
5. `OrderCompleted` → User notified  

---

## 🚀 Future Enhancements

- Integrate **Kafka** or **Redis Streams** for real event flow  
- Add **retry logic** and **dead-letter queues**  
- Track saga states via **persistent orchestration logs**  
- Add **Compensating Actions* 
---



