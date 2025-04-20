# Node.js API - Gerenciamento de Produtos

API RESTful desenvolvida em Node.js para gerenciamento de produtos, com suporte a múltiplos ambientes (desenvolvimento, staging e produção).

## 🚀 Tecnologias

- Node.js
- Express.js
- MongoDB
- Docker & Docker Compose
- GitHub Actions (CI/CD)

## 📋 Pré-requisitos

- Node.js 18.x ou superior
- Docker e Docker Compose
- MongoDB (opcional, já que usamos containers)
- Git

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/nodejs-api.git
cd nodejs-api
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
# Copie os arquivos de ambiente
cp .env.example .env.development
cp .env.example .env.staging
cp .env.example .env.production

# Edite cada arquivo com suas configurações
```

## 🏃‍♂️ Executando o Projeto

### Desenvolvimento Local

1. Inicie os containers:
```bash
docker-compose up -d
```

2. A API estará disponível em:
- API: http://localhost:3000
- MongoDB: mongodb://localhost:27017

### Ambiente de Staging

1. Inicie os containers:
```bash
docker-compose -f docker-compose.staging.yml up -d
```

2. A API estará disponível em:
- API: http://localhost:3001
- MongoDB: mongodb://localhost:27018

### Ambiente de Produção

1. Inicie os containers:
```bash
docker-compose -f docker-compose.production.yml up -d
```

2. A API estará disponível em:
- API: http://localhost:3002
- MongoDB: mongodb://localhost:27019

## 📚 Endpoints da API

### Produtos

- `GET /api/products` - Lista todos os produtos
- `GET /api/products/:id` - Obtém um produto específico
- `POST /api/products` - Cria um novo produto
- `PUT /api/products/:id` - Atualiza um produto
- `DELETE /api/products/:id` - Remove um produto

### Exemplo de Requisição

```bash
# Criar um produto
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Produto Teste",
    "description": "Descrição do produto",
    "price": 99.99,
    "quantity": 10
  }'
```

## 🔄 CI/CD Pipeline

O projeto utiliza GitHub Actions para automação de CI/CD:

1. **Testes**: Executados em pull requests
2. **Build**: Criação da imagem Docker
3. **Deploy**:
   - Staging: Automático ao fazer merge na branch `staging`
   - Produção: Automático ao fazer merge na branch `main`

## 🛠️ Estrutura do Projeto

```
nodejs-api/
├── src/
│   ├── config/         # Configurações
│   ├── controllers/    # Controladores
│   ├── models/         # Modelos
│   ├── routes/         # Rotas
│   ├── app.js          # Aplicação Express
│   └── server.js       # Servidor
├── tests/              # Testes
├── .env.*             # Arquivos de ambiente
├── docker-compose.*.yml # Configurações Docker
└── Dockerfile         # Configuração da imagem
```

## 🔐 Variáveis de Ambiente

### Desenvolvimento (.env.development)
```env
NODE_ENV=development
DEV_PORT=3000
DEV_MONGO_URI=mongodb://mongodb:27017/nodejs-api-dev
LOG_LEVEL=debug
```

### Staging (.env.staging)
```env
NODE_ENV=staging
STAGING_PORT=3001
STAGING_MONGO_URI=mongodb://mongodb:27017/nodejs-api-staging
LOG_LEVEL=info
```

### Produção (.env.production)
```env
NODE_ENV=production
PROD_PORT=3002
PROD_MONGO_URI=mongodb://mongodb:27017/nodejs-api-prod
LOG_LEVEL=error
```

## 📦 Scripts Disponíveis

- `npm start` - Inicia a aplicação
- `npm run dev` - Inicia em modo desenvolvimento
- `npm test` - Executa os testes
- `npm run lint` - Executa o linter
- `npm run build` - Build da aplicação

## 🔍 Monitoramento e Logs

- Logs são armazenados em `./logs/`
- Winston é utilizado para logging
- Níveis de log diferentes por ambiente


## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

- Bruna Cardoso
- Carlos Rosa
- Gabriel Teixeira
- Gabriel Zamboni
- Mateus Thibes

## 🙏 Agradecimentos

- FIAP
- Professores e colegas
- Comunidade open source 