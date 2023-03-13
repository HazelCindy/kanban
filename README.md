## Getting Started
First, install the dependencies using yarn
```bash
yarn
```
* >Secondly, setup any environment variables required in your **.env** that you create locally
  
Thirdly, run the development server:

```bash
yarn dev
```

Fourth, to build your project, run
```bash
yarn build
```
***
* Remember to never push directly to **dev** or **preprod** or **master** branches.
***

#### Remember to always:
* Build your project before opening a PR/MR
* After building, always run a lighthouse check on your pages to make sure you have a green score(above 90%)
* Always run linting checks
* When you pass props to a component, ensure you document them using **prop-types**

***
### Repository Structure
Please ensure you adhere to the following folder structure:

* Remember to run lint checks and ensure that all files are kept in their respective folders for easy project management. Example:
* >You have created a file called SignUp.js, to correctly place it, it should be put inside **containers > SignUp > SignUp.js**

* >containers:
   here we place file structures for different pages
* >components: here we place any file that can be re-used across multiple areas

* >layouts:
  > here we place different layout files for different pages

* >apolloConfigs:
  > this folder contains the configurations for apollo-client and how it communicates with the server side

* >pages:
  > place any file you wish to be converted to a route. Remember naming is in small letters
  
* >theme:
  > here we can the theme used across all the mui components configured.

* >utils:
  > here we place any helper functions
   
* >styles:
  > place global and file specific styles here which can easily be accessed by nextjs
