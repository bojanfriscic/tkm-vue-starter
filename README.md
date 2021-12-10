# Takamol Vue starter

## Project setup

Some of the packages needed for this project are private - make sure you are connected to the Takamol VPN before starting the installation and that you have a valid _.npmrc_ file in the root directory of the project.

Also, make sure your Node version is set to 12.6 so that all packages will be installed correctly.

```
npm install
```

After the installation, you will need to modify your hosts file in order to run the project locally. On MAC/Linux run:

```
sudo nano /etc/hosts
```

On Windows, follow [this](https://docs.rackspace.com/support/how-to/modify-your-hosts-file/) guide.

Once the hosts file is open, add the following line:

```
127.0.0.1    SERVICE.qiwa.info
```

Replace SERVICE with the subdomain/name of the service you are implementing.

Finally, run the project with:

```
npm run serve
```

## Coding guidelines

In this section the coding guidelines ranging from local Visual Studio Code setup over the procedure for creating individual pieces of functionality to the global architecture/project structure will be presented.

### Desired project structure

-   assets
    -   images
    -   scss &#8594; modified ITCSS
-   core
    -   api
    -   i18n
    -   hoc
    -   plugins
    -   router
    -   store
    -   types
    -   utils
-   mocks
    -   ...
-   views
    -   ...
-   shared
    -   components
    -   directives
    -   filters
    -   mixins

### CSS architecture

The project is using a modified version of the [ITCSS](https://www.hongkiat.com/blog/inverted-triangle-css-web-development/) architecture. Inside the scss folder, the following level are present:

-   01-settings - contains variables like colors and breakpoints and vendor imports
-   02-tools - contains helpers like mixins, functinos and extends
-   03-generic - contains the generic CSS setup on the html and body elements (like RTL handling)
-   04-objects - contains code related to components from the Qiwa library (e.g. modifications on the page, header, ...)

In addition, we have a fifth level - components - but for the ease of use, each component will have the corresponding SCSS file inside the folder where the Vue and JS files are located.

### Casing

| Entity                       | Casing     | Example             |
| ---------------------------- | ---------- | ------------------- |
| Component (.vue, .js, .scss) | Pascalcase | Button.vue          |
| Common JS file               | Cammelcase | authLink.js         |
| Common SCSS file             | Kebabcase  | page-container.scss |
| JS function                  | Cammelcase | getCookie() { ...   |
| SCSS selector                | BEM        | .header\_\_logo     |

### Creating components

When creating components, we want to follow two basic principles:

-   Separation of concerns
-   Ease of import

To achieve this, each component must:

-   be placed within a folder barring the same name as the component
-   contain the following files:
    -   index.js
    -   Component.vue
    -   Component.js
    -   Component.scss

Notes:

-   The index.js file needs to import the default export from Component.vue and create a named export
-   All styling must be scoped

## Using mock data

To use mock data instead of calling real endpoints, you will be required to run a new --mode mock. Mock data are JSON files placed inside of the mocks folder. This is a replacement for calling endpoints and acquiring real data from the backend side.

To start the application in mock mode, run:

```
npm run mock
```

To test if mock data is available, add the following data to the component:

```
data() {
        return {
            isMock: process.env.VUE_APP_MOCKMODE === 'enabled',
        };
    },
```

Next, add a piece of computed data:

```
dashboardService() {
    const fileName = 'dashboardServicesMock';
    if (!mockupLoaderFunction(fileName)) return { ...this.userDetailsData, name: this.userName };
    return mockupLoaderFunction(fileName);
},
```

In the template, you can test if the app is run in the mock mode with a simple v-if:

```
<div class="content" v-if="isMock">
    ...
```

Finally, simply loop over the data:

```
<tr v-for="(item, index) in dashboardService" :key="index">
    ...
```

## Visual Studio Code Setup

To make sure the work of all developers results with the same code formatting and output, make sure you have the following extensions installed:

-   Prettier
-   Eslint

To increase productivity, the following extensions are recommended:

-   Auto Rename Tag
-   GitLens
-   Live Share
-   Path Intellisense
-   Vetur
