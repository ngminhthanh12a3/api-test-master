module.exports = async (Model) => {
  const data = await Model.find();
  console.log(data);
};
