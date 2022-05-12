---
title: 'This is what you can do to become an internship ready Web Developer [in 2022]'
date: '2022-05-11'
description: "There is a plethora of videos and blog posts out there discussing how to get started with Web Development, whenever I go to Uni there is at least one person asking this question to me. So I figured the content isn't helping and a potential problem can be those videos and blogs posts discuss the what but not the how. This is what I am gonna try and solve"
og_description: 'A comprehensive guide to take you from HTML & CSS to an Web Development Intern'
cover_image: 'https://user-images.githubusercontent.com/69139607/167338113-fd54e91d-37f6-4fc6-a3f4-f9e51940c6d8.png'
tags: 'beginner, html, css, js, react, nodejs, web-development'
published: false
---

## Introduction

In this blog post we're gonna dive into, how one who has zero experience in Web Development can become an **internship ready Web Developer**.

We'll first understand the difference between the backend and frontend of a web application, then we'll start by learning the frontend which will include firstly the basics _html_, _css_, and _js_.

Once we're done with these we'll have the choice to move further with the frontend or start exploring the backend I'll recommend moving forward with a _Frontend JavaScript Framework_ like _react.js_, or one can move forward with a _Backend JavaScript Framework_ like _express.js_

### Why Web-Development?

The answer to this question is fairly straightforward, Web Development has proven itself to be a valuable skill to learn from time and time again.
I can tell this by my experience and from the experience of my fellow developers, that the number of opportunities in Web Development is far greater than they are in say Mobile Development or Machine Learning Development. The pay is pretty nice too, although it highly depends on the level of your skill.
The stipend is anywhere from _10k INR_ to _100k INR_ depending on the quality and relevance of the skill you have.

Apart from all this, the barrier to entry for Web Development is comparatively way less. You start to see the result of all that you've been learning quickly which motivates us, we learn more and get more results. This _positive feedback loop_ takes more time to kick in, in other forms of development (say Mobile Development)

All and all, spending time learning web development is going to be extremely rewarding.

### Why JavaScript?

The answer to this question is fairly complicated compared to the previous one. So let's divide it into two parts the _front-end_ and the _back-end_.

**Front End**

If I had to tell someone why they need to learn _JavaScript_ to become a frontend developer in a single line, I would say:
Because every browser has a _JavaScript Runtime_ built in by default.

JavScript Runtime being the platform on which the _. js_ code is executed. But no one would be using _. js_ if it didn't get the job done, because it does. And there is a huge number of _javaScript frameworks_ out there that make the ecosystem very developer friend (_at least virtually_)

> Even if the website is built with a framework like **Django** (python) the front-end is still written with **javaScript**

**Back End**

_javaScript_ on the back-end is a different story entirely, there is no default recommendation for the back-end technologies, and using _javaScript_ on the backend is nothing more than a _personal recommendation_

I recommend _javaScript_ for the backend for mainly two reasons, the community is great and the friction is way less. (by friction I mean the context switching one has to do when developing an application using two different languages)

**The top 3 _back-end_ frameworks:**

- PHP – Laravel, CakePHP
- Python – Django, Flask
- JavaScript – Express.js, Spring

A newbie can learn either of the above-mentioned frameworks for the _back-end_ but my recommendation still lies with _javaScript_, the blog post being about _internship-ready web-developer_. This statement doesn't mean that these technologies don't have opportunities, it is simply implying the _javaScript_ has more.
With all that out of the way let's dive in.

### Index

> - <u>**Basics</u>:**
>   - [Internet](https://www.vox.com/2014/6/16/18076282/the-internet)
>     - [How does the internet work, and what is HTTP?](http://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm)
>     - [Browsers and how they work?](https://www.mozilla.org/en-US/firefox/browsers/what-is-a-browser/#:~:text=When%20the%20web%20browser%20fetches,and%20experience%20on%20the%20internet.)
>     - [What's a Domain Name?](https://www.cloudflare.com/en-in/learning/dns/glossary/what-is-a-domain-name/)
>     - [Working of a DNS, and what is hosting?](https://www.cloudflare.com/en-in/learning/dns/what-is-dns/)
>   - [HTML](#html)
>   - [CSS](#css)
>   - [JavaScript](#js-frontend)
> - **Tools:**
>   - Package Mangers (like npm),
>   - build tools
>     - npm scripts
>     - webpack
>     - esbuild
>   - Version Control
>     - Basic usage of Git and GitHub
>     - Repo hosting service (GitHub)
> - **Additional front-end:**
>   - Responsive design
>   - CSS pre-processors (SaaS, Less)
>   - JavaScript Frameworks (**react.js**, angular.js, vue.js, etc)
>   - CSS Frameworks (**tailwind**, bootstrap, etc)
>   - SSR (**next.js**, gatsby.js, nuxt.js, etc)
> - **Back-End:**
>   - OS and General Knowledge
>     - Basic Terminal Usage and CLI commands (grwp, awk, sed, lsof, curl, etc)
>     - Process, Threads, Concurrency and Memory management
>     - I/O Management and POSIX (stdin, stdout, stderr, pipes)
>     - Basic Networking
>   - Programming Language (javaScript preferred)
>   - Server (node.js, express.js etc)
>   - DataBases
>     - Relational (**PostgresSQL**, MySQL, MariaDB, etc)
>     - Document (MongoDB, Firebase)
>   - APIs
>     - REST
>     - JSON APIs
>     - gRPC
>   - Authentication

Don't get anxious looking at all the topics above, I am sorry if they look intimidating. This index is designed to _quick access_ all the _sections_ and _sub-sections_ of the blog post that corresponds to each of the topics. For some of the topics that are too small to explain I have directly linked resources to learn them. For example, _How does the internet work, and what is HTTP?_ is directly linked to a **Stanford** web page explaining exactly that.

> **Note:** The first two steps (Basics and Tools) are basically **mandatory (in order)** to move forward with the later steps, however the last two steps (Additional Frontend and Back-End) can be swapped to the interest, whichever interests you more.

### HTML {#html}

_HyperText Markup Language_ is the foundation of all websites. It’s the main file type that is loaded in your browser when you look at a website. The HTML file contains all the _content on the page_, and it uses _tags_ to denote different types of content.

For example, you can use tags to create headline titles, paragraphs, bulleted lists, images, and so on. HTML tags by themselves do have some styles attached, but they are pretty basic, like what you would see in a Word document.

HTML for beginners is very easy to pick up and can be learned fairly quickly. My sister is in _6th grade_ and she was getting the hang of it.

But, unfortunately, many people are stuck in this phase, maybe they're just saying they have started learning and haven't really but in _fomo_ they say they're learning HTML. What I want to say is don't waste a lot of time on learning this, it is extremely easy to understand. It is basically _MS Word_ u>where the structure of the content is determined by _html tags_ instead of the **bold** or _italic_ button in the _MS Word program_

To learn _html_ I have two video recommendation

- [HTML Tutorial for Beginners: HTML Crash Course](https://www.youtube.com/watch?v=qz0aGYrrlhU) _[English]_
- [HTML Tutorial for Beginners | Complete HTML with Notes & Code](https://www.youtube.com/watch?v=HcOc7P5BMi) _[Hindi]_

Just watch either of the two videos and move ahead, without wasting any more time on this.

### CSS {#css}

_Cascading Style Sheets_, lets you style that HTML content so it looks nice and fancy. You can add colors, custom fonts, and layout the elements of your website however you want them to look. You can even create _animations_ and shapes with CSS!

> With great power comes great responsibility

There is a lot of depth to CSS, and sometimes people tend to gloss over it so they can move on to things like JavaScript. However, I can’t overestimate the importance of understanding how to convert a design into a website layout using CSS. If you want to specialize in front-end, it’s essential to have really solid CSS skills.

Having said that, _css_ is easy in the beginning then as soon as it starts making sense, it gets harder and harder. So my personal recommendation would be to _learn the fundamentals_ in depth so you know what you're doing. 80% of the work can be get done with just these fundamentals.

And to get these fundamentals in place I have the perfect resource for you, I bet you have at least heard of _freeCodeCamp_. They have a [_interactive code along with tutorial_](https://www.freecodecamp.org/learn/responsive-web-design/) which takes from _basic html_ to _responsive web design_.

> **The topics involve:**
>
> - [Basic HTML and HTML5](https://www.freecodecamp.org/learn/responsive-web-design/#basic-html-and-html5)
> - [Basic CSS](https://www.freecodecamp.org/learn/responsive-web-design/#basic-css)
> - [Applied Visual Design](https://www.freecodecamp.org/learn/responsive-web-design/#applied-accessibility)
> - [Applied Accessibility](https://www.freecodecamp.org/learn/responsive-web-design/#applied-accessibility)
> - [Responsive Web Design Principles](https://www.freecodecamp.org/learn/responsive-web-design/#responsive-web-design-principles)
> - [CSS FlexBox](https://www.freecodecamp.org/learn/responsive-web-design/#css-flexbox)
> - [CSS Grid](https://www.freecodecamp.org/learn/responsive-web-design/#css-grid)

![freeCodeCampLayout](https://user-images.githubusercontent.com/69139607/167907972-8838c53f-1cb0-4552-92c8-d7c07573f562.jpg)

This is what the layout of the website looks like, on the left, we have the tutorial _explaining the topic_ that we have learned. If the topic is from a previous module then it is linked here.
In the middles, there is the _code editor_ in which we write our code, the output of which is shown at the right of the page.

Wait there is more, when you complete the modules you will be greeted with [_coding assignments_](https://www.freecodecamp.org/learn/responsive-web-design/#responsive-web-design-projects) in which you'll have to code out some projects to _solidify the CSS skills_ that you have learned.

> **There are in total 5 coding assignments:**
>
> - [Build a Tribute Page](https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-tribute-page)
> - [Build a Survey Form](https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-survey-form)
> - [Build a Product Landing Page](https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-product-landing-page)
> - [Build a Technical Documentation Page](https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-technical-documentation-page)
> - [Build a Personal Portfolio Webpage](https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-personal-portfolio-webpage)
>
> Yeah, it even includes a **personal portfolio**

**I can't recommend this [interactice course](https://dev.to/bascodes/a-todo-app-with-pyscript-3435) enough!**

### Javascript {#js-frontend}

- Why
- What
- From Where
- Using YouTemy
- Major Pit falls
- Not falling into the tutorial hell (by thinking of the solution before hand, then implementing it, and using the video to check our solution)
- Finally creating a project from scratch with Git and Github
- Applying to internships
