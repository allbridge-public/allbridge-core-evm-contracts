const { callContract } = require('../helper');

(async function() {
  const oftBridgeAddress = process.env.OFT_BRIDGE_ADDRESS;
  if (!oftBridgeAddress) {
    throw new Error('No oft bridge address');
  }

  const tokenAddress = process.env.OFT_TOKEN;
  if (!tokenAddress) {
    throw new Error('No token address');
  }

  const destinationChainId = 2;

  const result = await callContract(
    'OftBridge',
    oftBridgeAddress,
    'addToken',
    tokenAddress,
    destinationChainId,
  );
  console.log(result);
})();
