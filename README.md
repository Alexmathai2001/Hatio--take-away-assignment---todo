# To-do app

This is an user-friendly To-do listing application ,where users can easily list their tasks regarding individual projects seperately by logging into your account.


## Features

- Responsive design 
    - Looks nice on both mobile and desktop screen
- Secure Signups
    - User passwords are stored and secured using hashing technique so that even the developer cannot view the users password.
- Login Validations
    -the inputs are validated to recieve only expected type of input.
    - the inputs are validated to recieve only expected type of input
        - password must be of min 8 letters
        - will check whether the user inputs valid email or not using regx
        - password and confirm passwords matchs.
- Used custom hooks
    - customs hooks are used to make the code more maintainable
- Add / Edit Project
    - User can add or edit projects with a project name and short description about their project.
- Convert to gist
    - convert your details of your project details including tasks and status of these tasks to a custom made template.


## Deployment

To deploy this project run

```bash
  git clone https://github.com/Alexmathai2001/Hatio--take-away-assignment---todo.git
```

Enter into project folder.

Create .env file inside folder named "/backend".

Create a Github access token with permission for creating gist.

Add token to .env file as shown 

```bash
GITHUB_ACCESS_TOKEN = '#your_access_token_here'
```

Install backend dependencies using 
```bash
cd backend/
npm i 
```
Run backend using 
```bash
npm run start
```
After this open new terminal and run these commands
```bash
cd frontend/
npm i
npm start
```
App will get opened in your default browser.


## Screenshots

![App Screenshot](https://drive.google.com/file/d/14UGQZFU1GUkbLB1WoasO8s7I6qZG7C0u/view?usp=sharing)


## Tech Stack

**Client:** React, TailwindCSS

**Server:** Node, Express

**Database:** MongoDB


