import React from 'react';
import TopNavigation from './COMPONENTS/TopNavigation';
import BottomNavigation from './COMPONENTS/BottomNavigation';
import Container from './PAGES/Container';
;


type Props = {};

const App = (props: Props) => {
  return (
    <div>
      <TopNavigation />
      <Container/>
      <BottomNavigation />
    </div>
  );
};

export default App;
