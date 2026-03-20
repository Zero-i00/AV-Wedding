#!/usr/bin/env bash
set -euo pipefail

PREFIX="${1:?Usage: $0 <PREFIX> <path-to-.env.example>}"
ENV_EXAMPLE="${2:?Usage: $0 <PREFIX> <path-to-.env.example>}"
ENV_OUT="${ENV_EXAMPLE%.example}"

if [[ ! -f "$ENV_EXAMPLE" ]]; then
  echo "Error: $ENV_EXAMPLE not found" >&2
  exit 1
fi

> "$ENV_OUT"

while IFS= read -r line; do
  # Pass through comments and blank lines unchanged
  if [[ "$line" =~ ^[[:space:]]*# ]] || [[ -z "${line// /}" ]]; then
    echo "$line" >> "$ENV_OUT"
    continue
  fi

  # Extract key and value (strip inline comments from value)
  if [[ "$line" =~ ^([^=]+)=(.*)$ ]]; then
    key="${BASH_REMATCH[1]}"
    value="${BASH_REMATCH[2]}"
    # Strip inline comment (everything after first unquoted #)
    value="${value%%#*}"
    # Trim trailing whitespace
    value="${value%"${value##*[![:space:]]}"}"

    if [[ -z "$value" ]]; then
      env_var="${PREFIX}_${key}"
      resolved="${!env_var:-}"
      echo "${key}=${resolved}" >> "$ENV_OUT"
    else
      echo "${key}=${value}" >> "$ENV_OUT"
    fi
  else
    echo "$line" >> "$ENV_OUT"
  fi
done < "$ENV_EXAMPLE"

echo "Generated: $ENV_OUT"
