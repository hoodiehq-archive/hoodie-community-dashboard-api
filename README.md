# hoodie-community-dashboard-api

> API server for Hoodie Community activity data

[hapi](http://hapijs.com/) server exposing APIs that are consumed by the
[hoodie-community-dashboard](https://github.com/hoodiehq/hoodie-community-dashboard/) app which displays activity charts on Hoodie’s community.

## Routes

### `GET /contributors/by-month`

Responds with with an array of 12 numbers which represent the number of
contributors for the past 12 months

```
[23, 40, ..]
```

## Setup

```
git clone git@github.com:hoodiehq/hoodie-dashboard-api.git
cd hoodie-dashboard-api
npm install
npm start
```

## License

Apache 2.0
