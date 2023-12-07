import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";
import React from "react";

export default class AppClass extends React.Component{
  
  render(){
    let data=this.props.imageData();
    console.log(data)
    // code here
    return(
        <>
        <h1 className='heading'>kalvium gallary</h1>
      <div className='parent'>
        {
          data.map((e)=>{
            return(
              <img className='image' src={e.img}/>
            )
          })
        }
  
        
  
      </div>
  
      </> 
    )
  }
}
