---
title: "How to build and deploy websites using Netlify"
date: "2020-01-06"
description: Netlify helps developers quickly roll out static websites. In this in-depth Netlify course for beginners, you will learn how to use the service for everything needed in modern web development, from local setup to global deployment. 
category: Netlify
---

<iframe width="100%" src="https://www.youtube.com/embed/mT5siI19gtc" frameborder="0" allowfullscreen></iframe>

Netlify helps developers quickly roll out static websites. In this in-depth Netlify course for beginners, you will learn how to use the service for everything needed in modern web development, from local setup to global deployment. This video is the perfect place to start for anyone that wants to learn how to use Netlify.

⭐️ Course Contents ⭐️   
⌨️ (00:03:42) Part 1: 🗺️ Netlify Edge   
⌨️ (00:37:15) Part 2: ⚒️ Netlify Build   
⌨️ (01:02:02) Part 3: 👩🏼‍💻 Netlify Dev   
⌨️ (01:24:17) Part 4: 🗒️ Netlify Forms    
⌨️ (01:55:21) Part 5: 🆔 Netlify Identity    
⌨️ (02:34:07) Part 6: ✍️ NetlifyCMS    
⌨️ (02:59:53) Part 7: ➕ Netlify Addons: Everything Else!    
⌨️ (03:18:18) Part 8: 🍻 Netlify API     
⌨️ (03:25:39) Part 9: ❓ Learn More     

[Detailed Notes and References](https://gist.github.com/sw-yx/167250684bb3c47edc40ad97b63d1cfb)

**Deploy and Scale is much easier with JAMStack approach.**

#### Part 1 Notes
```bash
npm install -g netlify-cli
netlify status
netlify login
netlify deploy // or ntl deploy
netlify deploy --prod
```
[netlify.toml file based configuration](https://docs.netlify.com/configure-builds/file-based-configuration/) : 
In addition to using the **Netlify UI** to configure build settings, deploy settings, and environment variables, you can also configure these settings in a **netlify.toml** file stored in the **root** of your site repository.

.netlify : stores the siteId linked to this folder. Should be included in .gitignore file. 

```bash
git init
git add .
git commit -m "messages"
```
**Create a new Repository on Github & Copy the RepoURL**

```bash
git remote add origin RepoURL
git remote -v
git push origin master
```

Build hooks can be used to [set up cron jobs](https://community.netlify.com/t/scheduling-builds-and-deploys-with-netlify/2563) (ex: Zapier) to kick off the build & deployment.

```bash
git checkout -b newFeature
git add .
git commit -m "messages"
git push origin newFeature
```
Open a pull request on Github -> Create pull request -> Merge pull request

[git cheatsheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet/)

#### Part 2 Notes

netlify.toml sets the build & deploy settings.

[Build troubleshooting tips](https://docs.netlify.com/configure-builds/troubleshooting-tips/)

[Netlify community](https://community.netlify.com/)

Environment Variables

#### Part 3 Notes
```bash
npm install netlify-cli -g
```

**Start Netlify dev**
```bash
netlify dev
```
localhost:8888   
1:12:00 netlify functions:create  
#### Locally Testing Functions with netlify functions:invoke
1:17:00 [netlify functions:invoke](https://community.netlify.com/t/new-netlify-functions-invoke-command-in-cli/2270)  

**netlify functions:invoke** allows you to **locally test functions** going above and beyond a simple GET request in browser. (we only model POSTs now but could easily expand from here).

If you have **Netlify Dev** running your functions, you can then test sending payloads of data, or authentication payloads:

***with prompting***  
netlify functions:invoke # we will prompt you at each step  
**netlify functions:invoke myfunction** # invoke a specific function  
netlify functions:invoke --name myfunction # invoke a specific function  

***no prompting (good for CI)***  
netlify functions:invoke --name myfunction --identity # invoke a specific function with netlify identity headers  
**netlify functions:invoke --name myfunction --no-identity** # invoke a specific function without netlify identity headers  

***sending payloads***  
netlify functions:invoke myfunction --payload '{"foo": 1}'   
**netlify functions:invoke myfunction --querystring "foo=1"**    
netlify functions:invoke myfunction --payload "./pathTo.json"    

**netlify-lambda** helps to install dependencies and build from source to distribution files.

