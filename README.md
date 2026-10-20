# Imgur API automation

Jest and Supertest exercises for Imgur account endpoints. These are live API
tests: they need your own Imgur application credentials and can change account
state. Review a case before running it against an account you care about.

## Setup

```bash
npm ci
cp .env.example .env
npm test
```

Fill `.env` with your Imgur client ID, client secret, refresh token, and
username. The credential file and generated `token/` directory are ignored by
Git. Never commit an access token or a filled `.env` file.

Tests live under `Account/test/`; request helpers and token handling live under
`Commons/`. The suite requires a reachable Imgur API, so it is not an offline
unit-test gate.
