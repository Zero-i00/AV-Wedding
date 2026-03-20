FROM python:3.12-slim

WORKDIR /app

COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

COPY pyproject.toml uv.lock ./

ENV UV_LINK_MODE=copy
ENV PYTHONPATH=/app
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Устанавливаем только prod-зависимости
RUN uv sync --frozen --no-dev

COPY . .

RUN chmod +x ./docker/prod/entrypoint.sh

ENTRYPOINT ["./docker/prod/entrypoint.sh"]
