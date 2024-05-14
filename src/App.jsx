import { motion } from "framer-motion"

function App() {
  const articles = [
    { id: 1, color: "red", text: "this is my description." },
    { id: 1, color: "red", text: "this is my description." },
    { id: 1, color: "red", text: "this is my description." },
    { id: 1, color: "red", text: "this is my description." },
    { id: 1, color: "red", text: "this is my description." },
    { id: 1, color: "red", text: "this is my description." },
    { id: 1, color: "red", text: "this is my description." },
    { id: 1, color: "red", text: "this is my description." },
    { id: 1, color: "red", text: "this is my description." },
    { id: 1, color: "red", text: "this is my description." },
    { id: 1, color: "red", text: "this is my description." },
    { id: 1, color: "red", text: "this is my description." },

  ]
  return (
    <>
      <div className="grid grid-cols-6 p-20 gap-5">

        {articles.map((article, i) => {
          return (
            <motion.div key={article.id} className=" col-span-1 sm:col-span-3 flex justify-center items-center bg-slate-500 rounded-2xl text-white py-32"
              initial={{ opacity: 0, translateX: -150, translateY: -100 }}

              animate={{ opacity: 1, translateX: 0, translateY: 0 }} transition={{
                duration: 0.1, delay: i * 0.1
              }}>
              <h3>
                {article.text}
              </h3>
            </motion.div>
          )
        })}

      </div>
    </>
  )
}

export default App
