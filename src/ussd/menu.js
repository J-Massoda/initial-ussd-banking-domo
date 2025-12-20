const sessionStore = require('./session');
const auth = require('../services/auth.service');
const transfer = require('../services/transfer.service');

exports.process = async ({ sessionId, msisdn, input }) => {
  let session = await sessionStore.getSession(sessionId) || { step: 'PIN' };

  if (session.step === 'PIN') {
    const valid = await auth.verify(msisdn, input);
    if (!valid) return { message: 'PIN incorreto', type: 'END' };

    session.step = 'MENU';
    await sessionStore.saveSession(sessionId, session);
    return { message: '1. Saldo\n2. Transferir\n3. Sair', type: 'CON' };
  }

  if (session.step === 'MENU') {
    if (input === '2') {
      session.step = 'TRANSFER';
      await sessionStore.saveSession(sessionId, session);
      return { message: 'Número do destinatário:', type: 'CON' };
    }
  }

  return { message: 'Sessão encerrada', type: 'END' };
};