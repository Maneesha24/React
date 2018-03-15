

class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.handleVisible = this.handleVisible.bind(this);
        this.name = 'Visibility Toggle';
        this.state = {
            visible : false
        };
        
    }
    handleVisible(){
       this.setState((prevState) => {
           return {
               visible : !prevState.visible
           }
       })
    }
    render(){
        return(
            <div>
            <h1>{this.name}</h1>
            <button onClick = {this.handleVisible}>{this.state.visible ? 'Hide Details': 'Show details'}</button>
            {
                (this.state.visible && (
                    <div>
                    <p>Hey!Have a nice day!</p>
                    </div>
                ))
            }
            </div>

        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById('first'));