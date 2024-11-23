const main = async () => {
  try {
      console.log("Getting contract factory...");
      const Transactions = await hre.ethers.getContractFactory("Transactions");

      console.log("Deploying contract...");
      const transactionsContract = await Transactions.deploy();

      console.log("Waiting for deployment...");
      // await transactions.deployed();

      console.log("Transactions address: ", transactionsContract.target);
  } catch (error) {
      console.error("Error during deployment: ", error);
  }
};

  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  
  runMain();