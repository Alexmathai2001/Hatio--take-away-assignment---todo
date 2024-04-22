# TO-DO app
This is an user-friendly To-do listing application ,where users can easily list their tasks regarding individual projects seperately by logging into your account.

## Features
1.Responsive design
    - Looks nice on both mobile and desktop screen
2.Secure Signups
    -user passwords are stored and secured using hashing technique so that even the developer cannot view the users password.
3.Login Validations
    -the inputs are validated to recieve only expected type of input
        -will check whether the user inputs valid email or not using regx
        -password must be of min 8 letters
        -password and confirm passwords matchs.
4.Used custom hooks
    -customs hooks are used to make the code more maintainable
5.Add / Edit project
    -User can add or edit projects with a project name and short description about their project
6.Convert to gist
    -convert your details of your project details including tasks and status of these tasks to a custom made template.

# Tech Stacks Used
1.React JS
2.Node JS
3.Express JS
4.TailwindCSS
5.MongoDB

# How to run this project

Clone this project with this command : 
### `git clone link`
Add and .env file inside folder named 'backend' and add following keys :
### `github access token`
make sure that access token has access to create gist
