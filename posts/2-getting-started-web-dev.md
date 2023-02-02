---
title: "Internship Ready as a Web Developer"
date: "2022-05-11"
description: "A comprehensive guide to taking you from HTML & CSS to a Web Development Intern"
og_description: "From basics to a web-dev intern"
cover_image: "https://user-images.githubusercontent.com/69139607/167338113-fd54e91d-37f6-4fc6-a3f4-f9e51940c6d8.png"
tags: "web-dev, react, node"
devUrl: "this-is-how-you-become-internship-ready-as-a-web-developer-in-2022-part-1-front-end-449g"
published: true
featured: true
---

In this blog post we're gonna dive into, how one who has zero experience in Web Development can become an **internship ready Web Developer**.

We'll first understand the difference between the backend and frontend of a web application, then we'll start by learning the frontend which will include firstly the basics _html_, _css_, and _js_.

Once we're done with these we'll have the choice to move further with the frontend or start exploring the backend I'll recommend moving forward with a _Frontend JavaScript Framework_ like _react.js_, or one can move forward with a _Backend JavaScript Framework_ like _express.js_

> **Note:** The resources are going to be opinionated in this post to solve the issue of **abundance of resources**. It is an issue because if we are exposed to too many resources we tend to procrastinate

> Even though this post is opinionated, you can still choose your own resources and swap them with the ones I recommend. Because it is possible that you don't understand the one's I have recommended

## Why Web-Development?

The answer to this question is fairly straightforward, Web Development has proven itself to be a valuable skill to learn from time and time again.
I can tell this by my experience and from the experience of my fellow developers, that the number of opportunities in Web Development is far greater than they are in say Mobile Development or Machine Learning Development. The pay is pretty nice too, although it highly depends on the level of your skill.
The stipend is anywhere from _10k INR_ to _60K INR_ depending on the quality and relevance of the skills you have. _(your year of college doesn't matter)_

Apart from all this, the barrier to entry for Web Development is comparatively way less. You start to see the result of all that you've been learning quickly which motivates us, we learn more and get more results. This _positive feedback loop_ takes more time to kick in, in other forms of development (say Mobile Development)

All and all, spending time learning web development is going to be extremely rewarding.

## Why JavaScript?

The answer to this question is fairly complicated compared to the previous one. So let's divide it into two parts the _front-end_ and the _back-end_.

### Front-End

If I had to tell someone why they need to learn _JavaScript_ to become a frontend developer in a single line, I would say:
Because every browser has a _JavaScript Runtime_ built in by default.

JavaScript Runtime being the platform on which the _. js_ code is executed. But no one would be using _. js_ if it didn't get the job done, because it does. And there is a huge number of _javaScript frameworks_ out there that make the ecosystem very developer friend (_at least virtually_)

> Even if the website is built with a framework like **Django** (python) the front-end is still written with **javaScript**

### Back-End

_javaScript_ on the back-end is a different story entirely, there is no default recommendation for the back-end technologies, and using _javaScript_ on the backend is nothing more than a _personal recommendation_

I recommend _javaScript_ for the backend for mainly two reasons, the community is great and the friction is way less. (by friction I mean the context switching one has to do when developing an application using two different languages)

**The top 3 _back-end_ frameworks:**

- PHP – Laravel, CakePHP
- Python – Django, Flask
- JavaScript – Express.js, Spring

A newbie can learn either of the above-mentioned frameworks for the _back-end_ but my recommendation still lies with _javaScript_, the blog post being about _internship-ready web-developer_. This statement doesn't mean that these technologies don't have opportunities, it is simply implying the _javaScript_ has more.
With all that out of the way let's dive in.

## Index

### [ Featured: [Learning on YouTube](#youtemy-callout) ]

- **Basics:**
  - [Internet](https://www.vox.com/2014/6/16/18076282/the-internet)
    - [How does the internet work, and what is HTTP?](http://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm)
    - [Browsers and how they work?](https://www.mozilla.org/en-US/firefox/browsers/what-is-a-browser/#:~:text=When%20the%20web%20browser%20fetches,and%20experience%20on%20the%20internet.)
    - [What's a Domain Name?](https://www.cloudflare.com/en-in/learning/dns/glossary/what-is-a-domain-name/)
    - [Working of a DNS, and what is hosting?](https://www.cloudflare.com/en-in/learning/dns/what-is-dns/)
  - [HTML](#html)
  - [CSS](#css)
  - [JavaScript](#js-frontend)
- **[Tools:](tools)**
  - [Package Mangers](#package-managers) (like npm),
  - [build tools](#build-tools)
    - npm scripts
    - webpack
    - esbuild
  - [Version Control](#version-control)
    - Basic usage of Git and GitHub
    - Repo hosting service (GitHub)
- **[Additional front-end:](#additional-frontend)**

  - [JavaScript Front-end Frameworks](#js-frameworks) (**react.js**, angular.js, vue.js, etc)
  - [CSS Frameworks](#css-framework) (**tailwind**, bootstrap, etc)
  - [SSR](#ssr) (**next.js**, gatsby.js, nuxt.js, etc)

- **[Building Projects]** (Will be covered in a different blog post)

- **Back-End:** (this section will be covered in Part 2)
  - OS and General Knowledge
    - Basic Terminal Usage and CLI commands (grwp, awk, sed, lsof, curl, etc)
    - Process, Threads, Concurrency and Memory management
    - I/O Management and POSIX (stdin, stdout, stderr, pipes)
    - Basic Networking
  - Programming Language (javaScript preferred)
  - Server (node.js, express.js etc)
  - DataBases
    - Relational (**PostgresSQL**, MySQL, MariaDB, etc)
    - Document (MongoDB, Firebase)
  - APIs
    - REST
    - JSON APIs
    - gRPC
  - Authentication

Don't get anxious looking at all the topics above, I am sorry if they look intimidating. This index is designed to _quick access_ all the _sections_ and _sub-sections_ of the blog post that corresponds to each of the topics. For some of the topics that are too small to explain I have directly linked resources to learn them. For example, _How does the internet work, and what is HTTP?_ is directly linked to a **Stanford** web page explaining exactly that.

> **Note:** The first two steps (Basics and Tools) are basically **mandatory (in order)** to move forward with the later steps, however the last two steps (Additional Frontend and Back-End) can be swapped to the interest, whichever interests you more.

# HTML {#html}

_HyperText Markup Language_ is the foundation of all websites. It’s the main file type that is loaded in your browser when you look at a website. The HTML file contains all the _content on the page_, and it uses _tags_ to denote different types of content.

For example, you can use tags to create headline titles, paragraphs, bulleted lists, images, and so on. HTML tags by themselves do have some styles attached, but they are pretty basic, like what you would see in a Word document.

HTML for beginners is very easy to pick up and can be learned fairly quickly. My sister is in _6th grade_ and she was getting the hang of it.

But, unfortunately, many people are stuck in this phase, maybe they're just saying they have started learning and haven't really but in _fomo_ they say they're learning HTML. What I want to say is don't waste a lot of time on learning this, it is extremely easy to understand. It is basically _MS Word_ u>where the structure of the content is determined by _html tags_ instead of the **bold** or _italic_ button in the _MS Word program_

To learn _html_ I have two video recommendation

- [HTML Tutorial for Beginners: HTML Crash Course](https://www.youtube.com/watch?v=qz0aGYrrlhU) _[English]_
- [HTML Tutorial for Beginners | Complete HTML with Notes & Code](https://www.youtube.com/watch?v=HcOc7P5BMi4&t=4s) _[Hindi]_

Just watch either of the two videos and move ahead, without wasting any more time on this.

# CSS {#css}

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
In the middle, there is the _code editor_ in which we write our code, the output of which is shown at the right of the page.

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

**I can't recommend this [interactive course](https://dev.to/bascodes/a-todo-app-with-pyscript-3435) enough!**

# JavaScript {#js-frontend}

JavaScript is a very interesting language (putting it mildly). It was designed in 10 days to run inside the browser. Using JavaScript we can make our website dynamic, meaning it will respond to different inputs from the user or other sources.

For example, you can make a Weather widget showing the weather based on the input of the user, you can build a website that tracks the user's expenses and shows the stats in a chart form.

It is _crucial_ to learn if you wanna go ahead to learn JavaScript frameworks like React, you'll have a better time learning those frameworks if you take the time to learn regular Vanilla JavaScript first.

Even if you wanna go for backend development, you still can't gloss over JavaScript. You are also required to understand the fundamentals of this language. This is the only way we can interact with the browser like we do with a computer and _it is fun_.

**Now comes the resources part:**

- **[Learn JavaScript in 1 video - Advanced JavaScript Crash Course + Projects](https://www.youtube.com/watch?v=hNYzV87wocY)**
- **[Javascript Course - Hitesh Choudhry](https://www.youtube.com/playlist?list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD)**

These are the two free courses that I will recommend, but watching videos while mindlessly copying the code is what everyone tends to do when we learn from videos.

To solve this issue I would **highly recommend** you follow the **[30 Days of JavaScript Challenge](https://javascript30.com/)**. In this challenge you will be given a unique challenge each day for 30 days, slowly increasing in difficulty.

This is the perfect way to solidify your learning and make you fall in love with JavaScript.

> **Note**: Once you are done with this, you'll have to learn **Asynchronous JavaScript** and the best course for that is [Namaste JavaScript - Akshay Saini](https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP), you don't have to watch the whole playlist at once, you can take your time and keep learning it slowly once you finished with the basics.

# Learning on YouTube {#youtemy-callout}

Even though I am asking you to watch these playlists on _YouTube_, it is not a good platform to _learn_. There are a **lot of distractions**, a whole sidebar dedicated to making you **watch unproductive content**.

I personally go from **learning** to watching **Tanmay Bhatt's Comedy videos** in no time.

This is why I would recommend you to checkout **[YouTemy](https://youtemy.tech)** the project I built to fix these issues. Even though it is in its MVP stage, you'll still get a lot of use out of it.

You can send feedback for the project to me personally on [Twitter](https://twitter.com/RoseKamalLove1), or you can post an issue on **[GitHub - YouTemy](https://github.com/rosekamallove/youtemy)** and while you're at it, **do give it a ⭐ on GitHub, I would Love ❤️ that**

<iframe src="https://www.youtube.com/embed/FiOLt_Fdd1U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Tools {#tools}

Let’s get into some other front-end technologies now. As we mentioned, HTML, CSS, and JavaScript are the basic building blocks of front-end web development. In addition to them, there are a few other tools that you’ll want to learn.

## Package Manager {#package-managers}

Package managers are online collections of software, much of it open source. Each piece of software, called a package, is available for you to install and use in your own projects.

You can think about them like plugins– instead of writing everything from scratch, you can use helpful utilities that other people have written already.

The most popular package manager is called [npm](https://www.npmjs.com/), or Node Package Manager, but you can also use another manager called [Yarn](https://classic.yarnpkg.com/en/). Both are good options to know and use, although it’s probably best to start out with npm.

If you’re curious to learn more, you can read this article on the [basics of using npm](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/).

{ _[Source of Above Section](https://www.freecodecamp.org/news/beginners-roadmap-web-development/)_ }

## Build Tools {#build-tools}

> Build tools are programs that automate the creation of executable applications from source code. The building incorporates compiling, linking, and packaging the code into a usable or executable form

By far the most widely used _build tool_ is **[WebPack](https://webpack.js.org/)** and I will recommend understanding how WebPack works. This knowledge will be easily transferable to other build tools.

- **[If You are Scared of Webpack, WATCH THIS!](https://www.youtube.com/watch?v=aT1rkp1UJ00&t=7s)**

## Version Control {#version-control}

> This is something that you just can't skip, it is very important and will make you a decent developer single-handedly.

Version control (also called source control) is a system that keeps track of every code change that you make in your project files. You can even revert to a previous change if you make a mistake. It’s almost like having infinite save points for your project, and let me tell you, it can be a huge lifesaver.

The most popular version control system is an open source system called Git. Using [Git](https://git-scm.com/), you can store all your files and their change history in collections called repositories.

You may have also heard of [GitHub](https://github.com), which is an online hosting company owned by Microsoft where you can store all your Git repositories.

To learn Git and GitHub, [GitHub.com](https://lab.github.com/) has some [online guides](https://docs.github.com/en) that explain how to get up and running. Traversy Media also has a [YouTube video](https://www.youtube.com/watch?v=SWYqp7iY_Tc) explaining how Git works.

And while you're at it, go ahead and learn [GitHub Pages](https://pages.github.com/) the repo hosting service provided by GitHub which will allow you to host your websites for free. And there is nothing better than being able to show your friends what you have built through a live URL

# Additional Frontend {#additional-frontend}

First off _Congratulations_, not a lot of people reach here. They quit before getting to the good part, the part where I fell in love with web development. The part where we finally start to see the output of the hard work that we've been doing.

This is the part where you'll get the skills that will **get you an internship** with good pay or good enough pay (depending on the quality of projects that you have).

In this section, I'll be telling you about _CSS frameworks_, _JavaScript front-end frameworks_ and then finally _SSR (Server Side Rendering)_. And if you choose to not learn the backend just yet I'll also tell you how you can build a full-stack application without the overhead of learning the backend (spoiler alert: Firebase)

## JavaScript Front-End Frameworks {#js-frameworks}

_JavaScript Frameworks_ 😆 this sure is a very interesting topic to write about. But we'll first go over why we need them anyway, what purpose they serve, what are the most popular ones and then finally the none that I'll recommend and then where can you learn them from.

> JavaScript frameworks are an essential part of modern front-end web development, providing developers with tried and tested tools for building scalable, interactive web applications. Many modern companies use frameworks as a standard part of their tooling, so many front-end development jobs now require framework experience.
>
> [ From [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks) ]

So, when we use basic HTML, CSS, and JavaScript to build our application, there is a limit on how complex a website can be, and real-time updates aren't great either. As the application grows larger and larger, it gets harder and harder to understand the whole flow of the project.

In the past there was a threshold of how complex a front-end can be, so most of the work was done using the back-end which served static HTML, CSS, and JavaScript files to the client, but now as the client's machines are getting better, Client Side frameworks have taken over the world.

They are easier to scale, making complex DOM manipulations easier than ever. I mean just go and look the FaceBook's homepage. There is so much going on there, imagine building that with plain JS and HTML, and CSS. No, go there and actually start designing the front-end yourself (on paper obv)

Now that we know why front-end frameworks exist, we can move forward and see what are the available options to learn.

There are a huge number of front-end frameworks and new ones popping basically every month it seems. Maybe even every week, to what to learn and what not to learn? The answer is a bit complicated, let's first narrow down our list to the top 3

**Top 3 front-end JavaScript Frameworks**

- **[vue.js](https://vuejs.org/)** [188k GH Stars]
- **[react.js](https://reactjs.org/)** [175k GH Stars]
- **[angular.js](https://angular.io/)** [55k GH Stars]

Each of the above frameworks is great, _Vue is the most loved_, _React is the most widely used_ and _Angular is the most hated 😆_

My recommendation out of the above bunchy is **React.js** the reason being, that it is very fun to write, the opportunities for React Developers are huge, and the knowledge of React can be then transferred to _Cross Platform: React Native_ which can be used to build mobile apps for both IOS and Android.

> I love ❤️ React.js (it is not a framework tho, though it is a library ping me on [Twitter](https://twitter.com/RoseKamalLove1) if you wanna discuss this)

### Resource to learn React.js

**[Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/)**

This is by far the best React course there is, it's **only ₹500 or $10**,
My friend learned from this and landed an internship in the first year and It is recommended by everyone that has watched it.

There is no alternative to this course, so I would **highly recommend** that you buy this course and complete it, and follow all the instructions the instructor gives you. _I am sure that you'll understand all the concepts very clearly._

And by the end of the course, you will be in a position to build your own _full-stack project_ (using Firebase) or _apply to internships directly_, that's how good this course is.

**Some Good Stuff on YouTube**

- [React Course - Beginner's Tutorial for React JavaScript Library - FreeCodeCamp](https://www.youtube.com/watch?v=bMknfKXIFA8)
- [ReactJS Tutorial for Beginners - Codevolution](https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3)
- [Practical React - Ben Awad](https://www.youtube.com/playlist?list=PLN3n1USn4xlntqksY83W3997mmQPrUmqM)

## CSS Frameworks {#css-framework}

If you have followed this guide religiously, I recommended _the best_ CSS course that I could find ([_FreeCodeCamp Interactive CSS Course_](https://www.freecodecamp.org/learn/responsive-web-design/)) and you have completed it (at least I hope) but the problem with plain CSS is that it is not _scalable_ what I mean by that is, as the project grows larger and larger the maintainability of CSS decreases rapidly.

Styles are overriding each other, new styles are making the old styles go nuts, the new guy just used `!important` everywhere and, now everyone is holding their re-iterating their life choices. It is a disaster.

Though many great developers have come up with various systems to fix all these issues (_[symantic class names](https://css-tricks.com/semantic-class-names/) for example_), plain CSS is still a disaster, especially for someone who hasn't worked on large scale projects.

> ### “Best practices” don’t actually work.
>
> I’ve written a **few thousand words** on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.
>
> **Adam Wathan** (Creator of Tailwind CSS)

And this is where **CSS Frameworks** come in, to solve all the issues I mentioned above, some do the job really well that I think why does CSS even exist, and some suck so bad that I start loving plain CSS. So, what is _my_ recommendation you may ask, well it is **Tailwind CSS** duh.

You can try using _bootstrap_ , _bulma_ or _skeleton_ but once you get your hands on experience using _Tailwind CSS_ I don't think you would even think of switching tailwind out for your next project (I certainly don't), that's how good it is.

> You don't need to go through an entire course to learn tailwind, _since you already know CSS_ you can just google how to do a certain CSS thing in tailwind as you go along with your project.

**Learning Resources**

- [Official Getting Started](https://tailwindcss.com/docs/installation)
- [Tailwind CSS Crash Course](https://www.youtube.com/watch?v=UBOj6rqRUME)

## SSR (Server Side Rendering) {#ssr}

Damn, this has been a very long write-up, but we're finally approaching the end so _phew_ 😌.

### What is Server Side Rendering?

Server-side rendering (SSR) is an application’s ability to convert HTML files on the server into a fully rendered HTML page for the client. The web browser submits a request for information from the server, which instantly responds by sending a fully rendered page to the client. Search engines can crawl and index content prior to delivery, which is beneficial for Search Engine Optimization purposes.

Popular examples of server-side rendering JavaScript frameworks include Angular server-side rendering, ejs server-side rendering, server-side rendering Express, Gatsby server-side rendering, Google server-side rendering, NestJS server side rendering, Next server-side rendering, Nuxt server side rendering, React server-side rendering and Vue server side rendering.

**Advantages of SSR**

- A server-side rendered application enables pages to load faster, improving the user experience.
- When rendering server-side, search engines can easily index and crawl content because the content can be rendered before the page is loaded, which is ideal for SEO.
- Webpages are correctly indexed because web browsers prioritize web pages with faster load times.
- Rendering server-side helps efficiently load webpages for users with slow internet connections or outdated devices.

### What is Static Site Generation?

A static site generator is a tool that generates a full static HTML website based on raw data and a set of templates. Essentially, a static site generator automates the task of coding individual HTML pages and gets those pages ready to serve to users ahead of time. Because these HTML pages are pre-built, they can load very quickly in users' browsers.

Static site generators are an alternative to content management systems (CMS) — another type of tool for managing web content, generating webpages, and implementing templates. (A template is a reusable format for web content; developers use templates to avoid writing the same formatting over and over.) Static site generators are typically part of a JAMstack web development approach.

### Why Next.js?

**[Next.js](https://nextjs.org/)** is a React Framework. A _React_ Framework? that doesn't make sense, the framework of a framework? Well, React is not a framework, it is the library. What this means is that React doesn't force you to use it in a certain way. You can use React for a single `div` in an application built with plain HTML, CSS and JavaScript.

Next.js however is an opinionated set of tools, which allows the developer to build applications in a certain way. Let me tell you this, **It is the best thing that has happened to React to build Production Applications**.

**Some of the amazing features of Next.js**

- Automatic Routing (Frontend as well as API Routing)
- Code Splitting
- Server Side Rendering and Static Site Generation
- Image Optimization and SEO (The `<Head/>` element)

**Resources to learn**

> Next.js themselves has provided us with amazing documentation and code-along tutorials, so there is no need to wander around the internet to learn Next.js

- **[Official Start Learning](https://nextjs.org/learn/foundations/about-nextjs?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=next-website)**
- **[Official Documentation](https://nextjs.org/docs)**

---

# We're finally done 🔥

Congratulation to all those who have read this blog post till here, and best of luck for completing all this and building cool projects, and getting an awesome internship.

Do let me know if you do see improvements, or want to ask for some advice or anything at all. [Twitter](https://twitter.com/RoseKamalLove1) is the best place to do this.
Do give me a follow while you're at it 😅.

What is next after this guide? I will be following up with Part: 2 of this blog post which will have a detailed guide explaining back-end development. After which or before this, I will post about what is the optimal way to come up with new project ideas and actually finish them till deployment (and avoiding **Tutorial Hell** 👿)

I am also working on React, and Next.js tutorials, and will also post about how you can actually apply for internships. Stay tuned for that.

Thank you all for staying this far 🙂.
