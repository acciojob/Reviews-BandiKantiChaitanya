import { normalizeSourceMap } from 'css-loader/dist/utils';
import React, { useState } from 'react'

function Review({data}) {
    let [index,setIndex]=useState(0)
    const { id, name, job, image, text } = data[index];

    function checkIndex(number) {
        if (number < 0) {
          return data.length-1; 
        } else if (number >= data.length) {
          return 0; 
        }
        return number;
      }

      function handlePrevious() {
        setIndex((index) => checkIndex(index - 1));
      }
      
      function handleNext() {
        setIndex((prevIndex) => checkIndex(prevIndex + 1));
        // setIndex(index+1)
        // console.log(index)
      }

      function handleRandom(){
        let number=Math.floor(Math.random()*data.length)
        
        while(number===index){
             number=Math.floor(Math.random()*data.length)
        }
        setIndex(number)
      }

  return (
    <div>
        {
            // data.map((list,index)=>(
                <div className='review' >
                <img src={image} className='person-img'  style={{height:'100px',width:'auto'}} />
                <h3 className="author" id={`author-${id}`} >{name}</h3>
                <p className="job">{job}</p>
                <p className="info">{text}</p>
                <div style={{display:'flex',justifyContent:'space-between'}}  >
                <button className="prev-btn" onClick={handlePrevious} >Previous</button>
                  <button className="random-btn"  onClick={handleRandom} >surprise me</button>
                  <button className="next-btn"  onClick={handleNext}  >Next</button>
                 {/* <button className="next-btn"  onClick={()=>{handleNext(index)}} disabled={index>=data.length-1} >Next</button> */}
                </div>
                </div>
            // ))
        }
        
    </div>
  )
}

export default Review