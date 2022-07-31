# Tracking

Tanoshi can automatically update read manga chapters to supported trackers, namely [MyAnimeList](https://myanimelist.net/) and [AniList](https://anilist.co/).

To be able to use tracking, you need to setup application on your tracker account, set `{base_url}/tracker/{myanimelist|anilist}/redirect` as redirect url and get `client_id` and `client_secret`, then put `client_id` and `client_secret` on your `config.yaml`.

You also need to have configured the `base_url` in the `config.yaml`. This is because oauth require redirect url which is different for anyone hosting Tanoshi.

```yaml
base_url: http://your-base.url
myanimelist:
  client_id: <myanimelist client id>
  client_secret: <myanimelist client secret>
anilist:
  client_id: <anilist client id>
  client_secret: <anilist client secret>
```

::: tip Note
Tracker not supported on desktop app for time being.
:::
