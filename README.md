# Vue based UI Nuggets for e-commerce sites

I am creating a library of UI components targeted towards e-commerce sites..

I was doing a comparative study of various e-commerce sites; large and small and I realized that a lot of things are common to these sites. These things are something that can be componentized and used across sites.

These comonents are currently being built using [Vue](https://vuejs.org/). I might consider building the same components using [React](https://reactjs.org/) as well. At some point I might even consider creating [Web Components](https://www.webcomponents.org/) for this.

I will try and keep the test coverage for all of these components at a 100% at all times. Currently it is 0.

### List of components
## 1. Quantity Selector (Partially Implemented)
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

## 2. Star Rating (Partially Implemented)
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
