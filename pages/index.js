import { Container, Typography, Stack } from '@mui/material';
import { motion } from "framer-motion"

export default function Index() {
  return (
    <Container
      maxWidth={false}
      component={motion.div}
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      transition={{ duration: 0.75, ease: 'easeOut'}}
      exit={{ opacity: 1 }}
      sx={{ position: 'absolute', top: 0, widht: '100%', height: '100%', display: 'flex', justifyContent: 'center', backgroundColor: '#B7D3F2' }}
    >
      <Container maxWidth="lg" sx={{ p: 2 }} >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ height: '100%', width: '100%'}}
        >
          <Typography>
            Call to action
          </Typography>
          <Typography>
            Image
          </Typography>
        </Stack>
      </Container>
    </Container>
  );
}