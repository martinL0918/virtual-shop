'use strict';

const div1ele = <h1>Hello World</h1>;


class Hello extends React.Component{
    refresh(){
        location.reload(true);
    }
    render(){

        return (
        <div >
            <h1>Hello World</h1>
        </div>
        
        )
    }
}

ReactDOM.render(<Hello />, document.getElementById('div1'));