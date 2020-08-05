import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { TASK_STATUS } from '../../../utils/constants'
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = {
    root: {
        borderLeft: "3px solid",
        margin: '10px 0',
        '&:first-of-type': {
            marginTop: 0
        },
        '&:last-of-type': {
            marginBottom: 0
        },
        [`&.${TASK_STATUS.ASSIGNED}`]: {
            borderLeftColor: '#f4be36'
        },
        [`&.${TASK_STATUS.COMPLETED}`]: {
            borderLeftColor: '#1339c5'
        },
        [`&.${TASK_STATUS.OPEN}`]: {
            borderLeftColor: 'limegreen'
        },
    }
}

const TaskCard = ({ task, classes }) => {

    return ( <Card id="cardicon" classes={{ root: classes.root }} className={task.status}>
        <Link to={task.id} style={{ root: classes.root }}>

        <CardContent id="cardcontent">
            <Typography variant="h6">
                {task.title}
            </Typography>
            <Typography variant="body1">
                {task.description}
            </Typography>
            <Typography variant="caption">
                Location: {task.location} <br />
            </Typography>
            <Typography variant="caption">
                Date Posted: {task.date} <br />
            </Typography>
            <Typography variant="caption">
                {task.caption} <br />
            </Typography>
            <hr />
            <Typography variant="caption">
                {task.status} - 1 offers
            </Typography>
        </CardContent>
        </Link>
    </Card> );
}

export default withStyles(styles)(TaskCard);
