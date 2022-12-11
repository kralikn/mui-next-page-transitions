import { Container, Typography, Stack } from '@mui/material';
import { motion } from "framer-motion"

const Blog = () => {
  return (
    <Container
      maxWidth={false}
      component={motion.div}
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      transition={{ duration: 0.75, ease: 'easeOut'}}
      exit={{ opacity: 1 }}
      sx={{ position: 'absolute', top: 0, widht: '100%', height: '100%', backgroundColor: '#84AFE6' }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ height: '100%'}}
        >
        <Typography variant="h4" component="h1" gutterBottom>
          Blog
        </Typography>
      </Stack>
    </Container>
  )
}

export default Blog