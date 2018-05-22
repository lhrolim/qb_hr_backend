This is the mobile portion of the application.

The majority of the [requirements](./Requirements.md) will be implemented here as the back-end api is 'nearly done'.

Besides the the [requirements](./Requirements.md) a few things will be evaluated:

* Proper usage of redux
* Proper organization of the code into container/components
* Proper error handling
* Proper setup of styles for the created container/components
* General Es6/React good practices
* Visual styling in general
* Presence of unit tests (Plus!)



## Setup

For the sake of simplicity, we're providing a bolierplate of a react-native project, which was built on top of `create-react-native-app` global module,
which integrates [expo](https://expo.io/) as a toolkit.

The project is also optionized towards a few frameworks

* redux
* react-navigation
* superagent (for http requests)


**Modify your /infra/server/server.json to point to your ip**


The project was tested using the following:

* Ubuntu 16.0.4
* Node 10.1.0
* npm 6.0.1
* vscode insiders (as of 05/21/2018)
* react-native-cli@2.0.1 (required for vscode debugger to work)
