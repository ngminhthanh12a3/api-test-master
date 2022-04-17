module.exports = (decryptJSON) => {
  const { chacha20DecryptValue } = require("../../constants");
  console.log(decryptJSON);
  const { devID, ...propsJSON } = decryptJSON;
  console.log(chacha20DecryptValue);
  chacha20DecryptValue[devID] = { ...propsJSON };
};
