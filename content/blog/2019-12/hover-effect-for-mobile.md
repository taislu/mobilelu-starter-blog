---
title: "The Hover Effect for Mobile Buttons"
date: "2019-12-30"
description: Hover effects inform users what they can interact with by providing visual feedback on buttons. But there’s a problem — hover effects are for desktop apps, not mobile apps.
category: CSS
---

[The Hover Effect for Mobile Buttons](https://uxmovement.com/mobile/the-hover-effect-for-mobile-buttons/)

A typical interface screen has many elements on it. Hover effects inform users what they can interact with by providing **visual feedback on buttons**. But there’s a problem — hover effects are for desktop apps, not mobile apps.

There are no mouse devices on mobile, so users don’t have the luxury of using hover effects. **Using a hover effect on mobile apps causes buttons to stay stuck in the hovered state when tapped**. This stickiness not only confuses users, but it frustrates them when they’re forced to double-tap buttons to initiate an action.

Removing the sticky hover effect isn’t enough. **Mobile users need visual feedback** because mistapping buttons is a common problem. The target sizes of mobile buttons are smaller than desktop ones and more challenging to hit. Not only that but sometimes their finger will hit a target with different surface area pressure that won’t always trigger the action.

The hover effect for mobile buttons is a [ripple effect](https://codepen.io/finnhvman/post/pure-css-ripple-with-minimal-effort). **A ripple effect provides the visual feedback users need when they tap a button**. Users see a ripple animation on the button that assures them their finger hit the target accurately. If they don’t see a ripple effect, they know they mistapped the button. The visual feedback gives them immediate confirmation of an accurate tap so they don’t end up waiting and wondering why there’s no response if they mistap.

So, I implemented the [ripple effect](https://codepen.io/finnhvman/post/pure-css-ripple-with-minimal-effort) on [my site](https://www.taislu.com/posts-by-category) to provide the visual feedback for mobile buttons.