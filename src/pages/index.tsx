import Head from 'next/head'
import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'
import { services } from '../../data'
import Services from './components/ServiceCard'
import ServiceCard from './components/ServiceCard'

// console.log(services);

const  Index =() =>  {
  
  return (
    <div className='flex flex-col flex-grow px-[1.5em] pt-[0.25em]'>
     <h5 className='my-[0.25em] font-medium text-justify '>
     Meet <b>Toufiq</b>, a versatile and talented software developer with a passion for creating innovative solutions to complex problems. With over 2 years of experience in the industry, Toufiq has a proven track record of delivering high-quality projects on time and within budget.
     <br />
      He is skilled in a variety of programming languages such as <b>JavaScript</b>,<b> PHP</b> and has experience working with a range of frameworks and technologies including <b>React</b>, <b>Next</b>, <b>BootStrap</b>, <b>Tailwind</b> & <b>Node.js</b>.
      
     </h5>
     <div className='p-[1em] mt-[1.25em] bg-gray-400 dark:bg-dark-100' style={{marginLeft: "-1.5rem", marginRight: "-1.5rem" }}>
      <h6 className='my-[0.75em] text-[0.75rem] font-bold tracking-wide'>What I Offer</h6>
      <div className='grid lg:grid-cols-2 gap-[1.5em]'>
        {
          services.map(service => (
        
              <ServiceCard key={service.id} service={service}/>
              
          ))}
      </div>
     </div>
    </div>
  )
}
export default Index


