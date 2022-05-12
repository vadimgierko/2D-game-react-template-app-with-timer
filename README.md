# 2D Game bonded to a timer React Template App

This template let you start developing a game with pre-built common layout and game components & game loop bonded to the customizable timer.

This template app was developed as a "side effect" of my snake game clone project. You can play the game [here](https://vadimgierko.github.io/snake-game-react/) & see how this template works in practice!

CodeSandbox demo: https://codesandbox.io/s/2d-game-starter-template-with-built-in-timer-t96xxt

Source code on GitHub: https://github.com/vadimgierko/2D-game-react-template-app-with-timer

## What's included in this template game app

- simple pre-built customizable layout & game components:
  - [X] Header
  - [X] Board
  - [X] Speed controllers (increase or decrease timer interval)
  - [X] Touch screen controllers
  - [X] Footer
  - [X] Clock (shows session time)
- logic mechanism & pattern:
  - [X] timer
  - [X] makeMove() function bonded to a timer, which renders state according to the set interval
  - [X] functions to create board and initState with given rows and columns number
- basic style:
  - [X] RWD
  - [X] dark mode

## Motivation

I've built this template app to reduce my time needed to build other 2D games bonded to the timer in React in the future. When I was developing and refactoring my snake game clone, I've decided to build tetris game clone next, so that was the additional motivation to create this template for quick start.

## NOTE / Tutorial

I hope I'll find the time to write a tutorial, how to use this template app to build an example game, but...
... at the moment this template is well commented & generates snake game, so you can figure out, how it works.

The most important built-in functions are:
- generateEmptyBoard()
- generateInitBoard() // it completes the empty board with some items
- generateInitState() // it defines game state:
  - boardSize,
  - board,
  - someItem/s,
  - score,
  - start,
  - pause,
  - end

The main component <App/> contains all pre-built functions & UI you need for fast game development:
- timer,
- makeMove function bonded to a timer,
- end game alert.

Follow comments in <App /> & don't change too much ;-)

"Logic" folder, reducer & "components" folder is the place, where you can implement unique logic for your game.

## Stack
- React
- React Icons
- CSS