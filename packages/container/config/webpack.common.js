module.exports ={
    module : {
        rules :[
            // then inside of this rules array, we're going to define what is called a loader.
            // The goal of a loader is to tell Webpack to process some different files as we start to import them 
            // into our project. The first loader that we're going to wire up is Babel. 
            // Babel is going to be in charge of processing all of our code, from the
            // ES 2015, '16, '17, '18, '19, '20 and so on, and turn it into regular ES five code 
            // that can be easily executed inside of a typical browser. Making use of babel in any modern project
            // is exrtremly typical and very common
           { 
            test : /\.m?js$/,             //So this essentially says, that whenever we import in a file that ends with an extension of either mjs or just js, we want it to be processed by bable. That's all test does.
            exclude : /node_modules/,   //that means, do not try to run this bable thing on any file out of our node modules directory.
            use : {
                loader: 'babel-loader',
                options : {
                    presets : ['@babel/preset-react', '@babel/preset-env'],
                    plugins : ['@babel/plugin-transform-runtime']
                }
            }
        }
        ]
    }
}

// the preset of React right here, means that Babel is gonna process all the different jsx tags,
// so we add into our application. So that's a little bit of react related code. 
// Preset, right here is going to transform our code in a variety of different ways.
// So take all the kind of ES 2015, 16, 17 and so on syntax, and convert it down to ES five. 
// And then finally, plug in transform runtime, is going to add in a little bit of additional 
// code just to enable some different features for our project, inside the browser. 
// Such as, async await syntax and some other related things.