import React from 'react';
import './project.css';

export default function Projects() {
  return (
    <div id='Project' className='project'>
      <div className='projectHead'>
        <h1>Projects</h1>
      </div>
      <div className='p project1'>
        <h3 className='pname'>Travel Blog Website</h3>
        <p className='ppara'>Created a travel blog website using NEXT.JS and Tailwind CSS for sleek design and MONGODB for database
          management.
          
          </p>

      </div>
      <div className='p project2'>
        <h3 className='pname'>Artshop Website</h3>
        <p className='ppara'>Created a ecommerce website to sell paintings and artworks powered with NEXT.JS ensuring swift
          navigation and Tailwind CSS ensuring a visually enchanting interface that complements the artistry.</p>

      </div>
      <div className='p project3'>
        <h3 className='pname'>Anime Database Website</h3>
        <p className='ppara'>Anime Database Website which contains Reacts dynamic capabilities , and also harnessing the vast resources of Anime
API.</p>

      </div>


    </div>
  )
}
