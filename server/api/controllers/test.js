module.exports = {

  get: (req, res) => {
      
      var text = {"result": "true"};
      
      return res.json(text);
     
  }
}
