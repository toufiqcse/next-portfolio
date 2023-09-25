import React from "react";
import { languageSkill, tools } from "../../data";
import SkillBar from "./components/SkillBar";

const resume = () => {
  return (
    <div className="p-[1.25em] py-[0.5em]">
      {/* education & exp */}
      <div className="grid gap-[1.5rem] md:grid-cols-2">
        <div>
          <h5 className="mb-[0.75em] mt-[0.25em] text-[1.5rem] font-bold ">
            Experience
          </h5>
          <div>
            <p className="my-[0.5em] text-[1.25rem] font-bold">
              Frontend Web Developer & Digital Marketer
            </p>
            <p className="my-[0.75em] ">Off-Carry (2019-Present) Project CEO</p>
          </div>
        </div>
        <div>
          <h5 className="mb-[0.75em] mt-[0.25em] text-[1.5em] font-bold">
            Education
          </h5>
          <div>
            <p className="my-[0.5em] text-[1.25rem] font-bold">
              Diploma in Computer science
            </p>
            <p className="my-[0.75em] ">
              I am currently pursuing in computer science Engineering
            </p>
          </div>
        </div>
      </div>

      {/* language & tools */}
      <div className="grid gap-[1.5rem] md:grid-cols-2">
        <div>
          <h5 className="my-[0.5em] text-[1.25rem] font-bold ">
            Language & Frameworks
          </h5>
          <div className="my-[0.5em]">
            {languageSkill.map((lang) => (
              <SkillBar key={lang.id} data={lang} />
            ))}
          </div>
        </div>
        {/* tools */}
        <div>
          <h5 className="my-[0.75em] text-[1.25rem] font-bold ">Tools</h5>
          <div className="my-[0.5em]">
            {tools.map((tool) => (
              <SkillBar key={tool.id} data={tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
