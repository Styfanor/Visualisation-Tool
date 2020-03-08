import React from 'react';
import Plot from 'react-plotly.js';

class Graph2D extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datax: [],
            datay: [],
            dataz: [],
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
            type: 'scatter',
            mode: 'lines+markers',
            marker: {size: 6,
                color: "#282c34"},
            line: {
                width: 2,
                color: "red"},
           },
        ]}
        layout={ {autosize: true, title: this.props.title} }
      />
    );
  }
}

export default Graph2D;