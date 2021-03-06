# Docker
Docker image available for `amd64` and `arm64`. If you want to selfhost on a raspberry pi, you need 64 bit OS, such as ubuntu or Raspbian OS 64 bit. Tanoshi can't run on `arm` because [wasmer](https://github.com/wasmerio/wasmer) can't run on those platform yet, when `wasmer` could run on `arm` I will build image for `arm`.

If you want to use unreleased features, you can use tag `master`. It has everything from `master` branch.

```
docker create \
    --name=tanoshi \
    -p 8080:80 \
    --mount type=bind,source=/path/to/data,target=/tanoshi \
    --mount type=bind,source=/path/to/manga,target=/tanoshi/manga \
    --restart unless-stopped \
    faldez/tanoshi
```

```
docker start tanoshi
```

## Docker-compose

Refer to docker-compose.yaml.