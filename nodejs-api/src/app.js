const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('./config/config');
const logger = require('./config/logger');
const produtoRoutes = require('./routes/produtoRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware
app.use(helmet());
app.use(cors({
  origin: config.corsOrigin,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(morgan('combined'));
app.use(express.json());

// Rotas
app.use('/api/produtos', produtoRoutes);
app.use('/api/products', productRoutes);

// Conexão com o banco de dados
mongoose.connect(config.mongoUri)
  .then(() => {
    logger.info('Conectado ao MongoDB com sucesso');
  })
  .catch((error) => {
    logger.error('Erro ao conectar ao MongoDB:', error);
    process.exit(1);
  });

// Tratamento de erros
app.use((err, req, res, next) => {
  logger.error('Erro não tratado:', err);
  res.status(500).json({ message: 'Erro interno do servidor' });
});

module.exports = app; 