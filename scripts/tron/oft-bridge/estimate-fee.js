const { getContract } = require('../helper');


async function main() {
  const oftBridgeAddress = process.env.OFT_BRIDGE_ADDRESS;
  if (!oftBridgeAddress) {
    throw new Error('No oft bridge address');
  }

  const tokenAddress = process.env.OFT_TOKEN;
  if (!tokenAddress) {
    throw new Error('No token address');
  }
  const result = await getContract('OftBridge', oftBridgeAddress, 'relayerFee', tokenAddress, 2);
  console.log(result.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
