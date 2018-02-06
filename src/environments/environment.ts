// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyC3ycvv0pUOXRdctTWg0-k6zWdrLxln2A8",
    authDomain: "expenses-app-e5e94.firebaseapp.com",
    databaseURL: "https://expenses-app-e5e94.firebaseio.com",
    projectId: "expenses-app-e5e94",
    storageBucket: "expenses-app-e5e94.appspot.com",
    messagingSenderId: "135975553882"
  }
};
