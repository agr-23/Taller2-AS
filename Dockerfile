# Dockerfile — CABA PRO Árbitros (Node/Express)
FROM node:20-alpine

# Evita prompts y reduce tamaño
ENV NODE_ENV=production
ENV PORT=3000

WORKDIR /app

# Instala deps de runtime primero (mejor caché)
COPY package*.json ./
RUN npm ci --omit=dev

# Copia código
COPY src ./src

# Puerto expuesto (interno del contenedor)
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3000/docs >/dev/null || exit 1

CMD ["npm", "start"]