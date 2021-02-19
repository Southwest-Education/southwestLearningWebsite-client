# `Southwest Education`

This is the official website for Southwest Education featuring many of our educational programs and other awesome addons to help you navigate and explore what we as a company have to offer!

![Screenshot](/public/assets/images/mainPageScreenshot.png)

## Langauges / Framworks Used

```
HTML
CSS/BOOTSTRAP
MAPBOX-GL
REACT.JS
JAVASCRIPT
NODE.JS
EXPRESS.JS
MONGODB
```

## Link

[Official Website](https://southwest-education-cmlho.ondigitalocean.app/) <br />
[Github Repo](https://github.com/Southwest-Education/southwestLearningWebsite)

## License

No License required. These are public pages.

## Client Dependencies

```
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^1.2.32",
    "@fortawesome/free-brands-svg-icons": "^5.15.1",
    "@fortawesome/free-regular-svg-icons": "^5.15.1",
    "@fortawesome/free-solid-svg-icons": "^5.15.1",
    "@fortawesome/pro-duotone-svg-icons": "^5.15.1",
    "@fortawesome/pro-light-svg-icons": "^5.15.1",
    "@fortawesome/pro-regular-svg-icons": "^5.15.1",
    "@fortawesome/pro-solid-svg-icons": "^5.15.1",
    "@fortawesome/react-fontawesome": "^0.1.14",
    "@material-ui/core": "^4.11.2",
    "@testing-library/jest-dom": "^5.11.8",
    "@testing-library/react": "^11.2.2",
    "@testing-library/user-event": "^12.6.0",
    "axios": "^0.21.1",
    "bootstrap": "^4.5.3",
    "mapbox-gl": "^2.1.0",
    "react": "^17.0.1",
    "react-bootstrap": "^1.4.3",
    "react-dom": "^17.0.1",
    "react-map-gl": "^6.0.3",
    "react-player": "^2.8.2",
    "react-responsive-carousel": "^3.2.11",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.1",
    "web-vitals": "^0.2.4",
    "worker-loader": "^3.0.7"
  },
```

## Available Scripts

In the project directory, you can run:

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js",
    "server": "nodemon app.js",
    "client": "npm run start --prefix client",
    "dev": "concurrently  -n \"server,client\" -c \"red,green\" \"nodemon --ignore 'client/*'\" \"npm run client\""
  },
```

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
