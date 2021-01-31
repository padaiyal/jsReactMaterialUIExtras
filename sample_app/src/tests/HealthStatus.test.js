import { render, screen } from '@testing-library/react';
import HealthStatus from '../HealthStatus';

test('renders health status component', () => {

    // Service names and statuses provided 
    const services = [
        {
            1: {
                name: "Service One",
                status: true
            }   
        },
        {
            2: {
                name: "Service Two",
                status: true
            }   
        },
        {
            3: {
                name: "Service Three",
                status: false
            }    
        },
        {
            4: {
                name: "Service Four",
                status: true
            }    
        }
    ]

    // Renders health status component
    render(<HealthStatus services={services} height={500} width={500}/>);

    // Expects that the service name elements are displayed
    const serviceOneElement = screen.getByText(/service one/i);
    expect(serviceOneElement).toBeInTheDocument();
    const serviceTwoElement = screen.getByText(/service two/i);
    expect(serviceTwoElement).toBeInTheDocument();
    const serviceThreeElement = screen.getByText(/service three/i);
    expect(serviceThreeElement).toBeInTheDocument();
    const serviceFourElement = screen.getByText(/service four/i);
    expect(serviceFourElement).toBeInTheDocument();
});
