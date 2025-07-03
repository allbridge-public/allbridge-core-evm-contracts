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

  const result = await callContract(
    'OftBridge',
    oftBridgeAddress,
    'registerBridgeDestination',
    2, // chainId_
    40161, // eid_
    20000 // lzGasLimit_
  );

  console.log(result);
})();
