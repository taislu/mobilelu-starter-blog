---
title: "What’s Running on Port 8000? (And how to stop it)"
date: "2019-12-17"
description: If everything in Linux is a file, there has to be more to it than just files on your hard drive. This tutorial will show you how to use lsof to see all the other devices and processes that are being handled as files.
category: Linux
---

[What’s Running on Port 8000? (And how to stop it)](https://medium.com/@valgaze/utility-post-whats-running-on-port-8000-and-how-to-stop-it-2ed771fbb422)

### Finding out what’s running on port 8000

```bash
$ lsof -i TCP:8000 | grep LISTEN
```

The **lsof** command lists “**open files**” [hence the name] and the -i flag shows network connections. We pass TCP:8000 and then grep for records that have LISTEN on them (ie **processes** listening/ready on 8000)

```bash
Tais-MBP:~ tailu$ lsof -i TCP:8000 | grep LISTEN
node      97749 tailu   44u  IPv4 0x87d9634a5bd15ff9      0t0  TCP localhost:irdmi (LISTEN)
```

We are most interested in the number in second column, the PID, because we can use that to kill the process.

```bash
$ kill -9 97749
```

As a somewhat clunky single-banger you can even run this (swap out $PORTNUM with your target port):

```bash
kill -9 $(lsof -i TCP:$PORTNUM | grep LISTEN | awk '{print $2}')
```

[How to Use the Linux lsof Command](https://www.howtogeek.com/426031/how-to-use-the-linux-lsof-command/)

To see the processes that have opened kern.log file

```bash
sudo lsof /var/log/kern.log
```

To see all the files that are open in the /var/log/ directory

```bash
sudo lsof +D /var/log/
```

To see the files that have been opened by a particular process, use the -c (command) option.

```bash
sudo lsof -c ssh -c init
```

To see the files that have been opened by a user

```bash
sudo lsof -u mary
```

To exclude the files that have been opened by a user, use the ^  operator

```bash
sudo lsof +D /home -u ^mary
```

List FIles Opened by a Process

```bash
sudo lsof - p 4610
```

Listing Process IDs That Have Opened a FIle

```bash
sudo lsof -t /usr/share/mime/mime.cache
```

