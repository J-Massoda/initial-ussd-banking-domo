const sessions = {};

exports.getSession = async (id) => sessions[id];
exports.saveSession = async (id, data) => sessions[id] = data;