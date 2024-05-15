import { Project } from "../lib/definitions";

export default function ProjectComp({ project }: { project: Project }) {
  return (<li className="mb-12">
    <div className="relative grid pb-1 transition-all sm:grid-cols-8 sm:ga_d:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug">{project.title}</h3>
        <p className="mt-2 text-sm leading-normal">{project.description}</p>
        <ul className="mt-2 flex flex-wrap">
          {project.techStack.map((tech) => {
            return <li key={tech} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-primary-light dark:bg-primary-dark dark:text-primary-light px-3 py-1 text-xs font-medium leading-5 text-white">
                {tech}
              </div>
            </li>;
          })}
        </ul>
      </div>
    </div>
  </li>);
}
