import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Login from './containers/Login';
import SiteRoutes from './components/common/SiteRoutes';
import Nav from './components/navbar';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <SiteRoutes />
    </ChakraProvider>
  );
}

export default App;
