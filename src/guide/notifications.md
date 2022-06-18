# Notifications

Tanoshi will notify you if new chapters are available and at least one of the notification channel is setup. If you wish to include direct link to the chapters in tanoshi, you must set `base_url` field in `config.yaml` to url which you access you tanoshi instance.

## Telegram


### Create a Telegram Bot

Telegram notification is delivered via Telegram Bot, so you need to create a bot. You can look how to create a bot [here](https://core.telegram.org/bots#6-botfather).

### Config

After your bot is created, put below config to your `config.yml`.

```yaml
telegram:
  name: <your bot name>
  token: <your bot token>
```

then replace `<your bot name>` to the bot's name and `<your bot token>` with token given by [@BotFather](https://t.me/botfather).

### Chat ID

Open Telegram, go to bot chats then issue `/notifyme` command. The bot will reply with your chat id, copy the number, open `Tanoshi > More > your username > Notification > Telegram chat id`. You can click test to verify the bot is working, then click submit to register the chat id.


## Pushover


### Pushover Account
Register an account on [Pushover](https://pushover.net/). 

### Create an Application
Create application for Tanoshi [here](https://pushover.net/apps/build). You can use Tanoshi icon or use your own icon. Then you will be given API Token/Key

### Config

Put below config to your `config.yml`

```yaml
pushover:
  application_key: <your pushover application key>
```

replace `<your pushover application key>` with API Token/Key from previous step.

### User Key

Pushover can send to multiple user. Login to [pushover.net](https://pushover.net) and you will see your user key. Copy the key to `Tanoshi > More > your username > Notification > Pushover user key`. You can click test to verify the bot is working, then click submit to register the user key.

## Gotify


### Set up server

Gotify sends notifications through a dedicated server. Follow the guide on their [homepage](https://gotify.net/docs/index) to set up a server.

On the server also set up a new application (Apps > Create Application). Copy the token for your application. 

### Config

After your server is running, put below config to your `config.yml`.

```yaml
gotify:
  base_url: <URL to your server>
```

make sure to add the protocol to the server url ( __HTTP__ / __HTTPS__ ).

### Token

In Tanoshi open `Tanoshi > More > your username > Notification > Gotify token`. Paste the token you copied from your server earlier.
You can click test to verify the token is working, then click submit to register your Gotify server.


## Desktop

In addition to notification methods above, desktop version can also notify via desktop notification.