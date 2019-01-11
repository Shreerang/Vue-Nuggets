/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean, number, select, color, text } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';

import QuantitySelector from '../src/components/QuantitySelector/QuantitySelector';
import Alert from '../src/components/Alert/Alert';
import BagCount from '../src/components/BagCount/BagCount';
import Grid from '../src/components/Grid/Grid';
import ScrollToTop from '../src/components/ScrollToTop/ScrollToTop';
import StarRating from '../src/components/StarRating/StarRating';
import VarianceSelector from '../src/components/VarianceSelector/VarianceSelector';

storiesOf('Alert', module)
	.addDecorator(withKnobs)
	.add('Basic', () => ({
    props: {
      alertType: {
        type: String,
        default: select('alertType', ['error', 'warning'], 'error'),
      },
      alertPosition: {
        type: String,
        default: select('alertPosition', ['global', 'inline'], 'global'),
      },
      isActive: {
        type: Boolean,
        deault: boolean('isActive', false),
      },
      persistFor: {
        type: Number,
        default: number('persistFor', 0),
      },
    },
    components: { Alert },
    template: '<Alert alertType="alertType" alertPosition="alertPosition" :isActive="isActive" :persistFor="persistFor">Error or Warning message goes here!</Alert>',
	}));

storiesOf('BagCount', module)
  .addDecorator(withKnobs)
	.add('Basic', () => ({
		props: {
			bagCount: {
				type: Number,
				default: number('bagCount', '12'),
			},
			fontColor: {
				type: String,
				default: color('fontColor', '#FFF'),
      },
      fontSize: {
        type: Number,
        default: number('fontSize', '80')
      },
      fillColor: {
        type: String,
        default: color('fillColor', '#42b983')
      },
      iconPath: {
        type: String,
        default: text('iconPath', 'M177.91,55.377h-22.589v-1.368C155.311,24.25,131.091,0,101.302,0C71.503,0,47.292,24.25,47.292,54.009v1.368H24.704L11.495,202.614h179.624L177.91,55.377L177.91,55.377z M101.302,6.624c19.687,0,36.619,12.105,43.761,29.232c-9.448-14.137-25.5-23.478-43.761-23.478c-18.231,0-34.313,9.34-43.77,23.507C64.713,18.729,81.635,6.624,101.302,6.624z M57.297,55.377c4.406-20.263,22.481-35.485,44.024-35.485c21.582,0,39.618,15.222,44.024,35.485H57.297z')
      },
      iconDimensions: {
        type: Number,
        default: number('iconDimensions', '40')
      }
		},
		components: { BagCount },
		template: '<BagCount :bagCount="bagCount" :fontColor="fontColor" :fontSize="fontSize" :fillColor="fillColor" :iconPath="iconPath" :iconDimensions="iconDimensions" />',
	}));

storiesOf('Grid', module).add('Basic', () => ({
	components: { Grid },
	template: '<Grid />',
}));

storiesOf('Quantity Selector', module)
  .addDecorator(withKnobs)
  .add('Basic', () => ({
    props: {
      count: {
        type: Number,
        default: number('count', 1),
      },
      maxCount: {
        type: Number,
        default: number('maxCount', 6),
      },
      iconDimensions: {
        type: Number,
        default: number('iconDimensions', 15),
      },
      stepInterval: {
        type: Number,
        default: number('stepInterval', 1),
      },
      minusIconFillColor: {
        type: String,
        default: color('minusIconFillColor', '#000'),
      },
      plusIconFillColor: {
        type: String,
        default: color('plusIconFillColor', '#000'),
      },
      isCountEditable: {
        type: Boolean,
        default:boolean('isCountEditable', false),
      }
    },
    components: { QuantitySelector },
    template: '<QuantitySelector :count=count :maxCount="maxCount" :iconDimensions="iconDimensions" :stepInterval="stepInterval" :minusIconFillColor="minusIconFillColor" :plusIconFillColor="plusIconFillColor" :isCountEditable="isCountEditable" />',
  }));

storiesOf('Scroll To Top', module).add('Basic', () => ({
	components: { ScrollToTop },
	template: '<ScrollToTop />',
}));

storiesOf('Star Rating', module).add('Basic', () => ({
	components: { StarRating },
	template: '<StarRating />',
}));

storiesOf('Variance Selector', module).add('Basic', () => ({
	components: { VarianceSelector },
	template: '<VarianceSelector />',
}));
/* eslint-enable react/react-in-jsx-scope */
