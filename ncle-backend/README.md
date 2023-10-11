## Introduction

NCLE Backend Assessment
## Dependencies

* ExpressJS
* ExpressJS Middlewares
    * Compression - https://github.com/expressjs/compression
    * Helmet - https://helmetjs.github.io/
* TypeScript
* NPM (or) Yarn

## Install, Build, Run

Install node package dependencies:

`$ npm install`

Build:

`$ npm run build`

Run ExpressJS Dev:

`$ npm run dev`

Run ExpressJS server:

`$ npm start`

Run ExpressJS Test:

`$ npm test`

Postman Api

`https://api.postman.com/collections/5823566-ef178cff-c71b-4bd9-9678-9b477f7e1ab8?access_key=PMAT-01HCFHC3XEDDW81HC6T0XJ9QTN`
## Recommendation

Keep all TypeScript source files in the `src` folder.

## Notes

* Due to resticted time many of future features can not be added
* Instead of any database, a dummy data json file is being used. can be replace with any database by changing it in read-write.ts file
* I am currently working with my company and task was assigned in week days so I didn't get the chance to show my true potential
* It's a small request but try to keep assessments or evalaution tests small. To ensure efficiency, please consider a more concise coding challenge, typically completed in 2 hours or more, that still assesses my skills effectively. I'm happy to demonstrate my abilities via project assessment or live call assessment while respecting both our time constraints.

## Extra Features
* Some of the extra features include:
    *  Adding helmet and morgan for better logging experience
    *  Adding uuid for unique task id
    *  Adding zod validation for validation body data
    *  adding type checks

## Future Goals
* Add husky
* Add Lint styles
* Add Prettier
* Add Authtication
* Add more test cases
