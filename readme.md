## Server Side Rendering (SSR)

the idea is to render the htm in the server first (run React in our server before sending the response to the browser and returning the rendered html to the browser).

### A shallow Algorithm for doing SSR

- render your component to an html and respond with it as a String
- build your client bundle (your React application js files)
- make your initial html you responded with to send a request again and download your **_client bundle.js_**
  now you have the React application in the browser and you repsonded with the first response
- hydrate your first html you responded with (add the javascript code required for it to work)
  hydration means attaching your event listeners and all js stuff to bring life to them (to make them dynamic)

### Problems will we face.

- booting up the React Application in the server
- building the React bundle
