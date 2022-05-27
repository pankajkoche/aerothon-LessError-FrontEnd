import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The welcome message
   */
  @Prop() APIData:string;

  componentWillLoad(){
    this.APIData='loading...'
    fetch("http://localhost:5000/testAPI")
    .then(res=>{
      return res.text()
    }).then(res=>{
      const message =res;
      this.APIData=message;
    });
  }
  render() {
    return <div>
      <h1>{this.APIData}</h1>
    </div>;
  }
}
