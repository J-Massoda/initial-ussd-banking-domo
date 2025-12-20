const menu = require('./menu');

exports.handleRequest = async (req, res) => {
  const { sessionId, msisdn, input } = req.body;

  const response = await menu.process({
    sessionId,
    msisdn,
    input
  });

  res.json(response);
};