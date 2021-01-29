import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {

    // Renders app component
    render(<App />);

    // Expects that the 'learn react' link element is displayed
    const learnLinkElement = screen.getByText(/learn react/i);
    expect(learnLinkElement).toBeInTheDocument();

    // Expects that the 'Contact Us' link element is displayed
    const contactLinkElement = screen.getByText(/contact us/i);
    expect(contactLinkElement).toBeInTheDocument();

    // Expects that the navigation bar tab link elements are displayed;
    const tabOneLinkElement = screen.getByText(/tab one/i);
    expect(tabOneLinkElement).toBeInTheDocument();
    const tabTwoLinkElement = screen.getByText(/tab two/i);
    expect(tabTwoLinkElement).toBeInTheDocument();
    const tabThreeLinkElement = screen.getByText(/tab three/i);
    expect(tabThreeLinkElement).toBeInTheDocument();
    const tabFourLinkElement = screen.getByText(/tab four/i);
    expect(tabFourLinkElement).toBeInTheDocument();
});
