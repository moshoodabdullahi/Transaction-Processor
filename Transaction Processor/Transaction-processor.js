const transactions = [
  { id: 1, type: 'airtime', amount: 500, status: 'completed', date: '2025-01-01' },
  { id: 2, type: 'data', amount: 1000, status: 'pending', date: '2025-01-02' },
  { id: 3, type: 'electricity', amount: 5000, status: 'completed', date: '2025-01-02' },
  { id: 4, type: 'airtime', amount: 200, status: 'failed', date: '2025-01-03' },
  { id: 5, type: 'cable', amount: 3500, status: 'completed', date: '2025-01-03' },
];

// 1. Get total amount of completed transactions
const getTotalCompleted = (transactions) =>
  transactions
    .filter(({ status }) => status === 'completed')
    .reduce((sum, { amount }) => sum + amount);

// 2. Group transactions by type
const groupByType = (transactions) =>
  transactions.reduce((groups, tx) => {
    const { type } = tx;
    groups[type] = [...(groups[type] || []), tx];
    return groups;
  }, {});

// 3. Get summary statistics
const getStats = (transactions) => {
  const total = transactions.length;

  const { completed, pending, failed, totalAmount } = transactions.reduce(
    (stats, { status, amount }) => {
      stats[status]++;
      stats.totalAmount += amount;
      return stats;
    },
    { completed: 0, pending: 0, failed: 0, totalAmount: 0 }
  );

  return { total, completed, pending, failed, totalAmount };
};

// 4. Format transaction for display
const formatTransaction = (tx) => {
  const { type, amount, status } = tx;

  // We use [0] instead of charAt(0)
  const formattedType = type[0].toUpperCase() + type.slice(1);
  const formattedStatus = status[0].toUpperCase() + status.slice(1);

  return `${formattedType} - ₦${amount} (${formattedStatus})`;
};

// 5. Async function to simulate fetching and processing
const processTransactions = async (userId) => {
  try {
    const data = await new Promise((resolve) =>
      setTimeout(() => resolve(transactions), 1000)
    );

    return data.map(tx => ({
      ...tx,
      formatted: formatTransaction(tx)
    }));
  } catch (error) {
    console.error("Failed to process transactions:", error);
  }
};


console.log('Total Completed Amount:', getTotalCompleted(transactions));
console.log('Grouped by Type:', groupByType(transactions));
console.log('Transaction Stats:', getStats(transactions));
console.log('Formatted Transaction:', formatTransaction(transactions[0]));
console.log(`processed Transactions:`, await processTransactions(123));
