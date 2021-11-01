# Task List App in React

![task-list2](https://user-images.githubusercontent.com/11150895/139749657-0034c62b-4eb1-4210-9fec-7251b8daccda.png)

Task List is a single page application built with React as part of my book [Understanding React](https://leanpub.com/understandingreact). It was build to demonstrate how to do authentication and authorization in a **secure** way.

It requires to have it running two services I have wrote: [UserAuth](https://github.com/enriquemolinari/userauth) and [TaskList](https://github.com/enriquemolinari/tasklist). Authentication is implemented using the cookie (HttpOnly, SameSite=strict, Secure) based approach and a JWT token.

The react app, and these two back-end services must be accessed through a reverse proxy to have the SameSite=strict cookie working.

The book is completely **free** for my students (if you want to read it, just write to me).

# Install and Start

- git clone https://github.com/enriquemolinari/react-tasklist.git react-tasklist
- cd react-tasklist
- npm install
- npm start

# Users

- guser/guser123
- juser/juser123
