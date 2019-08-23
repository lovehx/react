import React from 'react'
function ActionLink(){
    function handleClick(e){
        e.preventDefault();
        console.log('链接被点击');
    }
    return (
        <a href='#' onClick={handleClick}>
        点我
        </a>
    )
}
export default ActionLink;