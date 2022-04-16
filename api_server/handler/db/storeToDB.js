module.exports = async (Model, data, query) => {
  const dataCheck = await Model.findOne(query);
  // .lean()
  // .exec((err, dataFind) => dataFind);
  console.log("Test db:", query);
  // if (await dataCheck) Model.findOneAndUpdate(query, data);
  // else {
  //   var newModel = new Model(data);
  //   newModel.save((err, Model) => {
  //     if (err) console.log(err);
  //   });
  // }
};
