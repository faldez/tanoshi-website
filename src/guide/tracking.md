# Tracking

Tanoshi can automatically update read manga chapters to supported trackers, namely [MyAnimeList](https://myanimelist.net/) and [AniList](https://anilist.co/).

To be able to use tracking, you need to setup application on your tracker account and get `client_id` and `client_secret`, then put those value on your `config.yaml`

```yaml
myanimelist:
  client_id: <myanimelist client id>
  client_secret: <myanimelist client secret>
anilist:
  client_id: <anilist client id>
  client_secret: <anilist client secret>
```

This is because oauth require redirect url which is different for anyone hosting Tanoshi. Tracker not supported on desktop app for time being.