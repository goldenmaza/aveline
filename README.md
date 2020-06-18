Project description:

The project contains two modules and one is dependent on the other to actually generate
anything during runtime.

The Frontend module is a Nodejs application that contains React components. The Backend
module is also a Nodejs application, to handle API calls from the Frontend application.

Frontend module contains/will contain:
- Nodejs
- React
- HTML5
- CSS3
- Javascript
- Babel
- Axios
- Redux
- Selenium

Backend module contains/will contain:
- Nodejs
- Javascript
- Express
- Babel
- Body-parser
- Nodemailer
- Sequelize
- Graphql
- Mysql
- Cors
- Nodemon
- Dotenv
- Helmet
- Compression

The basic flow is that the build output from the Frontend module should be placed on a server
to host the React application. This application in turn calls the Backend application via HTTP
calls to predefined middleware routes/paths that are currently only open for incoming calls.

There are currently only two endpoints. The first is the GraphQL API and the second in the
Nodemailer endpoint. The Nodemailer endpoint is used by the contact form to send an e-mail to
a specific address. The GraphQL API is used by many components to prepare the data required to
generate a website with content.

Work remaining for the Frontend module:
- Redux implementation
- SCSS implementation

Work remaining for the Backend module:
- Deploying the module to a webhosting service
- Improved Sequelize/GraphQL implementation
- Removal of the Buildtool source code
- Loading username etc from env

Note: These two modules currently only work locally as I have not been able to deploy the backend
module to a webhosting service to test it live.
