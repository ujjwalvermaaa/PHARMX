exports.performAction = (req, res) => {
    const { action } = req.body;
    res.status(200).json({ message: `Admin action: ${action}` });
  };