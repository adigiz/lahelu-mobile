import { render } from '@testing-library/react-native';
import React from 'react';

import PostTag from '@/components/PostTag';

describe('PostTag', () => {
    it('should matches the snapshot with the "sawer" tag', () => {
        const { toJSON } = render(<PostTag tag="sawer" />);

        expect(toJSON()).toMatchSnapshot();
    });

    it('should matches the snapshot with a generic tag', () => {
        const { toJSON } = render(<PostTag tag="generic" />);
        
        expect(toJSON()).toMatchSnapshot();
    });
});
