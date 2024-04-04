import React, {useState} from 'react';
import './AnimatedCard.css';
import {motion} from 'framer-motion';

const AnimatedCard = () => {
 const [isExpand, setIsExpand] = useState(false);

  const animated = {
    layout: 'position',
    animate: {opacity: 1},
    transition: {delay: 0.3},
    initial: {opacity: 0},
  };

  return(
    <motion.div
      className='card'
      layout
      onClick={() => {setIsExpand(!isExpand)}}
      >
      <motion.h3 layout='position'>expandable card</motion.h3>
      <motion.p layout='position'>
        description 1
      </motion.p>
      {isExpand && (
        <>
        <motion.img {...animated} src='https://raw.githubusercontent.com/time-to-program/animated-expandable-card-react/main/public/images/img1.png' alt='demo-image' />
          <motion.p {...animated}>
          description 2
          </motion.p>
          <motion.div {...animated} className='btn-container'> 
            <motion.button
              onClick={() => setIsExpand(!isExpand)}> close
            
            </motion.button>
          </motion.div>
        </>
      )
      
      }
    
    </motion.div>
  );
  
};

export default AnimatedCard;