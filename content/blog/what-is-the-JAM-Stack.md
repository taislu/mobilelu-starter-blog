---
title: "What is the JAM Stack"
date: "2019-11-05"
description: You may have already seen or worked on a JAMstack site! They do not have to include all attributes of JavaScript, APIs, and Markup. They might be built using by hand, or with Jekyll, Hugo, Nuxt, Next, Gatsby, or another static site generator...
category: Gatsby
---

<a href=" https://jamstack.org/"
     target="_blank">Source : Create fast and secure sites and dynamic apps without web servers</a>

A modern architecture —
Create fast and secure sites and dynamic apps with <strong>JavaScrip</strong>, <strong>APIs</strong>, and prerendered <strong>Markup</strong>, served without web servers. When we talk about “The Stack,” we no longer talk about operating systems, specific web servers, backend programming languages, or databases.

The <strong>JAMstack</strong> is not about specific technologies. It’s a new way of building websites and apps that delivers better performance, higher security, lower cost of scaling, and a better developer experience. 

You may have already seen or worked on a JAMstack site! They do not have to include all attributes of JavaScript, APIs, and Markup. They might be built using by hand, or with Jekyll, Hugo, Nuxt, Next, Gatsby, or another static site generator...  The thing that they all have in common is that they don’t depend on a web server.


<strong>JavaScript</strong> -
Any dynamic programming during the request/response cycle is handled by JavaScript, running entirely on the client. This could be any frontend framework, library, or even vanilla JavaScript.

<strong>APIs</strong> -
All server-side processes or database actions are abstracted into reusable APIs, accessed over HTTPS with JavaScript. These can be custom-built or leverage third-party services.

<strong>Markup</strong> -
Templated markup should be prebuilt at deploy time, usually using a site generator for content sites, or a build tool for web apps.

Any project that relies on a tight coupling between client and server is <strong>not</strong> built with the JAMstack. This would include: 

- A site built with a server-side CMS like WordPress, Drupal, Joomla, or Squarespace.
- A monolithic server-run web app that relies on Ruby, Node, or another backend language.
- A single page app that uses isomorphic rendering to build views on the server at runtime.

Why the JAMstack? 

- <strong>Better Performance</strong> - 
Why wait for pages to build on the fly when you can generate them at deploy time? When it comes to minimizing the time to first byte, nothing beats pre-built files served over a CDN.

- <strong>Higher Security</strong> - 
With server-side processes abstracted into microservice APIs, surface areas for attacks are reduced. You can also leverage the domain expertise of specialist third-party services.

- <strong>Cheaper, Easier Scaling</strong> - 
When your deployment amounts to a stack of files that can be served anywhere, scaling is a matter of serving those files in more places. CDNs are perfect for this, and often include scaling in all of their plans.

- <strong>Better Developer Experience</strong> - 
Loose coupling and separation of controls allow for more targeted development and debugging, and the expanding selection of CMS options for site generators remove the need to maintain a separate stack for content and marketing.

  
