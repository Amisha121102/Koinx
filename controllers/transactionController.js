const Transaction = require('../models/transaction');
const { getTransactionsByAddress } = require('../services/etherscanService');

const fetchAndSaveTransactions = async (req, res) => {
    const { address } = req.params;
    try {
        const transactions = await getTransactionsByAddress(address);
        await Transaction.deleteMany({ address });
        await Transaction.insertMany(transactions.map(tx => ({ ...tx, address })));
        res.status(200).json({ success: true, transactions });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching transactions' });
    }
};

module.exports = { fetchAndSaveTransactions };
