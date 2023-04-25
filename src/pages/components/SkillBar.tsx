import React, { FunctionComponent } from 'react';
import { ISkill } from '../../../types';

const SkillBar:FunctionComponent<{
   data: ISkill
}> = ({data:{Icon,level,name}}) => {
    return (
        <div className='my-[0.5em] text-white bg-gray-300 dark:bg-dark-200 rounded-full dark:bg-black-500'>
            <div className='flex items-center px-[1em] py-[0.25em] rounded-full bg-gradient-to-r from-green to-blue-500'
             style={{
                width: level,
             }}
            >
                <Icon  className='mr-[0.75em]'/> 
                {name}
                
            </div>
        </div>
    );
};

export default SkillBar;