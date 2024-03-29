import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import Feedbackitem from "./Feedbackitem"
import FeedbackContext from '../context/FeedbackContext'


function FeedbackList() {
  const {feedback} = useContext(FeedbackContext) 
  // console.log(feedback)

  if(!feedback || feedback.length === 0){
    return <p>No FeedBAck Yet</p>
  }
  // return (
  //   <div  className='feedback-list'>
  //     {feedback.map((item) => (
  //       <Feedbackitem key={item.id} item={item}
  //         handleDelete={handleDelete} 
  //       />
  //     ))}
  //   </div>
  // )

  return (
    <div  className='feedback-list'>
      <AnimatePresence>
      {feedback.map((item) => (
        <motion.div 
            key={item.id}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            >
           
          <Feedbackitem key={item.id} item={item}
          
          />
        </motion.div>
      ))}
      </AnimatePresence>
    </div>
  )
}

// FeedbackList.prototypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired
//     })
//   )
// }

export default FeedbackList