import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import './NavBar.css';

/**
 * Navigation bar component.
 */
class NavBar extends React.Component {
    render() {
        return (
            <header className="NavBar">
                <Grid container direction="row" alignItems="center">
                    <Grid>
                        <img src={this.props.companyLogo} alt="companyLogo" className="CompanyLogo"/>
                    </Grid>
                    <Grid className="NavBarGrid" >
                        {this.props.tabs.map((tab, index) => (
                            <Link to={'/' + tab[index+1].link} className="NavBarLink" key={index}>
                                {tab[index+1].title}
                            </Link>
                        ))}
                    </Grid> 
                </Grid>
            </header>
        )
    }
}

export default NavBar