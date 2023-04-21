<div className="px-5">
  <div className="flex flex-col gap-4 ">
    {projectsData.map((project) => (
      <div
        key={project.name}
        className="border-2  border-green my-3 w-full p-2"
      >
        <p className="font-bold text-xl mb-2">{project.name}</p>
        <p>{project.description}</p>
        <p>{project.category}</p>
      </div>
    ))}
  </div>
</div>;
