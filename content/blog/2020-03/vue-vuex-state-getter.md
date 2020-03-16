---
title: "Vuex State and Getters"
date: "2020-03-16"
description: How we can access the State from our Vuex store from within our components, both directly and with the help of Getters.
category: Vue
---

[Vuex State and Getters](https://www.vuemastery.com/courses/mastering-vuex/vuex-state-getters)

In this tutorial, we’ll look at how we can access the State from our **Vuex store** from within our components, both **directly** and with the help of **Getters**.

### Accessing State

If we take a look at our **main.js** file, we see we’re importing our Vuex store file, and providing it to our **root Vue instance**. This was set up for us because we selected Vuex when we created our project with the Vue CLI.

**main.js**
```
import store from ‘./store’

new Vue({
router,
store, // injected into all components
render: h => h(App)
}).$mount(‘#app’)
```
This makes the store **globally accessible** throughout our app by injecting it into every component. This way, any component can access the store and the properties on it (such as **State, Actions, Mutations and Getters**) by using **$store**.

**store.js**
```
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Adam Jahr' }
  },
  mutations: {},
  actions: {},
})
```

**EventCreate.vue**
```vue
<template>
  <div>
    <h3>Create Event, {{ $store.state.user.id }}</h3>
    <p>By {{ userName }}</p>
  </div>
</template>
<script>
export default {
  computed: {
    userName() {
      return this.$store.state.user.name
    }
  }
}
</script>
```
if we needed to use it **in a method** of our component, we could simply say **this.userName**

### The mapState Helper

If we need to access different parts of our State from the same component, it can get verbose and repetitive to have multiple computed properties each returning this.$store.state.something. To simplify things, we can use the **mapState helper**, which generates computed properties for us.

Let’s first add some more State to our **Vuex Store** so we can see this in action. We’ll add an array of event categories:
```
state: {
  user: { id: 'abc123', name: 'Adam Jahr' },
  categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community']
}
```
Now, in **EventCreate.vue**, we can import mapState
```
    import { mapState } from 'vuex'
```
Then use it to map our State to a computed property that can retrieve our user’s name, and our categories.
```
computed: mapState({
  userName: state => state.user.name,
  categories: state => state.categories
})
```
Notice how we’re using an arrow function that takes in state and returns the property of the state we want, **state.user.name** and **state.categories**.

If we’re wanting to access the top-level State (not using dot notation), there’s an even simpler way to write this, like so:
```
computed: mapState({
  userName: state => state.user.name,
  categories: 'categories' // <-- simplified syntax for top-level State
})
```
Notice all we need to do is use the State’s **string value** 'categories'. This is equivalent to 
```
state => state.categories
```
We could simplify the mapState syntax even more by passing **an array of strings of the State values** we want to map to computed properties, like so:
```
computed: mapState(['categories', 'user'])
```
Of course, now in our template we’d just need to use dot notation to access our user’s name.
```html
<h1>Create an Event, {{ user.name }}</h1>
```
### Object Spread Operator

As you probably noticed, **mapState returns an object of computed properties**. But it’s currently preventing us from adding additional, local computed properties that aren’t mapped to our Store’s State.

To do that, we can use the object spread operator, which allows us to mix in additional computed properties here.
```
computed: {
  localComputed() {
    return something
  },
  ...mapState(['categories', 'user']) // <-- using object spread operator
}
```
### Getters

While we can access the Store’s State directly, sometimes we want to access **derived state**. In other words, we might want to process the state in some way when we access it.

For example, instead of accessing our State’s categories, we might want to know how many categories there are. In other words, we might want to know the categories array’s length.

From within our component, we could say:
```
    this.$store.state.categories.length
```
But what if multiple components need to use this same value? By creating a Vuex Getter, we can avoid unnecessary code duplication. Also, since **Getters are cached**, this is a bit more performant of an option, too.

Let’s add a Getter to our Store.

**store.js**
```
getters: {
  catLength: state => {
    return state.categories.length
  }
}
```
As you can see, **Getters** are a function that takes in the state as an argument, and allows us to return processed or filtered state.

### Using our Getter 

Now let’s use our catLength Getter in our EventCreate component. Just like accessing State, we’ll put it in a computed property.
```
computed: {
  catLength() {
    return this.$store.getters.catLength
  }
}
```
If at any point the length of our categories State changes, our catLength Getter will recalculate and our computed property will update accordingly.

### Passing getters to Getters 

If we needed to get state that we want to process along with another Getter, we can **pass in getters as the second argument** to a Getter. This allows us to access another Getter from within the Getter we’re creating. I know, that sounds a bit confusing.

But for a simple example, let’s say we have an array of todos in our State.
```
todos: [
  { id: 1, text: '...', done: true },
  { id: 2, text: '...', done: false },
  { id: 3, text: '...', done: true },
  { id: 4, text: '...', done: false }
]
```
We could have a Getter that gets an array of the todos that are labeled done.
```
doneTodos: (state) => {
  return state.todos.filter(todo => todo.done)
}
```
And we can use this Getter **inside another Getter** if we want to find out how many remaining todos there are to complete.
```
activeTodosCount: (state, getters) => {
  return state.todos.length - getters.doneTodos.length
}
```
Now we are able to return the difference between the number of todos that are done from the total number of todos.

You may be wondering why we wouldn’t just write activeTodos like this instead.
```
activeTodosCount: (state) => {
  return state.todos.filter(todo => !todo.done).length
}
```
And we could. This example was just to demonstrate the power of passing in getters to a Getter.

### Dynamic Getters

You might be wondering if we can use **dynamic Getters**. In other words, can we retrieve some state based upon a **parameter**. And the answer is yes, we can achieve that by returning a function.

For example, if we had an array of events, we could retrieve an event by id like so:
```
getEventById: (state) => (id) => {
  return state.events.find(event => event.id === id)
}
```
Then in our component, we’d write:
```
computed: {
  getEvent() {
    return this.$store.getters.getEventById
  }
}
```
And in our template, we could pass in an argument.
```html
<p>{{ getEvent(1) }}</p>
```
Note that dynamic Getters like this will run each time you call them, and the result is **not cached**.

### The mapGetters Helper

Just like we saw with accessing State, we can map Getters to computed properties on our component with the **mapGetters** helper.

First we’d just need to import it:
```
import { mapGetters } from 'vuex'
```
Then we can use it like so:
```
computed: mapGetters([
  'categoriesLength',
  'getEventById'
])
```
Now we have an array of computed properties in our component that are mapped to our Getters.

If we want to **rename** these Getters, we can do so in an object:
```
computed: mapGetters({
  catCount: 'categoriesLength',
  getEvent: 'getEventById'
})
```
Here, **this.catCount** is mapped to **this.$store.getters.categoriesLength** and **this.getEvent** is mapped to **this.$store.getters.getEventById**.

Object Spread Operator And as you might imagine, if you want to mix these Getters in with local computed properties, you can use the object spread operator here, too.
```
computed: {
  localComputed() { return something }
  ...mapGetters({
    catCount: 'categoriesLength',
    getEvent: 'getEventById'
  })
}
```
**store.js**
```
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Adam Jahr' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    events: [
      { id: 1, title: '...', organizer: '...' },
      { id: 2, title: '...', organizer: '...' },
      { id: 3, title: '...', organizer: '...' },
      { id: 4, title: '...', organizer: '...' }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
```
**EventCreate.vue**
```vue
<template>
  <div>
    <h3>Create Event, {{ $store.state.user.id }}</h3>
    <p>By {{ user.name }}</p>
    <p>{{ getEventById(2) }}</p>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getEventById']),
    ...mapState(['user', 'categories'])
  }
  /*
  computed: mapState(['categories', 'user']) // Mapping to store state objects
  computed: mapState({
      userName: state => state.user.name,
      categories: 'categories' // <-- simplified syntax for top-level State
  })
  computed: mapState({
    userName: state => state.user.name,
    categories: state => state.categories
  })
  computed: {
    userName() {
      return this.$store.state.user.name
    }
  }
  */
}
</script>
```