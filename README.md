# Koinx 
**Develop a Server Side Application to fetch Crypto Transactions of a user**

**Mandatory Tasks:-**

**Task 1:**

1. Develop an API using Node.js to fetch the crypto transactions of a user.
2. You can use the Etherscan API(https://docs.etherscan.io/api-endpoints/accounts#get-a-list-of-normal-transactions-by-address) to fetch the list of “Normal” transactions for a user. You can use this address for testing:- 0xce94e5621a5f7068253c42558c147480f38b5e0d. You will have to create your own free API Key for testing purposes.
3. The input for the API will be the address of a user. The output would be the list of transactions for this address. You would also have to store these transactions against this address in a database, preferably MongoDB.

**Task 2:**

1. Build a system within the same server to fetch the price of Ethereum every 10 minutes and store it in the database.
2. You can use this API for the same:- https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr

**Task 3:**

1. Develop a `GET` API for a user where they give their address as an input and get their total expenses and current price of ether as output.
2. The expense for each transaction can be calculated as `gasUsed*gasPrice` divided by 1e18.

Please host your code on GitHub.

**Optional Tasks:-**

1. Deploy your database using MongoDB Atlas or other similar tools.
2. Deploy your backend using platforms like Heroku or any cloud platform like AWS, GCP or Azure and expose the API to the public.

**Notes:-**

1. Think of this assignment as a production grade project. Using best practices, writing clean code etc. will fetch you additional points.
2. Do think well about how you want to design your database schemas.
3. We care about the usage of version control and the way you structure(and name) your commits!

Once you’re done with the task, please reply with the GitHub and Deployed Link(if done) to the same email in which you received the assignment.


**How To Test**
1. run command-> npm init -y(This command will create a package.json file with default settings.)
2. Install Required Packages: You'll need several Node.js packages for this project:

express: Web framework for Node.js.
axios: To make HTTP requests to external APIs.
mongoose: To interact with MongoDB.
dotenv: To load environment variables.
cron: To schedule tasks.
Install them using:

npm install express axios mongoose dotenv cron
3. Type command -> node index.js



