const express = require('express');
const Transaction = require('../models/transaction');
const { getTransactions } = require('../services/etherscanService');

const router = express.Router();

// Route to fetch transactions by address
router.get('/transactions/:address', async (req, res) => {
  const { address } = req.params;

  try {
    // Fetch transactions from Etherscan
    const transactions = await getTransactions(address);

    // Save transactions to the database
    const savedTransactions = await Transaction.insertMany(
      transactions.map((tx) => ({
        ...tx,
        userAddress: address,
      }))
    );

    res.json(savedTransactions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
});


// Route to calculate total expenses and fetch current Ethereum price
router.get('/expenses/:address', async (req, res) => {
    const { address } = req.params;
  
    try {
      // Fetch transactions from the database
      const transactions = await Transaction.find({ userAddress: address });
  
      // Calculate total expenses
      const totalExpenses = transactions.reduce((total, tx) => {
        return total + (tx.gasUsed * tx.gasPrice) / 1e18;
      }, 0);
  
      // Fetch the latest Ethereum price
      const latestPrice = await EthereumPrice.findOne().sort({ timestamp: -1 });
  
      res.json({
        totalExpenses,
        currentPrice: latestPrice.price,
      });
    } catch (error) {
        console.error('Error calculating expenses:', error.message);
        res.status(500).json({ error: 'Failed to calculate expenses' });
    }
  });
  
module.exports = router;
