const navele = <h1>Hello nav</h1>;


class nav extends React.Component{
    refresh(){
        location.reload(true);
    }
    render(){

        return (
        <div>
            <h1>Hello nav</h1>
        </div>
        
        )
    }
}

ReactDOM.render(<nav />, document.getElementById('nav'));