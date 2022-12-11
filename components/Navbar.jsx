import { Container, Stack, Typography, IconButton, Box, List, ListItem, ListItemText, ListItemButton, SwipeableDrawer } from '@mui/material'
import Link from 'next/link'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { deepOrange } from '@mui/material/colors';
import { useState } from 'react';

const Navbar = () => {

  const navigation = [
    {
      text: 'hogyan segíthetsz?',
      route: '/donation'
    },
    {
      text: 'rólunk',
      route: '/about'
    },
    {
      text: 'blog',
      route: '/blog'
    },
    {
      text: 'kapcsolat',
      route: '/contact'
    }
  ]

  const [drawerState, setDrawerState] = useState({ right: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerState({ ...drawerState, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: 275,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List >
        <ListItem disablePadding onClick={() => {
          toggleDrawer("right", false)
        }}>
          <ListItemButton>
            <Link href="/donation" passHref>
              <ListItemText primary="hogyan segíthetsz?" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => {
          toggleDrawer("right", false)
        }}>
          <ListItemButton>
            <Link href="/about" passHref>
              <ListItemText primary="rólunk" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => {
          toggleDrawer("right", false)
        }}>
          <ListItemButton>
            <Link href="/blog" passHref>
              <ListItemText primary="blog" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => {
          toggleDrawer("right", false)
        }}>
          <ListItemButton>
            <Link href="/contact" passHref>
              <ListItemText primary="kapcsolat" />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <Container maxWidth="lg" sx={{ zIndex: 3000, position: 'relative', p: 2 }} >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width='100%'
        spacing={2}
      >
        <Link href='/'>
          <Typography variant="h5">
            LOGO
          </Typography>
        </Link>
        <Stack sx={{ display: { xs: 'flex', md: 'none' }, backgroundColor: '#fff', borderRadius: '50%', cursor: 'pointer' }} >
          <IconButton aria-label="menu" onClick={toggleDrawer("right", true)} disableRipple disableElevation>
            <HiMenuAlt4 />
          </IconButton>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          spacing={4}
          sx={{ display: { xs: 'none', md: 'flex' } }}
        >
          {navigation.map((item) => (
            <Link href={`${item.route}`} key={item.route}>
              <Typography variant="button">
                {item.text}
              </Typography>
            </Link>
          ))}
        </Stack>
        <SwipeableDrawer
          anchor="right"
          open={drawerState["right"]}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
          sx={{ zIndex: 8888 }}
        >
          {list("right")}
        </SwipeableDrawer>
      </Stack>
    </Container>
  )
}

export default Navbar