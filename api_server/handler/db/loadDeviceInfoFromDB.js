module.exports = async (Model) => {
  const formatData = {};
  const dataArray = await Model.find();

  await dataArray.forEach((data) => {
    const { devID, _id, __v, ...props } = data;
    formatData[devID] = props;
  });
  console.log(formatData);
  // return formatData;
};
