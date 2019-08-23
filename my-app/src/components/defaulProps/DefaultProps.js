import React from 'react';
export default class DefaultProps extends React.Component{
    render(){
        return(
            <h1>{this.props.name}</h1>
        );
    }
}
DefaultProps.defaultProps={
    name:'Runoob'
}
