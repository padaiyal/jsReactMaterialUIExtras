import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

class HealthStatus extends React.Component {

    render() {
        const paperStyle = {
            width: this.props.width,
            height: this.props.height,
            overflow: "auto"
        };

        return (
            <div>
                <Typography variant="h4" align="left" style={{ padding: 30 }}>
                    Health
                </Typography>
                <Paper style={paperStyle}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="subtitle1" align="left" style={{ padding: 15 }}>
                                        Service Name
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="subtitle1" align="center" style={{ padding: 15 }} >
                                        Status
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.services.map((service, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <Typography style={{ padding: 15 }} variant="body2">
                                            {service[index+1].name}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        {service[index+1].status ?
                                            <FiberManualRecordIcon style={{ fontSize: "medium", color: "green" }}/>
                                            :
                                            <FiberManualRecordIcon style={{ fontSize: "medium", color: "red" }}/>
                                        }
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>    
                </Paper>  
            </div>
        )
    }
}

export default HealthStatus
