# Zagat Clone

#### Angular project for Epicodus

_Published_ **March 29, 2019**<br>
_Author_ **Tracy Reith**

1. [Description](#description)
1. [Learning Objective](#learning-objective)
1. [Development Plan](#development-plan)
1. [Target Audience/Users](#target-audience/users)
1. [Development Specs](#development-specs)
1. [Stretch Goals](#stretch-goals)
1. [Installation](#installation)
1. [Known Bugs](#known-bugs)
1. [Technologies Used](#technologies-used)
1. [License](#license)

### Description
A re-creation of the [Zagat website](https://www.zagat.com/portland), made with Angular5, using a Firebase database and Google Maps API. Created for Epicodus Front End Development course.

Zagat is a guide to restaurants in major cities in the United States. Content is a mix of professional and  user-generated reviews.  

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

### Learning Objective
* Practice using Angular5
* Apply best practices of Model-View-Component architecture
* Practice using API

## Development Plan
### Phase 1
_Phase 1 focuses on replicating the UI only. Database and API will be addressed in Phase 2_

1. ~~Analyze front page~~ _DONE_
 * ~~Determine the major functional components~~
 * ~~Determine UI behavior, e.g., responsiveness, rollovers~~
1. ~~Collect assets~~ _DONE_
1. ~~Create components in project~~ _DONE_
1. ~~For each: Build component~~
 * ~~Basic layout~~ _DONE_
 * ~~Add images~~ _DONE_
 * ~~Apply styling~~ _DONE_
 * Add UI behaviors - moved to Stretch Goals

### Phase 2
_API has been moved to Stretch Goals_

1. ~~Transfer city-specific assets to external storage~~ _DONE_
1. ~~Add Routing~~ _DONE_
1. ~~Service~~ _DONE_
1. ~~Create Firebase database~~ _DONE_
1. ~~Add data for one city to database~~ _DONE_
1. ~~Connect to database~~ _DONE_
1. Refactor city-specific elements in code to refer to database
1. Automatically load default city

### Assumptions
* Phase 1 will build out the desktop version first.
* Only front page will be built
* No tests created or run

### Target Audience/Users
* People who appreciate good food
* People looking for quality restaurants in a specific city

### Development Specs

Specification | Input | Output
------------- | ----- | ------
_GIVEN_ a city exists AND information for that city has been entered in the database, <br>_WHEN_ the user selects that city, <br>_THEN_ the system will display information in the Best and Latest sections on the front page | Select 'Portland' | **Best section:** City's Best Portland<br> **Latest section:** Best Restaurants in Portland, New Restaurants and Bars in Portland, OR., Hottest Restaurants and Bars in Portland, OR, Restaurants & Bars Near the Portland Museum of Art, Best Restaurants and Bars Near Portland's Forest Park, 6 Best Things We Ate and Drank at Feast PDX 2017, The 10 Best Things We Ate at Feast Portland 2016

### Stretch Goals
* Add more cities to database
* Add animation effects to images on hover
* Connect to location API to automatically load local/closest city
* Refactor layout/styling to be responsive for small form factors/mobile using media queries

### Installation
* Clone from https://github.com/TracyRe/zagat-clone.git
* Development server
 * Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* Code scaffolding
 * Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
* Build
 * Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
* To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Known Bugs
* None identified

### Technologies Used
* HTML
* Sass with variables and mixins
* Angular5
* Firebase with AngularFire2

### License
[MIT](./LICENSE.txt)

Copyright (c) 2019 Tracy Reith
