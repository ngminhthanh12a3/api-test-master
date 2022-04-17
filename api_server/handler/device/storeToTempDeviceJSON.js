const { chacha20DecryptValue } = require("../../constants");
module.exports = (decryptJSON) => {
  console.log(decryptJSON);
  const { devID, ...propsJSON } = decryptJSON;
  console.log(chacha20DecryptValue);
  chacha20DecryptValue[devID] = { ...propsJSON };
};
