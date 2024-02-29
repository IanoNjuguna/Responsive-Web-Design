# 0.6: New note in Single page app diagram

This diagram depicts the situation where the user creates a new note using the [single-page version of the app](https://studies.cs.helsinki.fi/exampleapp/spa).

```mermaid
sequenceDiagram;

participant Browser
participant Server

activate Browser

Browser ->> Server: HTTP POST Request

Note left of Browser: 1. The browser submits the form

deactivate Browser
activate Server

Server -->> Browser: HTTP STATUS CODE 201, CREATED

Note right of Server: 2. The server successfully processed the request.
Note right of Server: 3. A new JSON object file was created (new_note_spa).
Note right of Server: 4. The server stores the new JSON object file in the Database.

deactivate Server
activate Browser

Browser ->> Server: HTTP GET REQUEST

Note left of Browser: 5. The Browser executes JS code which fetches the new JSON object file.

deactivate Browser
activate Server

Server -->> Browser: JSON Object file

Note left of Browser: 6. The Browser renders the changes made by the new JSON object file

deactivate Server


Browser -> Server: END

```
