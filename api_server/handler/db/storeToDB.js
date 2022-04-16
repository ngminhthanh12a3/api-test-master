module.exports = (Model, data, query) => {
  console.log("Test: store to db", Model.findOne(query));
  if (Model.findOne(query).then((data) => data))
    Model.findOneAndUpdate(query, data);
  else {
    var newModel = new Model(data);
    newModel.save((err, Model) => {
      if (err) console.log(err);
    });
  }
};
