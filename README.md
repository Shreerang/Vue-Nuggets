# Vue based UI Nuggets for e-commerce sites

## What is this? ❓❓❓
I am creating a library of UI components targeted towards e-commerce sites..✌️

## Why am I doing this? 🤔
I was doing a comparative study of various e-commerce sites; large and small and I realized 💭 that a lot of things are common to these sites. These things are something that can be componentized 🗃️ and used across sites. ℹ️

These comonents are currently being built using [Vue](https://vuejs.org/). I might consider building the same components using [React](https://reactjs.org/) as well. At some point I might even consider creating [Web Components](https://www.webcomponents.org/) for this.

## Unit Tests 💉
I will try and keep the test coverage for all of these components at a 100% at all times. 😃 Currently it is 0. 😢 (I promise this will improve)

### List of components 📇
## 1. Quantity Selector (WIP) 🏗️
#### Usage
```javascript
<QuantitySelector />
```
#### Properties
| Property Name      | Default Value | Required | Type   |
| -------------      |:-------------:| :------: | :----: |
| count              | 1             | No       | Number |
| maxCount           | 6             | No       | Number |
| iconDimensions     | 15            | No       | Number |
| minusIconFillColor | #000          | No       | String |
| plusIconFillColor  | #000          | No       | String |

## 2. Star Rating (WIP) 🏗️
#### Usage
```javascript
<StarRating :rating="3.5" />
```
#### Properties
| Property Name      | Default Value | Required | Type   |
| -------------      |:-------------:| :------: | :----: |
| totalStars         | 5             | No       | Number |
| rating             | NA            | Yes      | Number |
| fillColor          | #C00          | No       | String |
| baseColor          | #666          | No       | String |

## 3. Variance Selector - Color & Size Picker (Planned) 🔮

## 4. Layout switcher (Planned) 🔮

## 5. Responsive Product Grid 🔮

## ⚠️ Note ⚠️
If you would like to suggest more components. Please add a issue on Github and use tag component-request.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
