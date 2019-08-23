import React from 'react';
import './Test.css';
var myStyle={
  fontSize:100,
  color:'red'
}
var arr = [
  <h1>test1</h1>,
  <h2>test2</h2>
];
function Test() {
  return (
    <div style={myStyle}>
        Test
    </div>
  );
}
export default Test;
