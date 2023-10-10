import React from "react";
import styles from "@src/presentation/styles/layouts/_project-table.module.scss";
import Image from "next/image";
import IconArrowUpRight from "@src/presentation/assets/icons/icon-arrow-up-right.svg";
import { IProject } from "@src/data/Models/Project";

export interface IProjectsTableProps {
  projects: IProject[];
}

const {
  project__row,
  project__row__counter,
  project__row__name,
  only_desktop,
} = styles;

const ProjectsTable: React.FC<IProjectsTableProps> = ({ projects }) => {
  return (
    <section data-testid={"projects-table"}>
      {projects.map((project, index) => (
        <div
          className={project__row}
          key={`row_${project.projectName.split(" ").join("-")}`}
        >
          <span
            className={project__row__counter}
            data-testid={`projects-table-${index}-counter`}
          >
            {(index + 1).toString().padStart(3, "0")}
          </span>
          <span
            className={project__row__name}
            data-testid={`projects-table-${index}-name`}
          >
            {project.projectName}
          </span>
          <span
            className={only_desktop}
            data-testid={`projects-table-${index}-platform`}
          >
            {project.platform}
          </span>
          <span
            className={only_desktop}
            data-testid={`projects-table-${index}-date`}
          >
            {project.date}
          </span>
          <a href={project.url} data-testid={`projects-table-${index}-link`}>
            <Image src={IconArrowUpRight} alt={`Visit ${project.url}`} />
          </a>
        </div>
      ))}
    </section>
  );
};

export default React.memo(ProjectsTable);
