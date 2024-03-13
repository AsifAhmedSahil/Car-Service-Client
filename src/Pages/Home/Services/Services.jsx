import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
    const [services,setServices] = useState([])

    useEffect(() =>{
        fetch("http://localhost:5000/services")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
  return (
    <div className='mt-20'>
        <div className='text-center space-y-5'>
      <h2 className='text-2xl font-bold text-orange-500'>Our Services</h2>
      <h2 className='text-5xl font-bold'>Our Services Area</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quod ullam quasi. Incidunt fuga distinctio temporibus impedit magni inventore <br /> doloremque quas! Aperiam at hic ipsum? Vitae corrupti possimus qui nostrum quibusdam.</p>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
        {
            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
        }
    </div>
    </div>
  )
}

export default Services
