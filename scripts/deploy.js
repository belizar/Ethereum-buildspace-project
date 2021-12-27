const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log('Deploying contracts with account: ', deployer.address);
    console.log('Account balance: ', accountBalance.toString());

    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    const contract = await waveContractFactory.deploy();
    await contract.deployed();
    console.log("Contract deployed to:", contract.address);
}

(async () => {
    try {
        await main();
        process.exit(0);
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
})()