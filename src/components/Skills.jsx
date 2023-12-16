import React from 'react';
import "./skills.css";
import mongo from './assets/mongo.png';
import react from "./assets/react.png";
import express from "./assets/express.svg";
import node from "./assets/node.png";
import html from "./assets/html.png";
import css from "./assets/css.png";
import javas from "./assets/javascript.png";
import java from "./assets/java.png";



export default function Skills() {
  return (
    <div id='Skills'>
    <div  className='skill'>
      <div className='skillHead'>
        <h1>SKILLS</h1>
      </div>


      <div className='firstRow rownum'>
        <div className='row'>
          <img src={mongo} alt='' />
          <h3>Mongo DB</h3>
        </div>
        <div className='row'>
          <img src={react} alt='' />
          <h3>ReactJS</h3>
        </div>
        <div className='row'>
          <img className='exp' src={express} alt='' />
          <h3>ExpressJS</h3>
        </div>
        <div className='row'>
          <img src={node} alt='' />
          <h3>NodeJS</h3>
        </div>
      </div>
      <div className='secondRow rownum' >
        <div className='srow row'>
          <img src={html} alt='' />
          <h3>Html</h3>
        </div>
        <div className='srow row'>
          <img src={css} alt='' />
          <h3>Css</h3>
        </div>
        <div className='srow row'>
          <img src={javas} alt='' />
          <h3>Javascript</h3>
        </div>



      </div>
      <div className='thirdRow rownum'>
        <div className='trow row'>
          <img src={java} alt='' />
          <h3>Java</h3>
        </div>



      </div>




    </div>
    </div>
    
  )
}
