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
});
