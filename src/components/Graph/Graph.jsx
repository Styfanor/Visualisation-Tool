import React from 'react';
import Plot from 'react-plotly.js';
import "./Graph.css";
class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
      }

  render() {
    return (
      
      <Plot
      useResizeHandler={true}
      style={{ width: '100%', height: '100%' }}
        data={[
          {
            x: this.props.xdata,
            y: this.props.ydata,
            z: this.props.zdata,
            type: 'scatter3d',
            mode: 'lines+markers',
            marker: {size: 3.5,
                color: "#282c34",
                cmin: -20,
                cmax: 50},
            line: {
                width: 6,
                color: "red"},
          },
        ]}
        layout={ { autosize: true, title: '3D Track'} }
        
      />
    );
  }
}

export default Graph;