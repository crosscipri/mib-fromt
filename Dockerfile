FROM node:18.17.1-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --force
RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points
COPY . .
RUN ls /app
RUN npm run build
FROM nginx:stable
COPY --from=build /app/dist/mibfront/browser /usr/share/nginx/html