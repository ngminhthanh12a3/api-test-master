module.exports = (Model, data, query) => {
  console.log("Test: store to db", Model.findOne(query).exec());
  if (Model.findOne(query).exec()) Model.findOneAndUpdate(query, data);
  else {
    var newModel = new Model(data);
    newModel.save((err, Model) => {
      if (err) console.log(err);
    });
  }
};
