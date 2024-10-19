import { render } from '@testing-library/react-native';
import React from 'react';

import Post from '@/components/Post';

jest.mock('@/utils/date', () => ({
  timeAgo: jest.fn(() => "5 Jam yang lalu"),
}));

describe('Post', () => {
  const mockItem = {
    type: 'image',
    title: 'Example Post Title',
    user: {
      username: 'john_doe',
      image_url: 'https://example.com/user_image.png',
    },
    file_url: 'https://example.com/image.png',
    uploaded_date: new Date().toISOString(),
    tags: ['tag1', 'tag2', 'tag3'],
    analytics: {
      upvote: 120,
      total_comments: 34,
    },
  };

  it('should matches the snapshot', () => {
    const { toJSON } = render(<Post item={mockItem} isVisible={true} />);
    
    expect(toJSON()).toMatchSnapshot();
  });
});
