import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import { fromSettings } from 'selectors';
import Routes from './Routes';


const AppWrapper = styled.div`
  font-family: sans-serif;
  height: 100vh;
  overflow: auto;
  user-zoom: fixed;
  font-size: ${props => `calc(1em + ${props.totalZoom}px)`} 
`;

function App(props) {
  return (
    <ThemeProvider theme={{}}>
      <AppWrapper>
        <Routes />
      </AppWrapper>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  theme: fromSettings.getTheme(state)
}); 

const mapDispatchToProps = () => ({
  // loadSettingsFromCookies
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
