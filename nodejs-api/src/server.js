const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');

const server = app.listen(config.port, () => {
  logger.info(`Servidor rodando na porta ${config.port} em ambiente ${process.env.NODE_ENV || 'development'}`);
});

// Tratamento de encerramento gracioso
process.on('SIGTERM', () => {
  logger.info('SIGTERM recebido. Encerrando servidor...');
  server.close(() => {
    logger.info('Servidor encerrado');
    process.exit(0);
  });
}); 