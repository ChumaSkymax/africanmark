import React from 'react'
import { motion } from 'framer-motion'
import { client1, client2, client3, client4, client5, client6, client7, client8, client9, client10, client11, client12, client13, client14 } from '../../assets/asset'
import Title from '../Title'

const OurClients = () => {

const clientsImg = [
    { image: client1 },
    { image: client2 },
    { image: client3 },
    { image: client4 },
    { image: client5 },
    { image: client6 },
    { image: client7 },
    { image: client8 },
    { image: client9 },
    { image: client10 },
    { image: client11 },
    { image: client12 },
    { image: client13 },
    { image: client14 },
]
const CreateCard=({client})=>(
    <div className="p-1.5 rounded-lg mx-1.5 transition-all duration-200 w-32 md:w-40 shrink-0">
    <motion.img 
            src={client.image} 
            alt="Client logo"
            className='object-contain w-full h-auto border-1 border-gray-300 rounded-xl shadow-md p-3 bg-white dark:bg-white dark:border-gray-600 cursor-pointer'

          />
</div>
)

  return (
    <motion.div 
      className='flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 xl:px-32 pt-34 pb-30'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >

        
        <style>{`
            @keyframes marqueeScroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }

            .marquee-inner {
                display: flex;
                animation: marqueeScroll 65s linear infinite;
                will-change: transform;
            }

            .marquee-reverse {
                animation-direction: reverse;
            }
            
            .marquee-inner:hover {
                animation-play-state: paused;
            }
        `}</style>

        <Title  title="Our Clients" subTitle="We proudly work with a diverse range of businesses and organizations across Africa, delivering trusted solutions that help them grow and succeed."/>

            <div className="marquee-row w-full mx-auto max-w-7xl overflow-hidden relative mb-4">
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white dark:from-black to-transparent"></div>
                <div className="marquee-inner transform-gpu pt-10 pb-2" style={{ width: 'fit-content' }}>
                    {[...clientsImg, ...clientsImg].map((client, index) => (
                        <CreateCard key={`first-${index}`} client={client} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white dark:from-black to-transparent"></div>
            </div>
            <div className="marquee-row w-full mx-auto max-w-7xl overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white dark:from-black to-transparent"></div>
                <div className="marquee-inner marquee-reverse transform-gpu pt-2 pb-5" style={{ width: 'fit-content' }}>
                    {[...clientsImg, ...clientsImg].map((client, index) => (
                        <CreateCard key={`second-${index}`} client={client} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white dark:from-black to-transparent"></div>
            </div>
    
       
      </motion.div>

  )
}

export default OurClients