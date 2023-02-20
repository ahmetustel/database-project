

const getCustomers = async (req, res) => {
    try {

      const searhedUser = await User.findOne({ name: req.params.name });
      console.log(searhedUser);
      res.status(200).json(searhedUser);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };

module.exports = {
    getCustomers
  };