---
title: "Migrating from WordPress to Gatsby"
date: "2019-11-09"
description: For the past four years, the blog had been running on WordPress. It was as fast, as custom, and as free of plugins as I could possibly make it, but WordPress is cumbersome, and there’s only so fast and pleasant to use you can make it.
category: Gatsby
---

[Migrating from WordPress to Gatsby](https://www.gatsbyjs.org/blog/2019-03-21-migrating-from-wordpress-to-gatsby/)

On September 24th, 2015, I wrote my first article on taniarascia.com, which was a custom, self-hosted WordPress theme. I discovered Git, I discovered WordPress, and I made 1,039 commits to the theme, in which I obsessively designed and redesigned the site.

I’ve had quite a bit of experience with WordPress. Once I learned how to create a WordPress blog, I wrote Developing a WordPress Theme from Scratch, a post that has had millions of hits, hundreds of comments, made me plenty of friends, and launched my blogging career. I also worked as a WordPress developer for two years. For the past four years, the blog had been running on WordPress. It was as fast, as custom, and as free of plugins as I could possibly make it, but WordPress is cumbersome, and there’s only so fast and pleasant to use you can make it.

After 10 days of obsessively working non-stop, I’ve finally migrated my site over to Gatsby! You may notice the site is a little faster now.

In <strong>Google PageSpeed Insights</strong>, the blog would hover around a 60-70 speed score. After converting to Gatsby, the score is 99 for mobile and 100 for desktop, passing 22 audits.

<strong>Why Gatsby?</strong>
There are a lot of static site generators to choose from. <strong>Jekyll, Hugo, Next, and Hexo</strong> are some of the big ones, and I’ve heard of and looked into some interesting up-and-coming SSGs like Eleventy as well. At first, I thought I’d just want something that outputs straight HTML, and that a heavy JavaScript app couldn’t possibly be better than simple HTML and CSS.

However, I realized that a static site generator like <strong>Gatsby</strong> utilizes the power of code/data splitting, pre-loading, pre-caching, image optimization, and all sorts of performance enhancements that would be difficult or impossible to do with straight HTML.

Since I primarily write JavaScript these days, I wanted an SSG that runs on Node.js, and if it uses React, even better. I tested out a few sites that run on Gatsby and yeah - they were fast. Blazingly fast.

<strong>A few things I really like about Gatsby</strong>    
<strong>No page reloads</strong> - this site is now a SPA (single page app), and clicking on any internal page from within the website doesn’t need to load a completely new resource    
<strong>Image optimization</strong> - all the images are automatically stripped of metadata, optimized, resized, lazy-loaded, and compressed    
<strong>Pre-fetch resources</strong> - Gatsby detects what links are available on a given page and loads that data into the cache    
<strong>Bundling and minification</strong> - code is minified, bundled, and served    
Server-side rendered, at build time - Gatsby builds optimized static assets, which can be hosted anywhere!    
<strong>Articles are saved in beautiful Markdown</strong>    

Every time I push to the repo, the site gets automatically deployed (thanks to <strong>Netlify</strong>)
Very little boilerplate code was necessary to get started with Gatsby. I just forked the <strong>Gatsby Advanced Starter</strong>, a very simple, minimalist, completely UI-free foundation after my own heart, and started working with it.

I should mention I moved my host to <strong>Netlify</strong>, which has been a great experience. I really can’t say enough positive things about them. I’ve been highly impressed with how quick and easy it is to set up and deploy my new site.

My Migration Process
I’ve been putting off migrating to a static site for months and months, because I knew it would be a huge time sink, obsession, and a lot of work. I had over 100 guides and tutorials to migrate, and in the end I was able to move everything in 10 days, so it was far from the end of the world.

If you’ve been thinking about moving your blog from WordPress to a static site but have been putting it off due to fear of how long it will take and how much work it will be, I highly recommend giving it a shot. I’ll give you the basics of what I did in case you also want to make the switch.

First, I downloaded the XML from <strong>WordPress</strong> in the Tools -> Export section.
I used the <strong>ExitWP</strong> tool to convert the XML to Markdown. This did about 50% of the work of converting the posts.    
I converted tables to Markdown with the <strong>HTML to Markdown Table Converter</strong>.
I <strong>manually</strong> indented all code blocks, converted all four-indent spaced code blocks to GitHub style fenced codeblocks, and fixed all the broken lists.
I used <strong>Prettier</strong> on all the Markdown files to try to make them consistent. 

Here is a little snippet I used to run Prettier on all the posts:    
Copy code to clipboard    
npm i -g prettier # install prettier globally    
cd content/posts  # move to the directory that contains all your posts    
<strong>prettier</strong>    
  --print-width 100    
  --no-semi    
  --single-quote    
  --jsx-single-quote    
  --trailing-comma es5    
  --arrow-parens avoid    
  --parser "markdown"  "**/*.md" # modify this based on whether your posts are in individual folders or not    

- I had to re-write all the styles now that the site wasn’t using any WordPress classes, which I did using my Sass boilerplate/CSS framework Primitive.    
- I pulled in all the images from wp-content/uploads to the images folder.    
- I used some regex to delete all WordPress thumbnails, e.g. all images that end in 150x150, 300x300 and 1024px1024px or any variation thereof, then I did a find/replace all to make sure all files were linking to ../images/file.ext instead of wp-content/uploads/file.ext.    
- I manually saved all my thumbnails and moved them to a thumbnails folder so I could reuse them easily across multiple posts.    
- I created a new night mode using React Context API as a wrapper.    
- I migrate all comments from WordPress to Disqus with the Disqus manual importer.    
You can view the source of the completed website.

From there it was just a matter of building out all the pages, learning enough <strong>GraphQL</strong> to make the proper queries, and doing a lot of small cleanup and tweaks.

<strong>Conclusion</strong>
It took a bit of work, but the <strong>taniarascia.com</strong> blog is now built with <strong>React, Node.js and Gatsby, and hosted on Netlify</strong>. I feel great that all of my posts are now safely saved in version control and markdown. It’s a relief for me to know that they’re no longer an HTML mess inside of a MySQL database, but markdown files which are easy to read, write, edit, share, and backup.

There is a good amount of prerequisite knowledge required to set up a Gatsby site - <strong>HTML, CSS, JavaScript, ES6, Node.js development environment, React, and GraphQL</strong> are the major ones. If you’re a complete beginner to all of these technologies, setting up a Gatsby blog might be a bit of a challenge. However, the Gatsby Getting Started Tutorial is a complete step-by-step guide that covers most of these topics, and is a great choice for an intermediate developer.

Good luck, and happy coding!