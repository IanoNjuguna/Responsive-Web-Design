# HTTP POST

This is what happens when a user creates a new note on [the page](https://studies.cs.helsinki.fi/exampleapp/notes) by writing something into the text field and clicking the save button.

```mermaid
sequenceDiagram;
participant Browser
participant Server

activate Browser

Browser ->> Server: HTTP POST request

Note left of Browser: 1. Sends user input to the server.

deactivate Browser
activate Server

Server -->> Browser: Responds with an HTTP POST STATUS CODE 302 (URL redirect)


Note right of Server: 2. Asks the browser to do a new HTTP GET request to the new address.
Note right of Server: 3. The new address is defined in the header's Location.

deactivate Server
activate Browser

Browser ->> Server: Reloads the Notes page and responds with an HTTP GET STATUS CODE 200 (OK)
Note left of Browser: 4. Fetches the HTML code from the server.

Note left of Browser: 5. The HTML code causes the browser to also fetch the CSS and JS files.

Note left of Browser: 6. The browser executes the JavaScript code.

Note left of Browser: 7. JS code makes a GET request to the address and returns JSON data.

Note left of Browser: 8. The browser executes an event handler to renders the notes.

deactivate Browser
Server --> Browser: END

```
