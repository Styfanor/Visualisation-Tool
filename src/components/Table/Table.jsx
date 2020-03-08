import React, { Component } from 'react';

import './Table.css';
export default class Table extends Component {
 
    constructor(props){
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
    }
    
    getKeys = function(){
        if(this.props.data[0] != null){
            return Object.keys(this.props.data[0]);
        }
        else{
            return null;
        }
    }
    
    getHeader = function(){
        if(this.props.data[0] != null){
        var keys = this.getKeys();
        return keys.map((key, index)=>{
        return <th key={key}>{key.toUpperCase()}</th>
        })
        }
        else{
            return null;
        }
    }
    
    getRowsData = function(){
        if(this.props.data[0] != null){
        var items = this.props.data;
        var keys = this.getKeys();
        return items.map((row, index)=>{
        return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
        })
        }
        else{
            return null;
        }
    }
    
    render() {

    let classtabel = 'tablebox';

    if (this.props.data[0] != null) {
        classtabel = 'tablebox show';
    }

    return (
    <div className={classtabel}>
    <table >
    <thead>
    <tr><th>{this.props.title}</th></tr>
    <tr>{this.getHeader()}</tr>
    </thead>
    <tbody>
    {this.getRowsData()}
    </tbody>
    </table>
    </div>
    );
    }
   }
   const RenderRow = (props) =>{
    return props.keys.map((key, index)=>{
        return <td key={props.data[key]}>{props.data[key]}</td>
        })
   }
   