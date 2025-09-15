aasync function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  const balance = await deployer.getBalance();
  console.log("Account balance:", ethers.utils.formatEther(balance));

  // Deploy 4 ERC20 tokens
  const Sane = await ethers.getContractFactory("Sane");
  const sane = await Sane.deploy();
  await sane.deployed();

  const Lia = await ethers.getContractFactory("Lia");
  const lia = await Lia.deploy();
  await lia.deployed();

  const Ongie = await ethers.getContractFactory("Ongie");
  const ongie = await Ongie.deploy();
  await ongie.deployed();

  const Aku = await ethers.getContractFactory("Aku");
  const aku = await Aku.deploy();
  await aku.deployed();

  console.log("Sane Token:", sane.address);
  console.log("Lia Token:", lia.address);
  console.log("Ongie Token:", ongie.address);
  console.log("Aku Token:", aku.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
async function main() {
  await deployTokens();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
