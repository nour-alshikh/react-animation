import { useState } from "react";
import ProductImage from "../../public/assets/product.png";
import { AnimatePresence, motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
//svgs
// import { Close } from "../../public/assets/close.svg";
// import { Chevron } from "../../public/assets/chevron.svg";
// import { DownArrow } from "../../public/assets/down-arrow.svg";

const Product = () => {

  const ease = [0.6, 0.05, -0.01, 0.99]

  const x = useSpring(0, { stiffness: 20, damping: 10, ease });

  const width = useTransform(x, [-1060, 0], [350, 0]);
  const scale = useTransform(x, [-100, 0], [1.3, 1]);
  const opacity = useTransform(x, [-100, 0], [1, 0]);
  const fadeOut = useTransform(x, [-60, 0], [0, 1]);
  const up = useTransform(x, [-100, 0], [-100, 1]);
  const down = useTransform(x, [-100, 0], [100, 1]);

  const [state, setState] = useState(false);

  useEffect(() => {
    x.onChange(() => {
      x.get() > -100 ? setState(false) : setState(true);
    })
  }, [x]);

  const targetElement = document.querySelector('html')

  useEffect(() => {
    state ? targetElement.classList.add('no-scroll') : targetElement.classList.remove('no-scroll')
  })


  const closeProductAnimation = () => {
    x.stop();
    x.set(0);
  }



  return (
    <div className='product'>
      <div className='product-inner'>
        <div className='product-content'>
          <motion.div style={{ translateY: up }} className='product-content-inner'>
            <h4>Freedom Everywhere</h4>
            <h1>HiFive1 Rev B</h1>
            <p>
              HiFive1 is a low-cost, Arduino-compatible development board
              featuring the Freedom E310. It’s the best way to start prototyping
              and developing your RISC‑V applications.
            </p>
            <div className='btn-row'>
              <button>Buy Now ($59)</button>
              {/* <DownArrow /> */}
              <img src="../../public/assets/down-arrow.svg" alt="" />
            </div>
          </motion.div>
        </div>
      </div>


      <div className='product-slide-enlarge'>

        <motion.div style={{ opacity }} className='background'></motion.div>

        {state &&
          <AnimatePresence>
            <motion.div animate={{ opacity: [0, 1], y: [-30, 0] }} exit={{ opacity: 0, y: -30 }} className='product-drag-header'>
              <div className='company-name'>HiFive1</div>
              <div className='close' onClick={closeProductAnimation}>
                <img src="../../public/assets/close.svg" alt="" />
                {/* <Close /> */}
              </div>
            </motion.div>
          </AnimatePresence>
        }

        <div className='product-container'>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -1060 }}
            dragElastic={0.05}

            style={{ x, scale }}
            className='product-image'>
            <img src={ProductImage} alt='product' />
          </motion.div>
        </div>


        <motion.div style={{ paddingBottom: down }} className='product-drag'>
          <div className='product-drag-inner'>
            <div className='product-drag-label'>
              <motion.h6 style={{ opacity: fadeOut, x }}>
                <img src="../../public/assets/chevron.svg" alt="" />
                {/* <Chevron /> */}
                Drag To Enlarge
              </motion.h6>
            </div>
            <div className='product-drag-progress-background'>
              <motion.div
                style={{ width }}
                className='product-drag-progress'></motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Product;
