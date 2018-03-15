class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleSub = this.handleSub.bind(this);
        this.state = {
            count : 0
        }
    }

    handleAdd(){
        this.setState((prevState) => {
            return {
                count : prevState.count + 1
            }
        })
    }

    handleSub(){
        this.setState((prevState) => {
            return {
                count : prevState.count - 1
            }
        })
    }

    handleReset(){
        this.setState(() => {
            return {
                count : 0
            }
        })
    }

    render(){
        return(
            <div>
            <h1>Count : {this.state.count} </h1>
            <button onClick = {this.handleAdd}>+1</button>
            <button onClick = {this.handleReset}>Reset</button>
            <button onClick = {this.handleSub}>-1</button>
            </div>
        )
    }

}

ReactDOM.render(<Counter />,document.getElementById('first'));