import { TypeAnimation } from "react-type-animation";

const AutoType = () => {
  return (
    <>
      <TypeAnimation
        sequence={[

          "I'm Frontend Web Developer",
          1000,
          "I'm Frontend Web Designer",
          1000,
          "I'm Digital Marketer",
          1000,

        ]}
        speed={30}
        deletionSpeed={50}
        style={{ fontSize: '0.9em' }}
        repeat={Infinity}
      />
    </>
  );
};

export default AutoType;
