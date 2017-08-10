# ConstantTherapy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Constant Therapy Code Challenge
Mahendra: mahendra.advani@constant-therapy.com
Veera: veera.anantha@constant-therapy.com

To get a better sense of your UI/UX, design and coding abilities, 
I would like to propose this small project for you to undertake over the next 24 hours 
 
- Create web page with a chessboard (8x8 grid). 
- Allow a user to click on any two squares (A and B) on the chessboard.
- Calculate the least number of hops a knight would need to make to go from square A to square B
- Display results on the page, possibly with some animation or visual representation of the solution
 
You may have seen variations of this problem before (shortest path between two points). 
Feel free to look up existing algorithms if you need to. If you create a service 
(say, in Node.js) you can use standard chess notation as input to the service endpoint. 
But primarily, I'd like you to showcase a UI framework that you are familiar with 
(Angular, React, Bootstrap, etc.) to present the web application.
 
Please let me know if you have any questions, or if you need additional time to complete the assignment.
 
# Mockup


# Create am 8x8 board using standard chess notation
1. Create a basic Chessboard component
2. Build out a 8x8 square board with standard chess rank/file notation
 
# Add interactions to the board
1. Set hover on the squares to change background color to a shade of orange
2. Set logic in board.component such that when a square is clicked its background is set to the hover color
3. Set logic in board.component such that when a second square is clicked its background is set to the hover color
4. Set logic in board.component such that after two squares are selected, the hover is disabled and the clickability is disabled.

#TODO: 
1. Enable Clear Selection button
2. Enable Calculation - Implement a version of Dijkstra's algorithm or A* algorithm?
   * https://rosettacode.org/wiki/Knight%27s_tour
   * http://www.techiedelight.com/chess-knight-problem-find-shortest-path-source-destination/
3. Wrap up - Make things look really nice.
