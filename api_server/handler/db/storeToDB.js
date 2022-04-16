module.exports = (Model, data, query) => {
  console.log("Test: store to db", query, data);
  if (Model.findOne(query)) Model.findOneAndUpdate(query, data);
  else {
    var newModel = new Model(data);
    newModel.save((err, Model) => {
      if (err) console.log(err);
    });
  }
};
