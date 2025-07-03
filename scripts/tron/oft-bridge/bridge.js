const { callContractWithParams } = require('../helper');

(async function() {
  const oftBridgeAddress = process.env.OFT_BRIDGE_ADDRESS;
  if (!oftBridgeAddress) {
    throw new Error('No oft bridge address');
  }

  const oftAddress = process.env.OFT_TOKEN;
  if (!oftAddress) {
    throw new Error('No token address');
  }

  // await callContract(  'Token',
  //   oftAddress,
  //   'approve',
  //   oftBridgeAddress,
  //   '1000000000000' + '0'.repeat(18),
  // );

  const result = await callContractWithParams('OftBridge', oftBridgeAddress, 'bridge',
    { callValue: 200_00000 },
    oftAddress,
    '1000000000000000000',
    '0x000000000000000000000000be959eed208225aab424505569d41bf3212142c0',
    2,
    0,
    '100000000000000',
    0,
  );

  console.log(result);
})();
