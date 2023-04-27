
### Environment
- NodeJS 18
- yarn
    - After NodeJS is installed, you can install yarn with the following command:
    ```
    npm install yarn -g
    ```
### Dev Server 

```
$ yarn && yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Pre Requisites before build
- Install python
- Run below command which will merge all sidebars and rearrange them using python script

```
yarn sidebarchanges
``` 

## Build (Only needed to deploy)

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
