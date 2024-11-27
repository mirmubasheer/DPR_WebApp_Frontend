import React from 'react'
import Box from '@mui/material/Box';
import { Container, Grid, Typography } from '@mui/material';
import  agent1  from '../../assets/images/agent1.jpg';
import  agent2  from '../../assets/images/agent2.png';

const agents = [
  {
    image: agent1,
    title: "Arlene McCoy",
    subTitle: "Broker",
   
  },
  {
    image: agent2,
    title: "Arlene McCoy",
    subTitle: "Broker",
   
  },
  {
    image: agent1,
    title: "Arlene McCoy",
    subTitle: "Broker",
   
  },
]

const Agents:React.FC = () => {
  return (
    <Box sx={{background:'white', padding:'30px 0'}}>
      <Container>
        
          <h1>Our Exclusive Agents</h1>
          <Typography variant='caption'>
              Aliquam lacinia diam quis lacus euismod
          </Typography>
            <Box>
              <Grid container spacing={4} mt={1} pb={8}>
                {agents.map((agent, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index} textAlign="center">
                    <img src={agent.image} alt={agent.title} style={{ width: '100%', height: 'auto' ,borderRadius:'10px'}} />

                    <Box mt={2}>
                      <Typography variant="h6">{agent.title}</Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {agent.subTitle}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>


      </Container>
    </Box>
  )
}

export default Agents
