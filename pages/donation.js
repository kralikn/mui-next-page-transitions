import { Container, Typography, Stack } from '@mui/material';
import { motion } from "framer-motion"

const Donation = () => {
  return (
    <Container
      maxWidth={false}
      component={motion.div}
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      transition={{ duration: 0.75, ease: 'easeOut'}}
      exit={{ opacity: 1 }}
      sx={{ position: 'absolute', top: 0, widht: '100%', height: '100%', backgroundColor: '#79BEEE' }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ height: '100%'}}
        >
        <Typography variant="h4" component="h1" gutterBottom>
          Donation
        </Typography>
      </Stack>
    </Container>
  )
}

export default Donation