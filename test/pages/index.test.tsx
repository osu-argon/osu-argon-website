import React from 'react';
import { render, fireEvent } from '../testUtils';
import Index from '../../pages/index';

describe('Home page', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(<Index file={{}} />, {});
		expect(asFragment()).toMatchSnapshot();
	});

	it('clicking button triggers alert', () => {
		const { getByText } = render(<Index file={{}} />, {});
		window.alert = jest.fn();
		fireEvent.click(getByText('Test Button'));
		expect(window.alert).toHaveBeenCalledWith('With typescript and Jest');
	});
});
