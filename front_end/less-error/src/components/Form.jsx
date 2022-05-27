import React, { Component } from 'react'
import zip1 from '../downloadableFiles/._zip_2MB.zip';
import zip2 from '../downloadableFiles/._zip_5MB.zip';
import zip3 from '../downloadableFiles/._zip_9MB.zip';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            frontEnd: '',
            backEnd:'',
            result:zip3
        }
    }
    fetch() {
        return new Promise(resolve => setTimeout(() => resolve(42), 1000));
      }
    fetchAPI=(frontEnd,backEnd)=>{
        debugger
        // param is a highlighted word from the user before it clicked the button
        return fetch("http://localhost:5000/?param=" + frontEnd+backEnd);
      }
    downloadFile = (e) => {
        debugger
        this.setState({
            result : zip2,
        });
      };
    onButtonClick = (e) => {
        const { value } = e.target;
        switch (value) {
            case 1:
                this.setState({
                    selectedFile: zip1,
                });
                break;
            case 2:
                this.setState({
                    selectedFile: zip2,
                });
                break;
            case 3:
                this.setState({
                    selectedFile: zip3,
                });
                break;

            default:
                alert('File Not Found');
                break;
        }
        this.setState({
            selectedFile: e.target.value,
        });
    }
    
    onFrontEnd=(e)=>{
        debugger
        this.setState({
            frontEnd: e.target.value,
        });
    }
    onBackEnd=(e)=>{
        debugger
        this.setState({
            backEnd: e.target.value,
        });
    }
  render() {
      const { frontEnd,backEnd,result } = this.state;
    return (
      <div>
          <input
                type="radio"
                name="frontend"
                value={'React'}
                onChange={this.onFrontEnd}
            /> React<br />
          <input
                type="radio"
                name="frontend"
                value={'Angular'}
                onChange={this.onFrontEnd}
            /> Angular<br />
          <input
                type="radio"
                name="frontend"
                value={'StencilJs'}
                onChange={this.onFrontEnd}
            /> StencilJs<br />
            <br/>
            <br/>
         <input
                type="radio"
                name="backend"
                value={'Java'}
                
                onChange={this.onBackEnd}
            /> Java<br />
         <input
                type="radio"
                name="backend"
                value={'.net'}
                
                onChange={this.onBackEnd}
            /> .Net<br />
          <input
                type="radio"
                name="backend"
                value={'nodejs'}
                
                onChange={this.onBackEnd}
            /> Nodejs<br />

          <a href={result} className="btn btn-danger" onClick={this.downloadFile} download="boilerplate.zip">Download File </a>
          <br />
         
          <h1>{this.state.frontEnd}</h1>
          <br />
          <h1>{this.state.backEnd}</h1>
          
      </div>
      
    )
  }
}
