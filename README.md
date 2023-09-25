
# FullCalendar TypeScript Example Project

This is a fully-buildable example project for FullCalendar and [TypeScript], leveraging [Webpack] and [ts-loader].

[More information on setting up TypeScript with Webpack &raquo;](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)


## Installation

```bash
git clone https://github.com/fullcalendar/fullcalendar-examples.git
cd fullcalendar-examples/typescript
npm install
```

## Build Commands

```bash
npm run build
npm run watch # continously build
npm run clean # start fresh
```

After running `build` or `watch`, open up `dist/index.html` in a browser.


[TypeScript]: https://www.typescriptlang.org/
[Webpack]: https://webpack.js.org/
[ts-loader]: https://github.com/TypeStrong/ts-loader


## Architecture
```
Plan" on using Redux for UI-related state, UserAuth, App config, navigation state, cached data (to avoid redundant api calls)
RxJS: complex async operations, event handling (e.g.:User interactions. manage event streams and react to them)
    -- data transformation, real-time data updates(prob api-driven), custom data processing pipelines"
```