const axios = require('axios');

const getTransactions = async (address) => {
    const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${process.env.ETHERSCAN_API_KEY}`;
    const response = await axios.get(url);
    return response.data.result;
};

const getEthereumPrice = async () => {
    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr';
    const response = await axios.get(url);
    return response.data.ethereum.inr;
  };
  
module.exports = { getTransactions, getEthereumPrice };
  

