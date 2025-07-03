const { callContract } = require('../helper');

(async function() {
  const oftBridgeAddress = process.env.OFT_BRIDGE_ADDRESS;
  if (!oftBridgeAddress) {
    throw new Error('No oft bridge address');
  }

  const tokenAddress = process.env.TOKEN_ADDRESS;
  if (!tokenAddress) {
    throw new Error('No token address');
  }

  const feeBP = process.env.OFT_FEE_BP;
  if (!feeBP) {
    throw new Error('No OFT_FEE_BP');
  }
  console.log('New Fee BP:', feeBP);

  const result = await callContract(
    'OftBridge',
    oftBridgeAddress,
    'setAdminFeeShare',
    tokenAddress,
    feeBP,
  );

  console.log(result);
})();

