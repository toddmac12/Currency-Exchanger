## Currency Exchanger
#### _{Brief description of application}_
This application determines the currency exchange rate.
#### By _**{List of contributors}**_
Anthony McRae
## Technologies Used

1. JavaScript
2. Jest
3. Node Package Manager
4. JQuery
5. CSS
6. Webpack
7. HTML

## Description
 A user is able to type in an amount (in U.S. dollars) and then choose which currency it should be converted to (such as francs, marks, rupees, and so on). To determine the most recent exchange rate, this application will make an API call to ExchangeRate-API.

## Setup/Installation Requirements
#Creating API Keys
You will need to make an account and get an API key. The "Free Plan" allows for 1500 API calls per month.

* Visit the ExchangeRate-API site https://www.exchangerate-api.com/. Input your email address and click the "Get Free Key" button.
* You'll be prompted to create an account with your email, first name and a password. Agree to the terms of use and click "Get Started!"
* At this point, you'll be able to access a dashboard that includes your API key as well as your remaining API calls for the month.

# Install Application
*  Open the terminal on your local machine_
*  If [Node.js](https://nodejs.org/en/) and [Node Package Manager (npm)](https://www.npmjs.com/) are not installed on your local device, follow the instructions [here](https://www.learnhowtoprogram.com/intermediate-javascript/getting-started-with-javascript/installing-node-js)_
* Navigate to the directory inside of which you wish to house this project_
* Create an .env file to place your token in the top level of your directory. API key variable API_KEY-("tokenkey number") in .env. Keep spelling and capitalization identical.
* Include .env in .gitignore. Make sure to commit your .gitignore at this point, before moving on!
* Clone this project with the following command  `$ git clone <https://github.com/colchapm/project_name>`_
* Navigate to the top level of the repository with the command `$ cd project_name`_
* Recreate project environment and install required dependencies with terminal command `$ npm install`_
* Create production environment with terminal command `$ npm run build`_
* Open project in a development server in the browswer of your choice with the command `$ npm run start`_
* Lint code with the command `$ npm run lint`_
* Run tests in Jest with the command `$ npm test`_



## Known Bugs

none at this time

## License

MIT

## Contact Information

< anthonytoddmacmcrae@gmail.com