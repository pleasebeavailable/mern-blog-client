import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {AiOutlineClose} from "react-icons/ai";

export default function Comment(props) {
  const {comment, onDelete} = props;

  return (
      <Grid className="comment">
        <Card sx={{display: 'flex'}}>
          <CardContent style={{display: "flex", flexDirection: "row"}}
                       sx={{flex: 1}}>
            <Typography variant="subtitle1" paragraph>
              {comment.comment}
            </Typography>
            <AiOutlineClose style={{position: 'absolute', right: "15%"}} onClick={onDelete}/>
          </CardContent>
        </Card>
      </Grid>
  );
}
