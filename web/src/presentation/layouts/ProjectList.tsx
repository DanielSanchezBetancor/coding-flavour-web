import React from "react";
import styles from "@/presentation/styles/layouts/_project-list.module.scss";
import ProjectCard from "../components/ProjectCard";
import { IProject } from "@/data/Project";

export interface IProjectListProps {
  projects: IProject[];
}

const { projectList, projectList__projects, projectList__header } = styles;

const ProjectList: React.FC<IProjectListProps> = ({ projects }) => {
  return (
    <div className={projectList} data-testid={"project-list"}>
      <h1 className={projectList__header} data-testid={"project-list-header"}>
        Projects
      </h1>
      <div
        className={projectList__projects}
        data-testid={"project-list-projects"}
      >
        {projects.map((project) => (
          <ProjectCard
            projectId={project.projectId}
            projectName={project.projectName}
            date={project.date}
            platform={project.platform}
            key={project.projectId}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(ProjectList);
