import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//Mount function to start up the app
const mount = (el) => {
    ReactDOM.render(<App/>, el)
}
//If we are in development mode and in isolation 
//call the mount function immediately
if(process.env.NODE_ENV === "development"){
    const devRoot = document.querySelector('#_marketing-dev-root')

    if(devRoot){
        mount(devRoot)
    }
}
// we are running through container
// and we should export the mount function (so that the container can decide where to mount our marketing app)
export { mount };