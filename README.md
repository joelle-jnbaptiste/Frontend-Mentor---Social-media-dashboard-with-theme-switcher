# Frontend Mentor - Social media dashboard with theme switcher solution

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Screenshot

![](https://imgur.com/jXijlET.png)
![](https://imgur.com/kfIASyu.png)
![](https://imgur.com/ELsXp0X.png)
![](https://imgur.com/BjP4iJW.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://joelle-jnbaptiste.github.io/Frontend-Mentor---Social-media-dashboard-with-theme-switcher/)

## My process
I used Angular to build my site : I created 2 components to create the tw sets of card. Cards are generated with an ngFor, and feed with a service wich old the cards data.
When all data was retrieved, I then procceed to style the project. The toggle button allow to change the value of a boolean, wich in return change the template class to light or dark mode.

### Built with

- [Angular CLI](https://github.com/angular/angular-cli) version 11.2.11.
- Semantic HTML5 markup
- SCSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learned how to deploy an Angular project to a Github page !
I also struggled to mage a top border with radius and linear gradient color.

### Useful resources

- [Deploy Angular porject to Github Page](https://efficientuser.com/2021/03/04/how-to-deploy-angular-app-on-github-pages-for-free/)
- [Top border with radius and gradient](https://stackoverflow.com/questions/51496204/border-gradient-with-border-radius) 

## Author

- Frontend Mentor - [@joelle-jnbaptiste](https://www.frontendmentor.io/profile/joelle-jnbaptiste)

