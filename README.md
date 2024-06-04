# vanilla-javascript-game-structure
object oriented structure for games development with vanilla javascript


0 - Main Structure
    Deals with configuring the index.html, style.css and main.js, where the game will be rendered and where functions will run centralized in one file.

1 - Player
    Creates the Player class and configures its input controllers and spritesheet animation

2 - Background
    Creates a dynamic background that can be changed anytime during the game, fitting the perfect size of
    the canvas and align it starting from the bottom

3 - HUD
    Central element where will be placed the texts and images with behavior and transition effects.

4 - Sprite
    Sequential image that will be rendered and play an animation

5 - Scene Manager
    The scene manager is called inside the main class Game, each scene will have its own class with all updates and draws being called inside
    each running scene.