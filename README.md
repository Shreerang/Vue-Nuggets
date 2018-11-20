# Vue based UI Nuggets for e-commerce sites

## Site - https://ecommerce-vue-nuggets.herokuapp.com/

## What is this? ❓❓❓
I am creating a library of UI components targeted towards e-commerce sites..✌️

## Why am I doing this? 🤔
I was doing a comparative study of various e-commerce sites; large and small and I realized 💭 that a lot of things are common to these sites. These things are something that can be componentized 🗃️ and used across sites. ℹ️

These comonents are currently being built using [Vue](https://vuejs.org/). I might consider building the same components using [React](https://reactjs.org/) as well. At some point I might even consider creating [Web Components](https://www.webcomponents.org/) for this.

## Unit Tests 💉
I will try and keep the test coverage for all of these components at a 100% at all times. 😃 Currently it is very low. 😢 (I promise this will improve)

### List of components 📇
## 1. Quantity Selector (Dev Complete) 🍰
#### Usage
```javascript
<QuantitySelector />
```
#### Properties
| Property Name      | Default Value | Required | Type    |
| -------------      |:-------------:| :------: | :------:|
| count              | 1             | No       | Number  |
| maxCount           | 6             | No       | Number  |
| isCountEditable    | true          | No       | Boolean |
| iconDimensions     | 15            | No       | Number  |
| minusIconFillColor | #000          | No       | String  |
| plusIconFillColor  | #000          | No       | String  |


## 2. Star Rating (WIP) 🏗️
#### Usage
```javascript
<StarRating :rating="3.5" />
```
#### Properties
| Property Name      | Default Value           | Required | Type           |
| -------------      |:-----------------------:| :------: | :------------: |
| totalStars         | 5                       | No       | Number         |
| rating             | NA                      | Yes      | Number         |
| noRatingMsg        | Be the first to review! | No       | String         |
| totalReviews       | NA                      | No       | Number/ String |
| fillColor          | #C00                    | No       | String         |
| baseColor          | #666                    | No       | String         |
| iconDimensions     | 20                      | No       | Number         |


## 3. Variance Selector - Color & Size Picker (Planned) 🔮

## 4. Layout switcher (Planned) 🔮

## 5. Responsive Product Grid (WIP) 🏗️
#### Usage
```javascript
<Grid :cells="10" />

<Grid :cells="10" :columns="5" />

<Grid :cells="17" :columns="{xs: 2, sm: 3, md: 4, lg: 5}" />
```

I have been pondering over the idea of what developers actually expect from a Grid.
Things like a Product Grid (Search/ Browse page), "Suggested Products" or "Similar Products" like scroll,
Product Page and so on.

So there is the CSS grid and then the **data** that is the most critical part!

So I have updated the implementation and the usage is no longer going to look like it appears above!

⚠️ Watch this space for change! Until then look at demo imploementation in App.vue and Grid.vue files ⚠️

### Notes
1. I am making use of 4 CSS break-points, prescribed by [Twitter Bootstrap](https://getbootstrap.com/docs/4.1/layout/overview/).
2. ```css
    /* Extra small devices (portrait phones, less than 576px) */
    @media all and (max-width: 575.98px) { ... }

    /* Small devices (landscape phones, less than 768px) */
    @media all and (max-width: 767.98px) { ... }

    /* Medium devices (tablets, less than 992px) */
    @media (max-width: 991.98px) { ... }

    /* Large devices (desktops, less than 1200px) */
    @media (min-width: 992px) { ... }

    /* Extra large devices (large desktops)
    No media query since the extra-large breakpoint has no upper bound on its width */
    ```
3. The columns prop can accept a number or an object in the following format
    ```javascript
    {
        xs: 2,
        sm: 3,
        md: 4,
        lg: 5
    }
    ```
4. The keys **xs**, **sm**, **md** and **lg** correspond to the 4 break points described above.
5. The values for each of these keys is the number of columns that you would like to display for that break point.
6. The dashed border on each cell is just representative. Actual component does not have this border.
7. The number displayed inside of the cell is also represtative. Actual component does not have this number.

#### Properties
| Property Name | Default Value                | Required | Type             |
| ------------- |:----------------------------:| :------: | :--------------: |
| columns       | {xs: 2, sm: 2, md: 3, lg: 4} | No       | Number or Object |

## 6. Field level errors and warnings (Planned) 🔮

## 7. Global/ Page-level errors and warnings (Planned) 🔮

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
