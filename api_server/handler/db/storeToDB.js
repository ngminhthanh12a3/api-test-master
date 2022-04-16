module.exports = async (Model, data, query) => {
  const dataCheck = await Model.findOne(query);

  if (dataCheck) Model.findOneAndUpdate(query, data);
  else {
    var newModel = new Model(data);

    newModel.save((err, Model) => {
      if (err) console.log(err);
    });
  }
};
