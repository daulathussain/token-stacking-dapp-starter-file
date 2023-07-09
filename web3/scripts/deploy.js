const hre = require("hardhat");

async function main() {
  const tokenStaking = await hre.ethers.deployContract("TokenStaking");

  await tokenStaking.waitForDeployment();

  console.log(` STACKING: ${tokenStaking.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
