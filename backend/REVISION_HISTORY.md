@aveline/backend - revision history



f1f4ff5 - [Backend] Restarting Node configurations - Jan 28, 2025

In this commit we have cleaned out the configurations from the 'package.json' file, and now include a
revision history to give a little more details about the respective commits.

v.2.1.0



4adb93f - [Aveline] Dependency version bumping - Jan 22, 2025

In this commit we are replacing legacy code by bumping dependencies to the latest versions,
to work on a newer implementation for the '@aveline/backend' project.

v.2.0.0



99abc7d - [Aveline] Sitemap attribute added for Content - Mar 14, 2021

In this commit we have introduced the 'sitemap' attribute (+ resolver) to the 'Content' schema definitions.

v.1.82.0



232d679 - [Aveline] Removal of Sequelize URL from ENV - Feb 14, 2021

In this commit we have removed the 'Sequelize URL' typo/row altogether from the example file.

v.1.81.0



ad3f487 - [Aveline] Updating the README files after certain changes - Jan 24, 2021

In this commit we have added some possible testing frameworks, to be used in this project, to the README files.

v.1.80.0



751c256 - [Aveline] Update of .gitignore to include package-lock.json file - Jan 4, 2021

In this commit we have added so that the 'package-lock.json' files, and the 'public' directory, will be ignored.

v.1.79.0



45c4262 - [Aveline] Removal of package-lock.json files - Jan 4, 2021

In this commit we have removed the 'package-lock.json' files.

v.1.78.0



7901ccc - [Aveline] Updating the README files after certain changes - Dec 27, 2020

In this commit we have removed the completed tasks, 'work remaining' section, under the README files.

v.1.77.0



f23ad9c - [Aveline] Added parseBool helper function - Dec 27, 2020

In this commit we have added the 'parseBool' helper function, and fixed a typo.

v.1.76.0



1c034f2 - [Aveline] Adding logging to the mail API - Dec 25, 2020

In this commit we have increased logging of the mailer API to include the entire e-mail being prepared.

v.1.75.0



c6b4ab3 - [Aveline] Development/Production setup for the backend - Dec 25, 2020

In this commit we have added the loading of environment variables depending on the environment it is currently
running on, as well as making logging behave differently depending on if it is 'dev' or 'prod'.

v.1.74.0



f7b8cdf - [Aveline] Example .env files & gitignore updates - Dec 25, 2020

In this commit we have added the 'sample.env' files and update the gitignore files to hide 'dev' and 'prod'
respectively.

v.1.73.0



19161d1 - [Aveline] Removal of proxy from package.json - Dec 25, 2020

In this commit we have removed the 'proxy' attribute from the 'package.json' file.

v.1.72.0



9e558bf - [Aveline] Removal of configuration file - Dec 25, 2020

In this commit we have removed the configuration file holding the different environment variables for
each environment.

v.1.71.0



c293bb6 - [Aveline] Schema refactoring of output names - Nov 16, 2020

In this commit we have updated several of the field variables to match what they are (output only).

v.1.70.0



ea100e1 - [Aveline] Schema refactoring of input names - Nov 16, 2020

In this commit we have updated several of the field variables to match what they are (input only).

v.1.69.0



a4795b8 - [Aveline] Schema refactoring of field names - Nov 16, 2020

In this commit we have updated several of the field variables to match what they are (input and output).

v.1.68.0



d02beb0 - [Aveline] Removal of unused GraphQL queries - Nov 16, 2020

In this commit we have removed some unused GraphQL queries and files.

v.1.67.0



a73a312 - [Aveline] Adding async/await to the utility - Nov 9, 2020

In this commit we have added async/await to the creation of directories as well as increasing the timeout to 2s.

v.1.66.0



641bbe7 - [Aveline] Testing of GraphQL API endpoint - Nov 8, 2020

In this commit we have added the Jest verifications for the possible API calls that the project uses.

v.1.65.0



7c64b34 - [Aveline] Minor API endpoint changes - Nov 8, 2020

In this commit we have changed the API declarations, to the environment variables, from having it hardcoded
as well as added some missing semicolon.

v.1.64.0



2eef814 - [Aveline] Minor changes made to the package.json files - Nov 8, 2020

In this commit we have made changes to the 'package.json' file which includes description, new dependencies, and more.

v.1.63.0



6bc116a - [Aveline] MIT license has been converted to ICS - Nov 8, 2020

In this commit we have replaced the MIT license for the ICS license.

v.1.62.0



fd9b82d - [Aveline] Testing prepareKeys & prepareWhere functions - Nov 7, 2020

In this commit we have added the Jest verifications for the 'prepareKeys' and 'prepareWhere' functions.

v.1.61.0



ca452e7 - [Aveline] Added possible arguments to be loaded from env file - Nov 7, 2020

In this commit we have refactored the 'prepareWhere' function to load 'ARGS_TYPES' from the environment variables.

v.1.60.0



ebd1525 - [Aveline] Added missing semicolon and added a note to an issue for testing - Nov 7, 2020

In this commit we have only made minor fixes.

v.1.59.1



7a6fa7a - [Aveline] Supertest/core refactoring of app - Nov 7, 2020

In this commit we have moved the Cluster implementation to the Core file.

v.1.59.0



f550266 - [Aveline] Project configurations made - Nov 7, 2020

In this commit we have added the Jest configurations.

v.1.58.0



e3d6b4f - [Aveline] Updating the README files after certain changes - Nov 1, 2020

In this commit we have made minor update to the README files by adding 'Jest' to the description.

v.1.57.0



cbf7bbc - [Aveline] Refactoring of Dataloader source code - Nov 1, 2020

In this commit we have refactored the DataLoader implementation to make the helper functions easier to read, and
decrease the amount of duplication of code.

v.1.56.0



a2a8715 - [Aveline] Fixed typo in logging output - Oct 31, 2020

In this commit we have fixed a typo regarding the logging output of the environment variable
called 'SERVER_AUTOSTART', if it is set to 'FALSE'.

v.1.55.0



495a18f - [Aveline] Updating the README files after certain changes - Oct 31, 2020

In this commit we have made minor update to the README files by adding 'Cluster / Multithreading' to the description.

v.1.54.0



32cd6d1 - [Aveline] Cluster refactoring to store logs under process ID - Oct 31, 2020

In this commit we have updated the Cluster implementation, by adding an 'exit' algorithm for each cluster, and
updating the logging with the process ID.

v.1.53.0



53abc17 - [Aveline] Cluster implementation - Oct 30, 2020

In this commit we have introduced the Cluster implementation to make the backend servers run extra processes
during higher traffic load.

v.1.52.0



38f4ed0 - [Aveline] Import cleanup of schema config - Oct 30, 2020

In this commit we have removed 'dotenv' from the config file.

v.1.51.0



d440768 - [Aveline] Added Helmet and Compression to server - Oct 22, 2020

In this commit we have re-introduced the use of the 'Helmet' and the 'Compression' functionality to the implementation.

v.1.50.0



f6f6d59 - [Aveline] Refactoring of LoggerUtil and StreamUtil - Oct 22, 2020

In this commit we have made small changes to the Logging utilities.

v.1.49.0



442f453 - [Aveline] Updating the README files after certain changes - Oct 21, 2020

In this commit we have made minor updates to the README files regarding 'work remaining' and adding 'Lodash',
'EventEmitter', and 'Streams' to the description.

v.1.48.0



8a3ea03 - [Aveline] Updated gitignore and dependency updates - Oct 21, 2020

In this commit we have added the 'logging' directory to be ignored, and we include the 'dataloader' and
the 'lodash' dependencies.

v.1.47.0



78d4a54 - [Aveline] Added Box parameter to the Schema definitions - Oct 21, 2020

In this commit we have added the 'box' attribute to the 'Contact' and the 'Office' definitions.

v.1.46.0



9fac1d5 - [Aveline] Added logging to GraphQL and Sequelize configuration files - Oct 21, 2020

In this commit we have added logging to the GraphQL and Sequelize configuration files.

v.1.45.0



0309c6b - [Aveline] Adding logging to Dataloader functions - Oct 21, 2020

In this commit we have added logging to the DataLoader functions.

v.1.44.0



c67f3d1 - [Aveline] Refactoring of API endpoints to separate files - Oct 21, 2020

In this commit we have added the API implementation to new files for a better design and introducing the Logger utility.

v.1.43.0



899c06b - [Aveline] Refactoring of API endpoints and adding use of Logger utility - Oct 21, 2020

In this commit we have removed the API implementation for a better design and introducing the Logger utility.

v.1.42.0



8a025b0 - [Aveline] Implementation of a Logger (Stream and EventEmitter) - Oct 21, 2020

In this commit we have introduced a custom Logger implementation to the project with the 'LoggerUtil' and
the 'StreamUtil' files.

v.1.41.0



3293d9a - [Aveline] DataLoader implementation - Oct 17, 2020

In this commit we have replaced the legacy resolvers with a DataLoader implementation for all resolvers.

v.1.40.0



1d434db - [Aveline] Updating the README files after certain changes - Oct 16, 2020

In this commit we have made minor updates to the README files regarding 'work remaining' and adding 'DataLoader'
to the description.

v.1.39.0



4057e01 - [Aveline] Refactoring of associations - Oct 13, 2020

In this commit we have renamed Sequelize table definitions from seq<Table> to <table>Table format.

v.1.38.0



573f01c - [Aveline] Renaming of definitions files (table) - Oct 13, 2020

In this commit we have renamed Sequelize table definitions from seq<Table> to <table>Table format.

v.1.37.0



167af5f - [Aveline] Express refactoring (db under context) - Oct 13, 2020

In this commit we have added the 'db' to Graphql context to make it available throughout resolvers.

v.1.36.0



a60bcd2 - [Aveline] Refactoring of schema files (relocation) - Oct 13, 2020

In this commit we have moved several of Sequelize definitions to new directories, or renaming current ones.

v.1.35.0



ce0dec1 - [Aveline] Updating the README files after certain changes - Oct 12, 2020

In this commit we have made minor updates to the README files regarding 'work remaining'.

v.1.34.0



785a9db - [Aveline] Dependency updates - Oct 12, 2020

In this commit we have made one dependency update.

v.1.33.0



921d980 - [Aveline] Minor changes - Oct 12, 2020

In this commit we made some minor changes such as fixing typos, correcting a Regex expression, adding
'h5' to 'allowedLevels', as well as adding some comments.

v.1.32.0



3bbcdd5 - [Aveline] Nesting queries implementations for the back-end (contact) - Oct 12, 2020

In this commit we have updated the resolver for Contact and Office, so we now determine the 'hidden' attribute
through the queries. We created the InputOffice's GraphQLObjectType. Finally, some minor updates like renaming
'content' to 'paragraphs', and 'multimedia' to 'collage' was performed.

v.1.31.0



b6d8918 - [Aveline] Nesting queries implementations for the back-end (common) - Oct 12, 2020

In this commit we have added Sequelize schema relationships between 'Page' & 'Multimedia', 'Multimedia' & 'Page',
and introduced nesting queries for each. We also updated the resolver for 'Page', 'Content', 'SubContent', and
'SubSubContent', so now we should determine the 'hidden' attribute through the queries. We created the
InputOffice's GraphQLObjectType. Finally, some minor updates like renaming 'content' to 'paragraphs', and
'multimedia' to 'collage', as well as some minor typos have been corrected.

v.1.30.0



26b571a - [Aveline] Refactoring of Sequelize queries (to plural) and minor changes - Jul 25, 2020

In this commit we have included some input types for the nesting of paragraph hierarchy implementation, as well as some
cleanup of minor typos and comments.

v.1.29.1



cfc6589 - [Aveline] Sequelize association implemented for Page -> Content (+ subs) queries - Jul 25, 2020

In this commit we have introduced the paragraph hierarchy, meaning that we can have associated paragraphs that belong
together and basically creating a nesting heading/paragraph solution for the entire website.

v.1.29.0



0291e7f - [Aveline] Minor changes - Jul 25, 2020

In this commit we have made several smaller changes like removal of comments/logging, reordering of imports, model
definition updates for Contact, and resolver for Social.

v.1.28.0



9adc275 - [Aveline] Minor changes - Jul 23, 2020

In this commit we have made several smaller changes like updating directory path, typo, CSS, and indentations.

v.1.27.0



4f03153 - [Aveline] Sequelize association implemented for Office -> Social && Contact -> Social queries - Jul 23, 2020

In this commit we have added Sequelize schema relationships between 'Office' and 'Social', 'Contact' and
'Social'. As well as updating the schema definitions accordingly.

v.1.26.0



5c47047 - [Aveline] Removal of unnecessary commas in schema definition - Jul 23, 2020

In this commit we have removed unnecessary commas from the 'Contact' schema definition.

v.1.25.0



98a54bb - [Aveline] Dependency updates - Jul 23, 2020

In this commit we have added multiple dependencies as well as start using scripts correctly with nodemon.

v.1.24.0



fe4c096 - [Aveline] Sequelize association implemented for Office -> Contact && Contact -> Multimedia queries - Jul 23, 2020

In this commit we have corrected the schema relationships as values to their correct attributes, then some
definition updates are made, we create the RegionalEmployee's GraphQLInputObjectType, as well as adding and
updating resolvers.

v.1.23.3



84d0a12 - [Aveline] Minor changes - Jul 23, 2020

In this commit we have made really minor changes.

v.1.23.3



21c0ccf - [Aveline] Sequelize association implemented for Office -> Thumbnail queries - Jul 22, 2020

In this commit we have made updates to the Multimedia definition, we create the RegionalThumbnail's
GraphQLInputObjectType, as well as updating the resolver for the Office query.

v.1.23.2



d83e2b2 - [Aveline] Typo fixed and other minor changes - Jul 22, 2020

In this commit we have added async/await to a resolver, relationships between Office and Multimedia have also been
added, and new comments.

v.1.23.1



498eac3 - [Aveline] License documents have been updated - Jul 19, 2020

In this commit we have made a minor update to the MIT licence files.

v.1.23.0



5729f54 - [Aveline] Added static folder and other minor changes - Jul 9, 2020

In this commit we have added the static directory of the 'public' folder to the Express server.

v.1.22.0



a332b7b - [Aveline] Refactoring of paths to location of definitions - Jul 9, 2020

In this commit we have updated the import path of the 'sequelize' directory over to the 'definitions' directory.

v.1.21.0



dcd61f1 - [Aveline] Refactoring of paths to location of object types - Jul 9, 2020

In this commit we have updated the import path of the 'schema' directory over to the 'types' directory.

v.1.20.0



c2744b5 - [Aveline] Refactoring of directory label only (schema -> types) - Jul 9, 2020

In this commit we have moved the content of the 'schema' directory over to the 'types' directory.

v.1.19.0



aea7e50 - [Aveline] Refactoring of directory label only (sequelize -> definitions) - Jul 9, 2020

In this commit we have moved the content of the 'sequelize' directory over to the 'definitions' directory.

v.1.18.0



47a70bd - [Aveline] Refactoring of directory label only (aveline -> schema) - Jul 9, 2020

In this commit we have moved the content of the 'aveline' directory over to the 'schema' directory.

v.1.17.0



b388d83 - [Aveline] Updating the README files after certain changes - Jul 9, 2020

In this commit we have updated the README files.

v.1.16.0



689e227 - [Aveline] MIT Licenses have been added to the project - Jun 29, 2020

In this commit we have added MIT licence files.

v.1.15.0



fc2574f - [Aveline] Removal of source code regarding the BuildTool - Jun 18, 2020

In this commit we have removed five definition types as they are no longer required.

v.1.14.0



3c3e164 - [Aveline] Minor refactoring for preparing for dev, test and prod environments - Jun 18, 2020

In this commit we have now prepared different values for Sequelize to the different environments.

v.1.13.0



990342a - [Aveline] Cleanup and installation of new packages - Jun 18, 2020

In this commit we have made some project configurations and are now including 'react-router-hash-link'.

v.1.12.0



9aee5e5 - [Aveline] Dotenv implementation for the backend application - Jun 18, 2020

In this commit we now use environment variables by using the dotenv dependency.

v.1.11.0



bb0f7b3 - [Aveline] Project description copies added - Jun 3, 2020

In this commit we have added the project descriptions for both the frontend and the backend modules.

v.1.10.0



d93a63f - [Aveline] Minor changes regarding Multimedia table attributes - Jun 3, 2020

In this commit we have included the 'logo' attribute to the 'Multimedia' definitions.

v.1.9.0



8b94133 - [Aveline] Sitemap component implementation used by the Footer component - May 11, 2020

In this commit we have implemented the 'Sitemap' component and inserted it under the 'Footer' component. We also
made some minor definition updates.

v.1.8.0



82c21e3 - [Aveline] Implementation of Nodemailer API and Form for using said API - May 7, 2020

In this commit we have implemented the Nodemailer API, as well as the two form components that will be using this
API, e.g. 'Form' and 'FormHelp'.

v.1.7.0



da045fd - [Aveline] Refactoring of dependencies for backend - May 7, 2020

In this commit we have included some new dependencies as well as moving some over to devDependencies.

v.1.6.0



2039656 - [Aveline] Sequelize changes regarding new tables and refactoring of current - May 7, 2020

In this commit we have included some new tables and matching definitions.

v.1.5.0



3b4fbcf - [Aveline] Database refactoring and minor changes - Apr 27, 2020

In this commit we have made several minor definition changes as the database once again gets modified.

v.1.4.3



3857c7a - [Aveline] Minor refactoring of the database and source code - Apr 22, 2020

In this commit we have made several minor definition changes as the database gets modified.

v.1.4.2



c0a240b - [Aveline] Missed src attribute for fetching from database - Apr 22, 2020

In this commit we have included the 'src' attribute that were missing from the Multimedia definitions.

v.1.4.1



55dbd45 - [Aveline] Sequelize refactoring and minor changes - Apr 21, 2020

In this commit we have performed some refactoring with Sequelize definitions.

v.1.4.0



a16324f - [Aveline] Cleanup and installation of new packages - Apr 19, 2020

In this commit we have added new dependencies as well as some minor clean up (removal of files).

v.1.3.0



3e64435 - [Aveline] Schema refactoring and allowing CORS communications - Apr 19, 2020

In this commit we have performed some refactoring by moving the schema out from the current location. We
have added some CORS configurations, as well as introduced Sequelize implementation to match GraphQL, Sequelize,
and the database.

Looks like username and password is openly available, this has of course been changed and no longer used. >_<

v.1.2.0



b6467cf - [Aveline] Schema specifications added - Apr 17, 2020

In this commit we have the starting point for the GraphQL schema, and we are listening to the API endpoint.

v.1.1.0



b0c9a6e - [Aveline] initial commit of the buildtool - Apr 16, 2020

In this commit we have the starting point of both the frontend and the backend projects. Most are default
implementation and test data created by the npm tool.

Looks like both 'package-lock.json' files were included into this commit. >_>

v.1.0.0
