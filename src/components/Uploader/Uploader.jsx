import React, { Component } from 'react';
import './Uploader.css';
import Table from '../Table/Table';
import XLSX from 'xlsx';
import { make_cols } from './MakeColumns';

class Uploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      file: [],
      data: [],
      cols: [],
      tableobj: [],
      filename: "",
    }
    this.handleFile = this.handleFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    document.getElementById("loadbtn").disabled = true;
  }

  handleChange(e) {
    const files = e.target.files;
    if (files && files[0]) this.setState({ file: files[0], filename: files[0].name });
    e.target.value = null;
    document.getElementById("loadbtn").disabled = false;
  };

  handleFile() {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;

    reader.onload = (e) => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array', bookVBA: true });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws);

          /* Update state */
          this.setState({ data: data, tableobj: data, file: [], cols: make_cols(ws['!ref']) }, () => {
          });
          console.log(data);
      let datax = [];
      let datay = [];
      let dataz = [];
      for(let i = 0; i<data.length; i++){
        datax.push(data[i].x);
        datay.push(data[i].y);
        dataz.push(data[i].z);
      }
      this.props.callbackData(datax, datay, dataz);
    };

    if (rABS) {
      reader.readAsBinaryString(this.state.file);
    } else {
      reader.readAsArrayBuffer(this.state.file);
    };
    document.getElementById("loadbtn").disabled = true;
  }


  render() {

    return (
      <div className="wrapper">
        <input type="file" id="file" onChange={this.handleChange} />
        <label for="file">choose a file</label>
        <button type='submit' className="btnuppage" id="loadbtn" onClick={this.handleFile}>load</button>
        <Table data={this.state.tableobj} title={"DATA"} />
      </div>

    )
  }
}

export default Uploader;