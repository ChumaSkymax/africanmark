import React from 'react'
import { motion } from 'framer-motion'
import Title from '../Components/Title'
import { assets, CRDB, NationalBoard, QuickBooks, TanEA, TAWCA, TIIA, Tra, Xero } from '../assets/asset'



const partnersImages=[
    {
      patnerName:"crdb",
      image:CRDB,

    },
    {
      patnerName:"National Board",
      image:NationalBoard,

    },
    {
      patnerName:"Quick Books",
      image:QuickBooks,

    },
    {
      patnerName:"TanEA",
      image:TanEA,

    },
    {
      patnerName:"TIIA",
      image:TIIA,

    },
    {
      patnerName:"Tra",
      image:Tra,

    },
    {
      patnerName:"xero",
      image:Xero,

    },
    {
      patnerName:"twca",
      image:TAWCA,

    },


]

const Partners = () => {
  return (
    <motion.div 
      className='flex flex-col items-center 
      justify-center px-6 md:px-16 lg:px-24 xl:px-32 pt-34 pb-30'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
        <Title 
        title="Our Patners" 
        subTitle="We collaborate with trusted local and international partners"
        align="left"
        />

        <motion.div 
          className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {partnersImages.map((image, idx)=>(
            <motion.img 
              src={image.image} 
              alt={image.patnerName}
              className='w-50 h-50 max-sm:w-25 max-sm:h-25 border-1 border-gray-300 rounded-2xl shadow-xl mt-8 dark:border-primary cursor-pointer'
              key={idx}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            />
          ))}

        </motion.div>


    </motion.div>
  )
}

export default Partners