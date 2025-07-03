const {
  callContract,
  tronAddressToBuffer32,
  ethAddressToBytes32,
  solanaAddressToBytes32,
} = require('../helper');

(async function () {
  const bridgeAddress = process.env.BRIDGE_ADDRESS;
  if (!bridgeAddress) {
    throw new Error('No bridge address');
  }

  const result = await callContract(
    'Bridge',
    bridgeAddress,
    'registerBridge',
    2,
    ethAddressToBytes32('0xAA8d065E35929942f10fa8Cb58A9AF24eE03655D'),
    // solanaAddressToBytes32('ERrse1kNoZPcY2BjRXQ5rHTCPDPwL1m2NQ2sGSj6cW7C'), // authority address
  );
  console.log(result);
})();
