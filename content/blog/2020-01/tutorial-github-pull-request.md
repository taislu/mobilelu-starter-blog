---
title: "How to make your first pull request on GitHub"
date: "2020-01-31"
description: Pull requests are the way we contribute to group projects or open source projects.
category: Tutorial
---

[How to make your first pull request on GitHub](https://www-freecodecamp-org.cdn.ampproject.org/c/s/www.freecodecamp.org/news/how-to-make-your-first-pull-request-on-github-3/amp/)

### What is forking?
When we love someone’s repository and would like to have it in our GitHub account, we **fork** it so that we can work with it separately.

**When we fork a repository, we get an instance of that entire repository with its whole history. After forking, we can do whatever we want to do without affecting the original version.**

### What is a pull request?
**Pull requests** are the way we contribute to group projects or open source projects.

For instance, a user Harry forks a repository of ThanoshanMV and makes changes to that repository. Now Harry can make a pull request to ThanoshanMV but it’s up to ThanoshanMV to accept or decline it. It’s like “Would you please, ThanoshanMV, **pull my changes**?”

### Let’s make our first pull request!

[The beginner’s guide to Git & GitHub](https://medium.com/@mvthanoshan9/ubuntu-a-beginners-guide-to-git-github-44a2d2fda0b8)    

#### 1. Fork the repository
Fork the repository by clicking the **fork button** on the top of the page. This will create an instance of that entire repository in your account.   

#### 2. Clone the repository
Once the repository is in your account, now **clone it to your machine to work with it locally**.

To clone, click on the clone button and copy the link.

Open the terminal and run the following command. It will clone the repository locally.
```bash
$ git clone [HTTPS ADDRESS]
```

Now, we have set up a copy of the **master branch** from the main online project repository.

We need to go to that cloned directory by running this command:
```bash
$ cd [NAME OF REPOSITORY]
```

#### 3. Create a branch

It’s a good practice to **create a new branch** when working with repositories whether it’s a small project or contributing to a group's work.

Branch name should be short and it should reflect the work we’re doing.

Now **create a branch using the git checkout** command:
```bash
$ git checkout -b [Branch Name]
```

#### 4. Make changes and commit them

Make essential changes to the project and save it.

Then execute **git status** , and you’ll see the changes.

Add those changes to the branch you just created using the **git add** command:
```bash
$ git add .
```

Now commit those changes using the **git commit** command:
```bash
$ git commit -m "Adding an article to week 02 of articles of the week"
```

#### 5. Push changes to GitHub

In order to push the changes to GitHub we need to **identify the remote’s name**.
```bash
$ git remote
```

For this repository the remote’s name is “origin”.

After identifying the remote’s name we can safely push those changes to GitHub.
```bash
git push origin [Branch Name]
```

#### 6. Create pull request

Go to your repository on GitHub and you’ll see a button **“Compare & pull request”** and click it.

Please provide necessary details on what you’ve done (You can **reference issues using “#”**). Now submit the pull request. Congratulations! You've made your first pull request.  

If your pull request is accepted you’ll receive an email.

#### 7. Sync your forked master branch

**Before submitting any pull requests to the original repository you have to sync your repository to the original one.**

Even if you are not going to submit a pull request to the original repository, **it’s better to sync with the original repository as some additional features and bug fixes have been done since you forked the original repository**.

Follow these steps to **update/sync those changes to your master branch**:

1. First, check which branch you are in.
```bash
$ git branch
```

It’ll list all branches and indicates the current or active branch in green color.

2. Switch to the master branch.
```bash
$ git checkout master
```

3. Add the original repository as an upstream repository.

In order to pull the changes from the original repository into your forked version, you need to **add the original git repository as an upstream repository**.
```bash
$ git remote add upstream [HTTPS]
```
Here, \[HTTPS\] is the url that you have to copy from the owner’s repository.

4. Fetch the repository.

**Fetch all of the changes from the original repository**. Commits to the original repository will be stored in a **local branch** called **upstream/master**.
```bash
$ git fetch upstream
```

5. Merge it.

**Merge the changes from the upstream/master into your local master branch**. This will bring your fork’s master branch into sync with the upstream repository without losing your local changes.
```bash
$ git merge upstream/master
```
6. Push changes to GitHub

At this point your local branch is synced to the original repository’s master branch. If you want to update the GitHub repository, you need to push your changes.
```bash
$ git push origin master
```
NOTE: After syncing your forked master branch you can remove that remote if you want to. But you’ll need to update/sync your repository in future too. So, it’s a best practice to keep it.
```bash
$ git remote rm [Remote Name]
```
#### Delete unnecessary branch
**Branches are created for a special purpose. Once that purpose is accomplished, those branches aren’t necessary. So you can delete them**.
```bash
$ git branch -d [Branch Name]
```
You can delete the version of it in GitHub, too.
```bash
git push origin --delete [Branch Name]
```






