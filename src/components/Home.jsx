import React ,{useState,useEffect} from 'react';
import img from './pic.jpg';

import "./home.css";



const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
const avi =text.length;
  useEffect(() => {
    if (currentIndex < avi) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }else if(currentIndex===avi){
          const timeout =setTimeout(()=>{
            setCurrentText((prevText)=>prevText.slice(-1,''));
            
            setCurrentIndex((prevIndex) => prevIndex - prevIndex);
            
          },delay);
          return () => clearTimeout(timeout);
        }
  }, [currentIndex, delay, text,avi]);



  return <span>{currentText}</span>;
};








// Your Typewriter component goes here

const Home = (props) => {
  return (
    
      <div id='Home' className='home'>
        <div className='leftHome'>
          <h3>Welcome to my Portfolio</h3>
          <h1>Hi! I'm Avanish W<Typewriter text="eb Developer"  delay={200}  /></h1>
          <p>I have worked on numerous web development projects and have demonstrated my years of expertise and skill in those projects. </p>
        </div>
        <div className='rightHome'>
          <img className='homeImg' src={img} alt='' />
        </div>
      </div>
    
  );
};

export default Home;

