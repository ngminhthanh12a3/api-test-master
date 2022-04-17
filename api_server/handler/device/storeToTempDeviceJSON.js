module.exports = (decryptJSON) => {
  const { chacha20DecryptValue } = require("../../constants");
  const { devID, ...propsJSON } = decryptJSON;
  console.log(chacha20DecryptValue);
  chacha20DecryptValue[devID] = { ...propsJSON };
};
