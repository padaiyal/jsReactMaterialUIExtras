import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import './AppFooter.css';

/**
 * App footer component.
 */
class AppFooter extends React.Component {
 
    render() {
        return (
            <footer className="Footer">
                <Grid container direction="row">
                    <Grid>
                        {this.props.copyRightText}
                    </Grid>
                    <Grid className="ContactGrid">
                        <Link to={'/' + this.props.contactLink} className="ContactLink">
                            {this.props.contactText}
                        </Link>
                    </Grid>
                </Grid>
            </footer>
        )
    }

}

export default AppFooter