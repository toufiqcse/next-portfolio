import React from 'react';
import { languageSkill, tools } from '../../data';
import SkillBar from './components/SkillBar';

const resume = () => {
    return (
        <div className='p-5 py-2'>
            {/* education & exp */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className='mb-3 mt-1 text-2xl font-bold '>Experience</h5>
                    <div>
                      
                        <p className='my-2 text-xl font-bold'>Frontend Web Developer</p>
                        <p className='my-3 '>Off-Carry (2019-Present) Project Assistant</p>
                        
                        

                    </div>
                </div>
                <div>
                    <h5 className='mb-3 mt-1 text-2xl font-bold'>Education</h5>
                    <div>
                        <h5 className='my-2 text-xl font-bold'>Computer science Engineering</h5>
                        <p className='font-semibold'>Dhaka International University</p>
                        <p className='my-3 '>I am currently pursuing B. tech in computer science Engineering</p>

                    </div>
                </div>
            </div>

            {/* language & tools */}
            <div className='grid gap-6 md:grid-cols-2'>
                <div>
                    <h5 className='my-3 text-2xl font-bold '>Language & Frameworks</h5>
                    <div className='my-2'>
                        {
                            languageSkill.map(lang => <SkillBar key={lang.id} data={lang}/>)
                        }
                    </div>
                </div>
                {/* tools */}
                <div>
                    <h5 className='my-3 text-2xl font-bold '>Tools</h5>
                    <div className='my-2'>
                        {
                            tools.map(tool => <SkillBar key={tool.id} data={tool}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default resume;