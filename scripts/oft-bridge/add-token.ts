import { ethers } from 'hardhat';
import { handleTransactionResult } from '../helper';

async function main() {
  const oftBridgeAddress = process.env.OFT_BRIDGE_ADDRESS;
  if (!oftBridgeAddress) {
    throw new Error('No oft bridge address');
  }

  const tokenAddress = process.env.OFT_TOKEN;
  if (!tokenAddress) {
    throw new Error('No token address');
  }

  const destinationChainId = 2;

  const contract = await ethers.getContractAt('OftBridge', oftBridgeAddress);
  const result = await contract.addToken(tokenAddress, destinationChainId);
  await handleTransactionResult(result);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
