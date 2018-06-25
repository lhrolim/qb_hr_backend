# Requirements

Please refer to [requirements](./front/Requirements.md) as well as to [backend-guide](./back/README.md) and [frontend-guide](/front/README.md)

## Running the Project

* First, open a terminal tab and follow the Setup guide of the backend [backend-guide](./back/README.md).
* Keep this terminal up and running the backend code (rails s)
* Then, open the /front folder in another terminal (cd front/)
* To install the dependencies run "npm install" or "yarn install", depending of which package manager you use.
* Now, we need to include the backend URL in the project, to do so open /infra/server/server.json with a text editor and insert you ip address at the constant dev, keeping the http:// and :3000/api/.
* Obs: to get you ip run "ifconfig | grep netmask" inside the terminal, your ip will start with 192...
* After doing thar you are able to run de project. Connect a device to the computer and run "npm start" or "yarn start", after that the packager will run and the instruction will appear inside the terminal

## Questions?

Please forward any questions to mfreitasvenosa@gmail.com
