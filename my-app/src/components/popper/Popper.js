import React from 'react';
export default class Popper extends React.Component{
    constructor(){
        super();
        this.state={name:'hello world'};
    }
    preventPop(name,e){
        e.preventDefault();
        alert(name);
    }
    render(){
        return(
            <div>
            <a href='www.baidu.com' onClick={this.preventPop.bind(this,this.state.name)}>Click</a>
            </div>
        )
    }
}