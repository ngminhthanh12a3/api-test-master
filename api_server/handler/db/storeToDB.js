module.exports = async (Model, data, query) => {
  const dataCheck = await Model.findOne(query)
    .lean()
    .exec((err, dataFind) => dataFind);
  if (dataCheck) Model.findOneAndUpdate(query, data);
  else {
    var newModel = new Model(data);
    newModel.save((err, Model) => {
      if (err) console.log(err);
      else console.log("DB success", newModel.save);
    });
  }
};
