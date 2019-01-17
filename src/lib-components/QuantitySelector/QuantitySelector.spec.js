import { mount, shallowMount } from '@vue/test-utils';
import QuantitySelector from '@/components/QuantitySelector/QuantitySelector.vue';

describe('Quantity Selector', () => {
	describe('Global component tests', () => {
		// The componnet renders
		it('renders', () => {
			const wrapper = shallowMount(QuantitySelector);
			expect(wrapper.findAll('div').length).toBe(3);
			expect(wrapper.findAll('input').length).toBe(1);
		});

		// The componnet can accepts properties
		it('accepts properties', () => {
			const maxCount = 12;
			const wrapper = shallowMount(QuantitySelector, {
				propsData: {
					maxCount: maxCount,
				},
			});
			expect(wrapper.props().maxCount).toBe(12);
			wrapper.setProps({ maxCount: 15 });
			expect(wrapper.props().maxCount).toEqual(15);
		});
	});

	describe('Default component state test', () => {
		// The component does not have to accept any properties
		it('Renders a default quantity selector with the max count set to 6', () => {
			const wrapper = shallowMount(QuantitySelector);

			// Make sure the - icon is greyed out
			expect(wrapper.findAll('div').at(0).find('path').attributes('fill', '#CCC'));

			// Make sure the value of input box is initialized to 1
			wrapper.find('input[type="number"]').setValue('1');
			expect(Number(wrapper.find('input[type="number"]').element.value)).toBe(1);

			// Make sure the + icon is not greyed out
			expect(wrapper.findAll('div').at(2).find('path').attributes('fill', '#000'));

			// Increment the count by 1
			wrapper.findAll('div').at(2).trigger('click');
			expect(wrapper.vm.countData).toBe(2);
			wrapper.find('input[type="number"]').setValue(wrapper.vm.countData);
			expect(Number(wrapper.find('input[type="number"]').element.value)).toBe(2);
			expect(wrapper.findAll('div').at(0).find('path').attributes('fill', '#000'));
			expect(wrapper.findAll('div').at(2).find('path').attributes('fill', '#000'));

			// Increment the count by 1 upto 6 which is the maxCount
			wrapper.findAll('div').at(2).trigger('click');
			expect(wrapper.vm.countData).toBe(3);
			wrapper.findAll('div').at(2).trigger('click');
			expect(wrapper.vm.countData).toBe(4);
			wrapper.findAll('div').at(2).trigger('click');
			expect(wrapper.vm.countData).toBe(5);
			wrapper.findAll('div').at(2).trigger('click');
			expect(wrapper.vm.countData).toBe(6);
			wrapper.find('input[type="number"]').setValue(wrapper.vm.countData);
			expect(Number(wrapper.find('input[type="number"]').element.value)).toBe(6);
			expect(wrapper.findAll('div').at(0).find('path').attributes('fill', '#000'));
			expect(wrapper.findAll('div').at(2).find('path').attributes('fill', '#CCC'));

			// Increment the count by 1, which will try and set the countData to more than maxCount
			wrapper.findAll('div').at(2).trigger('click');
			expect(wrapper.vm.countData).toBe(6);
			wrapper.find('input[type="number"]').setValue(wrapper.vm.countData);
			expect(Number(wrapper.find('input[type="number"]').element.value)).toBe(6);
			expect(wrapper.findAll('div').at(0).find('path').attributes('fill', '#000'));
			expect(wrapper.findAll('div').at(2).find('path').attributes('fill', '#CCC'));

			// Decrement the count by 1
			wrapper.findAll('div').at(1).trigger('click');
			expect(wrapper.vm.countData).toBe(5);
			wrapper.find('input[type="number"]').setValue(wrapper.vm.countData);
			expect(Number(wrapper.find('input[type="number"]').element.value)).toBe(5);
			expect(wrapper.findAll('div').at(0).find('path').attributes('fill', '#000'));
			expect(wrapper.findAll('div').at(2).find('path').attributes('fill', '#000'));

			// Decrement the count by 1 upto 1 which is the minCount
			wrapper.findAll('div').at(1).trigger('click');
			expect(wrapper.vm.countData).toBe(4);
			wrapper.findAll('div').at(1).trigger('click');
			expect(wrapper.vm.countData).toBe(3);
			wrapper.findAll('div').at(1).trigger('click');
			expect(wrapper.vm.countData).toBe(2);
			wrapper.findAll('div').at(1).trigger('click');
			expect(wrapper.vm.countData).toBe(1);
			wrapper.find('input[type="number"]').setValue(wrapper.vm.countData);
			expect(Number(wrapper.find('input[type="number"]').element.value)).toBe(1);
			expect(wrapper.findAll('div').at(0).find('path').attributes('fill', '#CCC'));
			expect(wrapper.findAll('div').at(2).find('path').attributes('fill', '#000'));

			// Decrement the count by 1, which will try and set the countData to less than minCount
			wrapper.findAll('div').at(1).trigger('click');
			expect(wrapper.vm.countData).toBe(1);
			wrapper.find('input[type="number"]').setValue(wrapper.vm.countData);
			expect(Number(wrapper.find('input[type="number"]').element.value)).toBe(1);
			expect(wrapper.findAll('div').at(0).find('path').attributes('fill', '#CCC'));
			expect(wrapper.findAll('div').at(2).find('path').attributes('fill', '#000'));
		});
	});
});