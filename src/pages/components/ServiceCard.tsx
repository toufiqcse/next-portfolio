import React, { FunctionComponent } from "react";
import { IService } from "../../../types";

const ServiceCard: FunctionComponent<{ service: IService }> = ({
  service: { Icon, title, about },

}) => {

    const createMarkup = () => {
        return {
            __html: about,
        }
    }
  return (
    <div className= " flex items-center p-[0.5em] space-x-4 text-justify bg-gray-200 dark:bg-dark-200 rounded-lg lg:col-span-1 ">
      <Icon  className="w-[3rem] h-[3rem] text-green"/>

      <div>
        <p className="font-bold">{title}</p>
        <p dangerouslySetInnerHTML={createMarkup()}/>
        
        </div>
    </div>
  );
};

export default ServiceCard;
