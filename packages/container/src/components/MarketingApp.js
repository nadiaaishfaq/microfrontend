import { mount } from 'marketing/MarketingApp'
import React, { useRef, useEffect } from 'react'

export default () =>{
    const ref = useRef(null)   //to create a reference to an HTML element. This is gonna be the element that we're gonna 
                               // try to render our mount or our MarketingApplication into.

    useEffect(()=>{
        mount(ref.current)  //We are passing that into the mount function. Mount is gonna take it,
                            // it's gonna try to create an instance of our MarketingApp and render it into that div.
    })

    return <div ref={ref}/>
}

// So all this code right here is doing is showing a div and we are getting a reference to the HTML element( const ref = useRef(null))
// that is being displayed on the screen. Now we need to take this reference to that element
// and provide it to the mount function, but when we do so, we need to make sure that we only try to call the
//  mount function one time when this React component first is displayed on the screen.
// So for that we're gonna make use of the 'useEffect' hook





// Now the good thing about this approach right here is that it is pretty much fully reusable.
// We can use this exact same approach with just about any other framework
// that we ever use inside of a child application as long as that framework can render itself
// or render its app into some arbitrary HTML element. So you should probably be able to use this kind of pattern,
// with say, an Angular app or vue. And we are going to use this with vue on this project
// and of course you can use it with React as well and probably many other frameworks.
// So once again, even if we start to change our MarketingApp and have it used some totally different framework
// this approach inside of our container should not need to change in any serious way.