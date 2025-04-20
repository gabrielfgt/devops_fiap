#!/bin/sh

# Copia o arquivo de ambiente correto com base no NODE_ENV
if [ "$NODE_ENV" = "production" ]; then
    cp .env.production .env
elif [ "$NODE_ENV" = "staging" ]; then
    cp .env.staging .env
else
    cp .env.development .env
fi

# Executa o comando passado como argumento
exec "$@" 