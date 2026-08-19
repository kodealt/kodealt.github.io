# kodealt.github.io

personal web-design experiment

the site is primarily a visual design project, combining minimalist dark UI, custom typography, animated elements, and animated favicon.

the main goal of this project is to keep it as lightweight and dependency free, while also making it interactive

## live:
[kodealt.github.io](https://kodealt.github.io/)

## features:
- animated landing page
    - intro animation, and welcome page

- animated favicon
    - not static, almost like gifs. since some browsers only show first frame of gif, this is a workaround
    - `icon.js` loads loads animation from `effextor/favi.js`
    - animation is cycled through png frames from `assets/f3/`, with dynamic capability of loading different presets/frames

- /projekts
    - available at `/projects`
    - project cards are dynamically loaded via javascript, allowing for easier scalability.
    - grid layout for visual ease
    - plan to move to WebGL

## resources

| item | purpose |
| ---  | ---     |
|html5| page content/ structure|
|css3| layout, typography, animation, effects, styling|
|javascript| interactive and dynamic content|
|png| favicon and other images for upcoming project previews|
|github pages| live deployment|


## current structure

```
.
├── index.html    
├── fallback.css  
├── icon.js       
│
├── effextor/
│   ├── favi.js   
│   └── fx.js     
│
├── projekts/
│   ├── index.html
│   └── getItms.js
│
├── assets/
│   ├── bg.png    
│   ├── f3/       
│   └── fonts/    
│
└── img/
    └── index.html

```
## running locally

as the site uses custom modules, it is better to run through a local HTTP server rather than use `file://`

steps:
clone site
`git clone https://github.com/kodealt/kodealt.github.io`

cd into it
`cd kodealt.github.io`

if python is installed:
`python -m http.server 3000` 
 
then you can go to `localhost:3000` to view it locally

## development
realistically, the only thing that i do when making a new page (not the best practices) is:
> - edit html (structures), css, add js
> - save and test
> - fix any outstanding errors
> - deploy once satisfied 

## deployment

this repo is meant to be a static github pages site. 

there is no packages needed to be installed for development. this can be directly served as the browser already knows how to handle these filetyles as it is commonly used. 

only real concern is chosing the right branch on the deployment page, to chose the branch with `index.html`

## design philosoply

this project is a bit of an odd-site

while yes, it is meant to be a personal site and even serve as a portfolio, it is also a place for my graphics/design experimentation. rather than rely on a large framework or a collection of UI libraries, the visual effects are created in house by me with CSS and JS

there are still some priorities: 

- avoid unnecessary dependencies
- keep it lightweight
- always keep experimenting
- make it visually appealing and interactive rather than just a portfolio
- keep source understandable enough if someone wishes to learn how these effects are made (comments will be added once site is nearing end of development)

## current limitations / TODO:

this poroject is highly experimental so some parts are unfinished, unpolished, and broken.

planned improvements:

- more projects on `/projects`
- more background visual effects
- varied favicon animations
- option to disable favicon
- further 3d interactions with cards
- cleanup of codebase
- migration to webgl?

## questions 

@a_persan on discord