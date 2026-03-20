#!/bin/bash
# Скрипт первичного получения SSL-сертификата через Let's Encrypt.
# Запускается ОДИН РАЗ на сервере перед первым деплоем.
#
# Предварительно:
#   1. DNS A-запись av-wedding.soft-stack.ru → IP сервера должна быть активна
#   2. Порты 80 и 443 должны быть открыты на сервере
#   3. Заменить YOUR_EMAIL ниже на реальный email

set -e

DOMAIN="av-wedding.soft-stack.ru"
EMAIL="YOUR_EMAIL"
COMPOSE_FILE="docker-compose-prod.yml"

if [ "$EMAIL" = "YOUR_EMAIL" ]; then
    echo "ERROR: Укажи свой email в переменной EMAIL в этом скрипте."
    exit 1
fi

echo "==> Запускаем nginx с временным HTTP-конфигом..."
docker compose -f "$COMPOSE_FILE" run --rm \
    -v "$(pwd)/nginx/nginx-init.conf:/etc/nginx/nginx.conf:ro" \
    -v certbot_www:/var/www/certbot \
    -p 80:80 \
    nginx nginx &

NGINX_PID=$!
sleep 3

echo "==> Получаем SSL-сертификат для $DOMAIN..."
docker compose -f "$COMPOSE_FILE" run --rm certbot certonly \
    --webroot \
    --webroot-path=/var/www/certbot \
    -d "$DOMAIN" \
    --email "$EMAIL" \
    --agree-tos \
    --no-eff-email

kill $NGINX_PID 2>/dev/null || true
wait $NGINX_PID 2>/dev/null || true

echo "==> Сертификат получен! Запускаем все сервисы с HTTPS..."
docker compose -f "$COMPOSE_FILE" up -d --build

echo "==> Готово. Сайт доступен по https://$DOMAIN"
