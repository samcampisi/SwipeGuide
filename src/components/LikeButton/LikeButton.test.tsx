import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { toHaveStyle } from '@testing-library/jest-native';
import LikeButton from './LikeButton';

describe('LikeButton', () => {
  expect.extend({ toHaveStyle });

  const initialProps = {
    testID: 'buttonIcon',
  };

  it('renders correctly', () => {
    const props = { ...initialProps };

    const { getByTestId } = render(<LikeButton testID={props.testID} />);

    expect(getByTestId(props.testID)).toBeDefined;
  });

  it('fires the onPress call', () => {
    const mockFn = jest.fn();

    const props = {
      ...initialProps,
      onPress: mockFn,
    };

    const { getByTestId } = render(
      <LikeButton testID={props.testID} onPress={props.onPress} />,
    );

    fireEvent.press(getByTestId(props.testID));

    expect(mockFn).toBeCalledTimes(1);
  });

  it('renders correctly with other props', () => {
    const customStyle = { backgroundColor: 'red' };
    const props = { ...initialProps, text: 'Test text', style: customStyle };

    const { getByTestId, getByText } = render(
      <LikeButton
        testID={props.testID}
        style={props.style}
        text={props.text}
      />,
    );

    expect(getByText(props.text)).toBeDefined;
    expect(getByTestId(props.testID)).toHaveStyle(customStyle);
  });
});
