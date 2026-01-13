# Transaction Processor

### This project is a JavaScript utility module that processes and analyzes financial transactions such as airtime, data, electricity, and cable payments. It demonstrates modern JavaScript concepts by handling transaction summaries, grouping, formatting, and asynchronous processing, The code is designed to be clean, readable, and interview-ready, showcasing best practices used in real-world fintech or payment-related applications.

## JavaScript Concepts Used

- Arrow Functions

- Destructuring

- Array Methods (map, filter, reduce)

- Template Literals

- Async/Await

- Optional Chaining

## Functions Explained

### getTotalCompleted(transactions)

Returns the total amount of all completed transactions.

### groupByType(transactions)

Groups transactions into an object based on their type.

### getStats(transactions)

- Returns a summary object containing:
- Total number of transactions
- Count of completed, pending, and failed
- Total transaction amount

### formatTransaction(transaction)

Formats a transaction into a human-readable string for UI display.

### processTransactions(userId)

Formatted display text
Associated `userId`
Uses `async/await` with `setTimeout` to mimic real API behavior.


