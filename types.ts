import { IconType } from "react-icons";
import { types } from "util";

export interface IService {
    id: number;
    Icon: IconType
    title: string;
    about: string;
}

export interface ISkill {
    id: number;
    name: string;
    level: string;
    Icon: IconType;
}

export interface ITools {
    id: number;
    name: string;
    level: string;
    Icon: IconType;
}


// export projects interface

// create types 
export type Category = "next"|  "react" | "node" | "express" | "mongo" | "django"; 

export interface IProjects {
    name: string,
    description: string;
    image_path: string;
    deployed_url: string;
    github_url: string;
    category: Category[];
    key_techs: string[];
    
    
    
}