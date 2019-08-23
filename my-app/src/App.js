import React from 'react';
import './App.css';
import HelloMessage from './components/helloMessage/HelloMessage';
import Clock from './components/clock/Clock';
import DefaultProps from './components/defaulProps/DefaultProps';
import MyTitle from './components/mytitle/MyTitle';
import PropTypes from 'prop-types';
import ActionLink from './components/actionLink/ActionLink';
import Toggle from './components/toggle/Toggle';
import Popper from './components/popper/Popper';
var data={
  name:'mary',
  age:19
}
var title=123
MyTitle.propTypes={
  title:PropTypes.number
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Popper></Popper>
        <Toggle></Toggle>
        <ActionLink></ActionLink>
        <HelloMessage data={data}/>
        <Clock></Clock>
        <DefaultProps/>
        <MyTitle title={title}></MyTitle>
        </header>
    </div>
  );
}
export default App;
