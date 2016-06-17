module.exports = () => {
  function query(req, res) {
    console.log(req.timeRequest)
    res.status(200).send([{name: 'Ascia', description: 'blablabla'}]);
  }


  function save(req, res) {
    var item = req.body;
    console.log(item);
    res.status(201).send({result: 'Item '+ item.name + ' created'});
  }

  return {
    query: query,
    save: save,
  };
}