import React from 'react'
// import { mount } from 'marketing/MarketingApp'  //now not need to import this, because we made component named "MarketingApp", in this file we will use that component
import MarketingApp from './components/MarketingApp'  //instead of function we import component we created
// Now we've got access to the mount function inside of container and we need to make use of the mount function
// to somehow get some content on the screen. Remember, the mount function is a function
// that takes in a reference to an HTML element and then displays some content inside there. So we cannot use this mount function
// directly inside of a React component. In other words, we can't put in something like mount. That doesn't make any sense.
// This mount function is not a React component. It is a simple function that takes in a reference to an HTML element.

// console.log(mount)

export default ()=>{
    return <div>
        <h1>Hi! there</h1>
        <hr/>
        <MarketingApp/>
        </div>
}

// Remember, our container doesn't need a mount function whenever the container application is gonna be shown
// inside the browser. We always, in all scenarios, want the container to show itself immediately.
// It's only our sub-projects that need to export some kind of mount function or render themselves conditionally
// depending upon whether or not we are in development. So that's a big difference between the bootstrap.js file
// we had put together inside a marketing and the one inside of container.