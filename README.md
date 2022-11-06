# hometask-integration-testing
Integration testing - hometask from Rainers

How to install the project and run the tests?
- clone the project from github repository;
- switch to another branch;
- initialize a new yarn project using the 'yarn init' command;
- check package.json, README.md, .gitignore files and the directories tree (you should see js and tests folders);
- add the jest library using 'yarn add --dev jest' command in your terminal (from the root);
- to avoid errors you can install also babel and add a babel.config.json file;
- in the folder tests there was created a file called rectangle.test.js consisting tests;
- run yarn test command in your terminal;
- see the tests results.

About the results: two first tests are passed, the third one failed because in the function there is a consol.log returned, wchich gives 'undefined' - if we delete console.log and leave return only, all three tests will be passed.