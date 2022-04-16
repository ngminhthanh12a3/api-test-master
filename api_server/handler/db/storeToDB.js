module.exports = (Model, data, query) => {
  console.log("Test: store to db");
  if (Model.findOne(query).then((err, data) => data.json()))
    Model.findOneAndUpdate(query, data);
  else {
    var newModel = new Model(data);
    newModel.save((err, Model) => {
      if (err) console.log(err);
    });
  }
};
