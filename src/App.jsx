import { motion } from "framer-motion"
import images from "./images"
import { useEffect, useRef, useState } from "react";
function App() {

  const [width, setWidth] = useState(0)

  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <>
      <div className="mx-[20%] my-[10%]">

        <motion.div ref={carousel} className="carousel overflow-hidden ">
          <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="inner_carousel flex ">
            {images.map((image, i) => (
              <motion.div key={i} className="item min-w-[30rem] min-h-[40rem] p-[40px]  cursor-grab">
                <img src={image} alt="" className="w-full h-full rounded-md pointer-events-none" />
              </motion.div>

            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default App
