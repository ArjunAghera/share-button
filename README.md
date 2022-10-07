# Share button component

This component provides you with functionality like the share button in Notion. Every component used is developed from scratch by using just TailwindCSS and is highly reusable. While developing this component I learned about Storybook which builds a UI component library. By using Storybook one can clone the repository and run it on their local to see what all components are used.

## How to run this in your local system?

To run this in your local system, you need Node.js, npm, Typescript and json-server installed in your system.

- Go to the following link to download Node.js: https://nodejs.dev/en/download/
- After the installation of Node.js run the following command to install npm: `npm install -g npm`
- Now run the following command to install Typescript: `npm install -g typescript`
- Now run the following command to install json-server: `npm install -g json-server`

Now open up your terminal in the directory, where you would like to clone the repo; run the following command to clone the repository: `git clone https://github.com/ArjunAghera/share-button`

Once the repository is cloned, go to that directory and run: `npm install`

After the installation opens up three terminals and run the following commands in different terminals:

```
npm run start

npm run storybook

npm run server
```

## Development Process

My task was to replicate the share widget from Notion for which a design was provided and the required UX was written in the Figma file. So, I developed the same and learned more about Storybook and developed stories i.e. component library for all the components that I developed.
By understanding the requirements I decided to use TailwindCSS for styling the components. Also all the components I felt that might require customization can be customized through props in the brand colors. I created a mock API using JSON-server so that I don't need to use data files and also I can integrate any API by just making a few changes.
