import React, { Component } from 'react';

class welcome extends Component {
    constructor(props){
        super(props);
        this.state={apiResponse:''}

    }
    callAPI(){
        fetch("http://localhost:5000/Api/getMessage")
        .then(res=>res.text())
        .then(res=>this.setState({
            apiResponse:res
        }));
    }
    componentDidMount(){
        this.callAPI()
    }
    render() {
        return (
            <div>
                <h1>{this.state.apiResponse}</h1>
            </div>
        );
    }
}

export default welcome;