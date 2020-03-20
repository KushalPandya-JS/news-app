# News Mobile App (Ionic React and Capacitor)

Get started with Ionic by building app that runs on iOS, Android, and the web - with just one codebase. 

Powered by [Ionic React](https://ionicframework.com/docs/react) (web app) and [Capacitor](https://capacitor.ionicframework.com) (native app runtime).

## How It Works

After the user navigates to Home page, The home page will be presented with the top 10 news items(using https://newsapi.org/docs/endpoints/top-headlines). they can tap/click on the news item to open up the news detail's page. 

## Feature Overview
* App framework: [React](https://reactjs.org/)
* UI components: [Ionic Framework](https://ionicframework.com/docs/components)
* Native runtime: [Capacitor](https://capacitor.ionicframework.com)
  * Storing locally: [Storage API](https://capacitor.ionicframework.com/docs/apis/storage)
  * Network API: [Network API](https://capacitor.ionicframework.com/docs/apis/network/)

## Project Structure
* Pages -> Home (News) (`src/pages/Home.tsx`): News List UI and basic logic.
* components
* models
* pages
* services
* theme


## How to Run

> Note: It's highly recommended to follow along with the [tutorial guide](https://ionicframework.com/docs/react/your-first-app), which goes into more depth, but this is the fastest way to run the app. 

0) Install Ionic if needed: `npm install -g @ionic/cli`.
1) Clone this repository. `git clone https://github.com/KushalPandya-JS/news-app.git`.
2) In a terminal, change directory into the repo: `cd photo-gallery-capacitor-react`.
3) Install all packages: `npm install`.
4) Run on the web: `ionic serve`.
5) Run on iOS or Android: See [here](https://ionicframework.com/docs/building/running).
6) Add Platforms
        `npx cap add ios`
        `npx cap add android`
7) Open IDE to build, run, and deploy
        `npx cap open ios`
        `npx cap open android`
    The native iOS and Android projects are opened in their standard IDEs (Xcode and Android Studio, respectively). Use the IDEs to run and deploy your app.


## Testing

- Testing flow: Jest/Cypress

```
npm run test
\\ or
npm run test:watch

```