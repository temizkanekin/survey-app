## Live version on Netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/0c0de663-8f66-47f6-9545-4cc004a0a2fc/deploy-status)](https://app.netlify.com/sites/competent-villani-e9f013/deploys)

https://competent-villani-e9f013.netlify.app/


## Description about app

- This survey application consists of three main components. These are Toolbar, LeftPanel and RightPanel components. RightPanel is the changeable content of the application, LeftPanel and Toolbar components are always rendered during application lifecycle.
- There is an additional SnackBar component to give feedback about back end requests' status. The component takes type and message as arguments and renders the snackbar.
- App provides localization with Turkish and English support that can be selectable from Toolbar
- Dark theme used as the default theme in the application (May be varied)
- There is a proxy middleware configuration for local development environment by using http-proxy-middleware.


## Technologies/Libraries Used

- React Router Dom : To wrap all views into router in App.js.
- [Tailwind CSS](https://tailwindcss.com/) : Highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.
- [axios](https://github.com/axios/axios) : Promise based HTTP client for the browser and node.js
- [http-proxy-middleware](https://www.npmjs.com/package/http-proxy-middleware): Proxy middleware for development environment
- [react-redux](https://react-redux.js.org/): Official React bindings for Redux
- [react-intl](https://www.npmjs.com/package/react-intl): To use localization in app

#

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

#### `yarn install`

Install the node dependencies before run the app.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Feature TODO's

- Fake db can be added for UI showcase
- UI/UX improvements
- Single page application concept can be strengthened accross the app
- Dockerizing the app
- Testing

## Author

**Ekin Mert Temizkan**