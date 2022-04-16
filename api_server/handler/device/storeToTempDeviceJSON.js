const { chacha20DecryptValue } = require("../../constants");
module.exports = (decryptJSON) => {
  const { devID, ...propsJSON } = decryptJSON;
  chacha20DecryptValue[devID] = propsJSON;
};
