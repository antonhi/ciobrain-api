# CIOBrain

CIOBrain is the visualization of the mind of a CIO.

## Setup

[Node.JS](https://nodejs.org/) is required for setting up.

1. Run the `npm install` command on this project. This can be done by navigating a terminal window to have its current directory be the root folder of this project, then running the command.
2. Run the `npm start` command on this project.

## Testing API Calls

1. Navigate to [Postman](https://www.postman.com/downloads/)
2. Sign up for an account if you don’t already have one
3. Download Postman
4. Open Postman and Login
5. Navigate to “My Workspace” or Create a new workspace
6. Next to “My Workspace”, select “Import” > “File” > “Upload Files”
7. Navigate to the CIOBrainAPI project folder > “sample requests” > “CIOBrain API.postman_collection”  inside File Explorer
	- “CIOBrain API.postman_collection” is for local testing when the API is hosted on localhost
	- Import “CIOBrain API - Production.postman_collection” to also test the API when it’s running in Azure.
8. “Import”. 
9. Select a request from within a folder and “Send”
	- For POST requests, make sure the request body is filled out accordingly.
		- To fill one out, select “Body” > “raw” > “JSON” 
		- ![post requests](https://i.imgur.com/PmaW7wf.png)
	- For GET requests, no request body is needed. 
	- More information for how api endpoints can be called can be found in [index.js](./index.js).

## Changing Excel Files

1. Acquire the datasets for application, data and infrastructure.
2. Rename the excel files according to the corresponding file name:
	- Application.xlsx
	- Data.xlsx
	- Infrastructure.xlsx
4. Replace the respective files under the `./src/data/` folder

## Viewing the Server Log

The `log.txt` file can be found in the `./src/data/` folder. If this file is missing, no errors were found or recorded.
