import * as React from 'react';
import {useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import {getArchives} from "../services/archive-service";
import {Stack} from "@mui/material";

const sidebar = {
  title: "About",
  description:
      "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  socialNetworks: [
    {name: "GitHub", icon: GitHubIcon},
    {name: "Twitter", icon: TwitterIcon},
    {name: "Facebook", icon: FacebookIcon},
  ]
};

export default function Sidebar() {
  const [archives, setArchive] = React.useState([]);

  useEffect(() => {
    getArchives().then(response => {
      setArchive(response);
    })
    .catch(error => console.log(error))
  }, []);

  return (
      <Grid item xs={12} md={4}>
        <Paper elevation={0} sx={{p: 2, bgcolor: 'grey.200'}}>
          <Typography variant="h6" gutterBottom>
            {sidebar.title}
          </Typography>
          <Typography>{sidebar.description}</Typography>
        </Paper>
        <Typography variant="h6" gutterBottom sx={{mt: 3}}>
          Archives
        </Typography>
        {archives.map((archive) => (
            <Link display="block" variant="body1" href={archive.url}
                  key={archive.title}>
              {archive.title}
            </Link>
        ))}
        <Typography variant="h6" gutterBottom sx={{mt: 3}}>
          Social
        </Typography>
        {sidebar.socialNetworks.map((network) => (
            <Link
                display="block"
                variant="body1"
                href="#"
                key={network.name}
                sx={{mb: 0.5}}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <network.icon/>
                <span>{network.name}</span>
              </Stack>
            </Link>
        ))}
      </Grid>
  );
}
