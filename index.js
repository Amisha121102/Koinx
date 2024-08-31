require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cron = require('cron');
const transactionRoutes = require('./routes/transactionRoutes');
const EthereumPrice = require('./models/EthereumPrice');
const { getEthereumPrice } = require('./services/etherscanService');

const app = express();
connectDB();

app.use(express.json());
app.use('/api', transactionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Fetch and store Ethereum price every 10 minutes
const fetchPriceJob = new cron.CronJob('*/10 * * * *', async () => {
    try {
      const price = await getEthereumPrice();
      const ethPrice = new EthereumPrice({ price });
      await ethPrice.save();
      console.log('Ethereum price saved:', price);
    } catch (error) {
      console.error('Error fetching Ethereum price:', error);
    }
  });
  
fetchPriceJob.start();
