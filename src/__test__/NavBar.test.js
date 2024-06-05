// Navbar.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for the extra matchers
import Navbar from '../component/Navbar';
import { act } from 'react';

describe('Navbar Component', () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  test('renders the brand name Ivee', () => {
    expect(screen.getByText('Ivee')).toBeInTheDocument();
  });

  test('renders navigation items', () => {
    expect(screen.getByText('Pricing')).toBeInTheDocument();
    expect(screen.getByText('Log In')).toBeInTheDocument();
    expect(screen.getByText('Start Free Trial')).toBeInTheDocument();
  });

  test('adds navbar-centered class on scroll', () => {
    const navbar = screen.getByText('Ivee').closest('.navbar-section');

    // Use act to wrap state-changing operations
    act(() => {
      // Simulate scroll event
      fireEvent.scroll(window, { target: { scrollY: 100 } });
    });

    // Check if navbar-centered class is added
    expect(navbar).toHaveClass('navbar-centered');
  });

  test('removes navbar-centered class when scrolled back to top', () => {
    const navbar = screen.getByText('Ivee').closest('.navbar-section');

    // Use act to wrap state-changing operations
    act(() => {
      // Simulate scroll event to add class
      fireEvent.scroll(window, { target: { scrollY: 100 } });
    });
    expect(navbar).toHaveClass('navbar-centered');

    act(() => {
      // Simulate scroll event to top
      fireEvent.scroll(window, { target: { scrollY: 0 } });
    });
    expect(navbar).not.toHaveClass('navbar-centered');
  });
});
