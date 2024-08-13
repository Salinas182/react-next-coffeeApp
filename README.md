# react-ts-next-coffeeApp

## How to get started

Even though this app runs through NextJs in the fronted folder and nothing is done in the backend besides running the DB, in order to have it running, the following script must be run from both 'backend' and 'frontend' directories:

```bash
$ yarn install
```

Installs all the necessary dependencies for the app to run correctly.

### Backend necessary scripts

More detailed information can be found in the backend folder's README. However, assuming you have Docker installed in your machine, you will just need to run:

```bash
$ yarn start:dev:db
```

This will run a script that will get the DB up and running for you.

### Frontend necessary scripts

```bash
$ yarn dev
```

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Other frontend available scripts

```bash
$ yarn test
```

Runs all the existing tests.

```bash
$ yarn lint
```

Runs ESLint on the project.

### Production mode

```bash
$ yarn install
```

Installs all the necessary dependencies for the app to run correctly.

```bash
$ yarn build
```

Compiles and prepares your project for production deployment, optimizing code and resources.

```bash
$ yarn start
```

Runs the app in production mode. You must previously build your app.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Feedback

---

### What would you improve if given more time?

If this project was going to grow in time, some improvements could be made, for instance: 
- Give the user the chance to register and login.
- I would show the already existing coffee error when the user is still trying to add a new coffee, giving them the chance to change the name and try again. The way it is currently done, it could be frustrating for them, as the app just gets them back to the main page and they would have to start the process all over again if they want to add a coffee.
- I would also add a design specifically meant for tablets, as the Figma designs only focus on mobile and desktop screens.
- If it was working with an external API to retrieve coffees' info instead of just creating our own data, it might be a good idea to make use of the Mapper Pattern to map their data and create our own interface. In this way, if any of their data properties were renamed, only our own interface would need to be modified, instead of every single API call.
- If working with an API, adding a spinner would be necessary in order to show the user what is going on when the page is loading. Since all the data was local in this case, this is not needed for now.
- Create more and better tests.
- Add i18n to support different languages.

### How was your experience doing this challenge?

I enjoyed it even though, being honest, I found some parts more challenging than I was expecting, so I have tried my best. 

For instance, setting the project up was bit hard for me at first, as I am used to working with API's or local NOSQL DB's -such as Mongo- that I can actually see. Therefore, I had to dedicate some time to investigate how to connect the NextJS app to the Postgres DB and how to create the queries I needed, as I do not know SQL and I am only kind of used to reading SQL queries but never had to write my own ones.

Another kind of problem for me was Figma, this has been the second time I have used Figma in my life, so I am still trying to get to know it. For this reason, I am aware that the design is not 100% accurate, as there was some times when, maybe because I still do not master Figma, the sizes and measures I saw in the design did not look exactly the same in my app, so I ended up trying for my app to look like the design as much as possible, even if the font or elements sizes -like X pixels and so on- were not the same. That being said, I am confident that if I had to keep using Figma, I would have no problem at all and would learn everything about it in order to develop an app that would like exactly like the designs.

### Technical decisions taken and reasons

- I decided to make use of the Adapter Pattern to encapsulate the API calls. In this way, if I wanted to use an alternative to Axios for HTTP calls, that would not be a challenge or break the app, only the adapter would need to be modified. 
- I have used the Context API in order to have access, throughout the app, to the saved coffees and the error in case a user tried to add an already existing coffee.
- Taking into account that, every time the app is launched, data from the DB will always be needed, I decided to use Server Side Rendering in that case, to avoid unnecessary calls to the DB if the user gets back to the main page.
- I have tried to create as many components as it made sense in order to make the app scalable and make the views have as less logic inside as possible.
- I have added to the Tailwind config the color codes that were going to be needed more than once, in order to avoid repetition and make it easier to change in case the color was to be modified.
- As I was running out of time, I decided to create only some sample tests for the most critical files, such as the HTTP Adapter, the custom hooks or some components.
- I have the following packages: Axios -for HTTP calls-, PG -in order to connect to the DB and use just the NextJs app as full-stack, HeadlessUI for the coffee type choice and React Hot Toast for the alert displayed when a coffee already exists. I have chosen both HeadlessUI and React Hot Toast as they were not the kind of components you can find in MaterialUI for instance, since these were components made with TailwindCSS, giving me the chance to totally customize them -by taking a look at the original components, it can be appreciated that they have almost nothing to do with the ones I implemented-.

---

