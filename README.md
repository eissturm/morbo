# Morbo - v0.0.1

Morbo is a gracious host.  He will crush you and your tiny friends with how great of a host he is.

Built after following this tutorial, and much of the code *may* be directly ripped as I'm learning how this all works better.  https://thinkster.io/mean-stack-tutorial

## Objective

Create a functional replica of Cards against Humanity with the MEAN stack, leveraging a RESTful API to allow for mobile device access in future versions.

## Components

Morbo is broken down into a few components.

1. A server which will run on the Host machine and exposes a REST API to other devices
2. This REST API models a game of Cars Against Humanity.  


## Game model

```
Game: {
  rounds: [
    {blank: 'Why did the _____ cross the road?', winning-fill: 'butt', winning-player: *player-id*, hands: [{player: 1, fills: ['butt', 'poop', 'fart', 'ballon', 'turtle'], played-fill: 'butt'}, {player: 2, fills: ['dingle','whiskey','boobies','fucked', 'spaghetti'], played-fill: 'boobies'}]},
      {blank: 'Revenge is a dish best served ______', winning-fill: 'fucked', winning-player: 2, hands: [{player: 1, fills: ['poop', 'fart', 'ballon', 'turtle', 'obama'], played-fill: 'butt'}, {player: 2, fills: ['dingle','whiskey','fucked', 'spaghetti', 'pussy'], played-fill: 'fucked'}]}
  ],
  players: [{player-id: 1, score: 1, player-url: *player-url*},{player-id: 2, score: 1; player-url: '/player/2'}],
  startDatetime,
  endDatetime,
  winner: *player-id*
}
```
