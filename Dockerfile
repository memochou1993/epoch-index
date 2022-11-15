# build stage
FROM node:16 as builder

WORKDIR /app

COPY . .

RUN npm ci --only=production
RUN npm run build

# final sage
FROM nginx:stable-alpine

COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
