# Share button component

This component provies you the functionality like the share button in Notion. Every component used are developed from scratch by just using tailwindCSS and are highly reusable.
While developing this component I learned about Storybook that builds a UI component library. So I developed the components and learned more about Storybook and developed stories i.e. component library for all the components developed in 2 Days.

Because of the use of Storybook one can just clone the repository and run it on their local to see what all components are used.

## How to run this in your local system?

To run this in your local system, you need Node.js, npm and Typescript installed in your system.

- Go to the following link to download Node.js: https://nodejs.dev/en/download/
- After the installation of Node.js run the following command to install npm: `npm install -g npm`
- Now run the following command to install Typescript: `npm install -g typescript`

Now open up your terminal in the directory where you would like to clone the repo; run following command to clone the repository: `git clone https://github.com/ArjunAghera/share-button`

Once the repository is cloned, go to that directory and run: `npm install`

After the installation open up three terminals and run following commands in different terminal:

```
npm run start

npm run storybook

npm run server
```

## Development Process

My task was to replicate the share widget from Notion for which a design was provided and required UX was written in the figma file as well. So I developed the same usign fully resusable components and after the development to showcase all the components used I devloved the component library using Storybook.

By understanding the requirements I decided to use TailwindCSS for styling the components. Also all the components I felt that might require customization can be customized through props in the brand colors only.

I created a mock API using json-server so that I don't need to use data files and also I can integrate any API by just making few changes.
