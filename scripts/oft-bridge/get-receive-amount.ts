import { ethers } from 'hardhat';

async function main() {
  const oftBridgeAddress = process.env.OFT_BRIDGE_ADDRESS;
  if (!oftBridgeAddress) {
    throw new Error('No oft bridge address');
  }

  const tokenAddress = process.env.OFT_TOKEN;
  if (!tokenAddress) {
    throw new Error('No token address');
  }

  const contract = await ethers.getContractAt('OftBridge', oftBridgeAddress);
  const result = await contract.receiveAmount(
    tokenAddress,
    6,
    10000);
  console.log(result.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

