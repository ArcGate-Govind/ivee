import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Carousel from '../component/Carousel';

describe('Carousel Component', () => {
  test('renders without crashing', () => {
    const { getByAltText } = render(<Carousel />);
    const image = getByAltText('Scrolling Image');
    expect(image).toBeInTheDocument();
  });

  test('renders the correct image', () => {
    const { getByAltText } = render(<Carousel />);
    const image = getByAltText('Scrolling Image');
    expect(image).toHaveAttribute('src', 'https://framerusercontent.com/images/ErlxixldzrUICIrwES2M8gbujUc.png?scale-down-to=4096');
  });

  test('has the correct class for the image', () => {
    const { getByAltText } = render(<Carousel />);
    const image = getByAltText('Scrolling Image');
    expect(image).toHaveClass('scrolling-image');
  });

  test('renders a container and box with the correct classes', () => {
    const { container } = render(<Carousel />);
    const box = container.querySelector('.scroll-container');
    expect(box).toBeInTheDocument();
  });
});
