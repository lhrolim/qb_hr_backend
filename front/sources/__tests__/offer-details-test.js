import React from 'react';
import OfferDetailsScreen from '../src/screens/offer-details/offer-details-screen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<OfferDetailsScreen />).toJSON();
    expect(tree).toMatchSnapshot();
});