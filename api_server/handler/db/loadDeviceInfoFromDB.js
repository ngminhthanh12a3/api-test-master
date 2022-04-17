module.exports = async (Model) => {
  console.log("Load full data");
  const formatData = {};
  const dataArray = await Model.find().lean().exec();

  await dataArray.forEach((data) => {
    const { devID, _id, __v, ...props } = data;
    formatData[devID] = props;
  });
  return formatData;
};
