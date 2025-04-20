const Produto = require('../models/Produto');
const logger = require('../config/logger');

// Listar todos os produtos
exports.listarProdutos = async (req, res) => {
  try {
    const produtos = await Produto.find();
    logger.info('Produtos listados com sucesso');
    res.json(produtos);
  } catch (error) {
    logger.error('Erro ao listar produtos:', error);
    res.status(500).json({ message: 'Erro ao listar produtos' });
  }
};

// Obter um produto por ID
exports.obterProduto = async (req, res) => {
  try {
    const produto = await Produto.findById(req.params.id);
    if (!produto) {
      logger.warn(`Produto não encontrado: ${req.params.id}`);
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    logger.info(`Produto obtido com sucesso: ${req.params.id}`);
    res.json(produto);
  } catch (error) {
    logger.error('Erro ao obter produto:', error);
    res.status(500).json({ message: 'Erro ao obter produto' });
  }
};

// Criar um novo produto
exports.criarProduto = async (req, res) => {
  try {
    const produto = new Produto(req.body);
    await produto.save();
    logger.info('Produto criado com sucesso');
    res.status(201).json(produto);
  } catch (error) {
    logger.error('Erro ao criar produto:', error);
    res.status(400).json({ message: 'Erro ao criar produto' });
  }
};

// Atualizar um produto
exports.atualizarProduto = async (req, res) => {
  try {
    const produto = await Produto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!produto) {
      logger.warn(`Produto não encontrado para atualização: ${req.params.id}`);
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    logger.info(`Produto atualizado com sucesso: ${req.params.id}`);
    res.json(produto);
  } catch (error) {
    logger.error('Erro ao atualizar produto:', error);
    res.status(400).json({ message: 'Erro ao atualizar produto' });
  }
};

// Deletar um produto
exports.deletarProduto = async (req, res) => {
  try {
    const produto = await Produto.findByIdAndDelete(req.params.id);
    if (!produto) {
      logger.warn(`Produto não encontrado para deleção: ${req.params.id}`);
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    logger.info(`Produto deletado com sucesso: ${req.params.id}`);
    res.json({ message: 'Produto deletado com sucesso' });
  } catch (error) {
    logger.error('Erro ao deletar produto:', error);
    res.status(500).json({ message: 'Erro ao deletar produto' });
  }
}; 