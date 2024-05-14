import { motion } from "framer-motion"
import { useState } from "react";
function App() {

  const [open, setIsOpen] = useState(false);


  return (
    <>
      <div className="w-screen h-screen bg-slate-600">

        <div className="px-[20%] py-[10%] flex justify-center items-center">
          <motion.div layout transition={{ layout: { duration: 1.5, type: "spring", bounce: "0.2", damping: "15" } }} onClick={() => setIsOpen(!open)} className="card bg-white p-8 rounded-lg cursor-pointer">
            <motion.h2 layout="position" className="text-[24px] font-bold">Title</motion.h2>
            {
              open &&
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="mt-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aliquam labore fugiat! Voluptates quisquam et unde architecto cumque, nobis quis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quaerat!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aliquam labore fugiat! Voluptates quisquam et unde architecto cumque, nobis quis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quaerat!</p>
              </motion.div>
            }
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default App
