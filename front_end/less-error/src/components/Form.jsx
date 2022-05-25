import React, { Component } from 'react'
import zip1 from '../downloadableFiles/._zip_2MB.zip';
import zip2 from '../downloadableFiles/._zip_5MB.zip';
import zip3 from '../downloadableFiles/._zip_9MB.zip';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: zip1,
        }
    }

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
    
  render() {
      const { selectedFile } = this.state;
    return (
      <div>
          <input type="radio" name="file" id="file1" value={1} /> React <br />
          <input type="radio" name="file" id="file1" value={2} /> Angular<br />
          <input type="radio" name="file" id="file1" value={3} /> StencilJs<br />

          <a href={selectedFile} download="boilerplate.zip">Download File </a>
      </div>
      
    )
  }
}
