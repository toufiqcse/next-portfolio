import React, { FunctionComponent } from 'react';
import { Category } from '../../../types';

const NavItem:FunctionComponent<{value:Category | 'all' , 
handleFilterCategory:Function, active:string}> = ({
    value,
    handleFilterCategory,
    active
}) => {

    let activeText = 'hover:text-green cursor-pointer capitalize duration-300' 
    if(active === value) {
        activeText += " text-green"
    }

    return (
        <li className= {activeText}
        onClick={() => handleFilterCategory(value)}>
            {value}
        </li>
    );
};




const ProjectNavbar: FunctionComponent<{handleFilterCategory:Function , active:string}> = (props) => {
    return (
        <div className='flex px-[0.75em] py-[0.5em] space-x-3 overflow-x-auto list-none'>
            <NavItem value='all' {...props}/>
            <NavItem value='react' {...props}/>
            <NavItem value='mongo' {...props}/>
            <NavItem value='django' {...props}/>
            <NavItem value='node' {...props}/>
            <NavItem value='next' {...props}/>
        </div>
    );
};

export default ProjectNavbar;