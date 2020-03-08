import React from 'react';
import Uploader from './components/Uploader/Uploader';
import Graph from './components/Graph/Graph';
import Grah2D from './components/2DGraph/2DGraph';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datax: [],
            datay: [],
            dataz: [],
        }
        this.myCallback=this.myCallback.bind(this);
      }

  myCallback(xdata, ydata, zdata){
    this.setState({datax: xdata, datay: ydata, dataz:zdata})
  }

  render() {
    return (
      <div className="page">
        <div className="smallcol">
          <Uploader callbackData={this.myCallback}></Uploader>
        </div>
        <div className="bigcol">
        <div className="grid-container">
        <Graph xdata={this.state.datax} ydata={this.state.datay} zdata={this.state.dataz}></Graph>
        <Grah2D xdata={this.state.datax} ydata={this.state.datay} title={"XY Track"}></Grah2D>
        <Grah2D xdata={this.state.datax} ydata={this.state.dataz} title={"XZ Track"}></Grah2D>
        <Grah2D xdata={this.state.datay} ydata={this.state.dataz} title={"YZ Track"}></Grah2D>
        </div>
        </div>
      </div>
    );
  }
}

export default Home;