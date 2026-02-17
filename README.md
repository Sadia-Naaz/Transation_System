# Transation_System
Prompt - Act as a backend developer and provide most optimized and perfect solution for this backend system,that is complete scalable and handles errors and edge cases gracefully.You have to provide the solution that stands out in the crowd and perfection depends on how optimized and scalable design you are providing in Node.js, mongodb and express.

🧠 System Overview (Big Picture)

This system is a wallet-based transaction platform with three core concepts:

Client – owns a wallet and places orders

Admin – can credit or debit client wallets

Order – deducts money from wallet and triggers fulfillment

The system guarantees:

No double spending

Atomic balance updates

Consistent order creation

Safe handling of external API failures 

The exexution flow-
Request
  ↓
Routes
  ↓
Middleware (client-id validation)
  ↓
Controllers (HTTP handling)
  ↓
Services (business logic)
  ↓
Models (MongoDB)
  ↓
Response

