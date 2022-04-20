const fetchToDeviceInfo = (setState, fetchURL, Inits) => {
  const state = fetch(fetchURL, Inits);
  setState(state);
};
export default fetchToDeviceInfo;
