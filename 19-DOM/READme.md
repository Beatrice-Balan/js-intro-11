# DOM

DOM (Document Object Model) is a tree-like structure that represents an HTML or XML document. It lets JavaScript access and change the content, structure, and style of a webpage while it's running.

- Connecting JS to html
- Window object
- alert
- prompt
- localStorage

## Accessing DOM elements
- getElementById()
- getElementsByClassName()
- getElenentsByTagName
- querrySelector()
- querySelectorAll()

- innerHTML: Can be used to access an element content or to set content to element
- innerHTML is a property that gets or sets the HTML content inside an element, including tags.

        element.innerHTML = "whatever" → set element
        console.log(element.innerHTML) => access whatever element

It can add or replace entire chunks of HTML inside an element.

## Create Dom Element
- document.createElement()

## DOM Events

DOM events refer to actions that occur in the browser (like a click, key press, or mouse movement) that can be captured and responded to using JavaScript. These events allow you to create interactive web pages by listening for and responding to user actions or other events that occur within the browser.

                Common Types of DOM Events:

    Mouse Events:

click: Fired when an element is clicked.

dblclick: Fired when an element is double-clicked.

mouseover: Fired when the mouse pointer enters an element.

mouseout: Fired when the mouse pointer leaves an element.


    Keyboard Events:

keydown: Fired when a key is pressed down.

keyup: Fired when a key is released.

keypress: Fired when a key is pressed (older, less common now).


    Form Events:

submit: Fired when a form is submitted.

input: Fired when the value of an input field changes.

change: Fired when a form element’s value changes and loses focus.


    Window Events:

load: Fired when a page has finished loading.

resize: Fired when the window is resized.

scroll: Fired when the user scrolls the page.

    
    Focus Events:

focus: Fired when an element gains focus.

blur: Fired when an element loses focus.