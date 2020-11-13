import * as Presenta from '@presenta/lib';

console.log("i am loaded")

const myPresentation = new Presenta('#app', {
  transition: "fadein",
  colors: "adele",
    scenes: [
      {
      blocks:[{
        type: 'text',
        text: '<h1>Welcome to PRESENTA</h1>',
      }]
    },{
      blocks:[{
        type: 'text',
        text: `
          <h1>Presenta has nifty themes</h1>
          <p>Cool, huh?</p>
        `,
      }]
    },{
      blocks:[{
        type: 'image',
        title: `
          <h1>Adele theme</h1>
          <p>Presenta can also have images, because it is cool.</p>
        `,
        url: "https://images.unsplash.com/photo-1605127605051-126cba2a73d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      }]
    },
  ],
    controllers:{
      keyboard: true,
      arrows: true
    }
})

document.createElement("button")
