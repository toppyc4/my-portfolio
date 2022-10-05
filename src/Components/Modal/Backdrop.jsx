import { motion } from "framer-motion"

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      className='absolute height-full width-full bg-#000000 flex align-center justify-center'
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}

export default Backdrop
