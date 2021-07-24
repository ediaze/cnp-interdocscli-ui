# Ng2angle

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## How do I install multiple node js version on the same machine

```
nvm version
nvm use 14.17.3
```

## To deploy your Angular application

https://medium.com/mighty-ghost-hack/how-to-deploy-angular-app-on-github-61261c0891e0
https://dzone.com/articles/how-to-deploy-an-angular-application-to-github

1. First create a repository on GitHub. To do that navigate, to https://github.com/ and click on New Repository. I am creating a repository named "cnp-soil-mining-ui".
After the repository is created, use a git command to add this repository as a remote file to the local project. To do that, run the below command:

`git remote add origin https://github.com/{{username}}/{{repository-name}}.git`

2. Once the remote repository is added, you can verify that using the below command:

`git remote -v`

3. Install GitHub page package

`npm install -g angular-cli-ghpages`
or
`npm i -g angular-cli-ghpages --save`

4. After installing ghpages, use Angular CLI to build the project. For that, run the command as shown below:

`ng build --prod --base-href https://{{username}}.github.io/{{repository-name}}/`

5. For the last step, run the command `ngh -no-silent` to publish the application

6. Or lastly, enter the below commands which creates a new branch called gh-pages and pushes the compiled code to the branch.

`ngh --dir=dist/{{repository-name}}`

OR

`angular-cli-ghpages`