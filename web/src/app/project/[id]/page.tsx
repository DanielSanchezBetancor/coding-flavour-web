import ProjectInformation from "@/presentation/layouts/ProjectInformation";
import ProjectList from "@/presentation/layouts/ProjectList";
import { DEFAULT_PROJECT_MOCK } from "@/validations/utils/mocks";
import styles from "@/presentation/styles/pages/_project-id.module.scss";
import ContactUsCTA from "@/presentation/layouts/ContactUsCTA";

const { projectId__projectList, projectId__contactUsCTA } = styles;

const ProjectId = () => {
  // TODO: Parse URL and search ID in JSON
  // TODO: From the retrieved project, erase from the project list preview shown after the main article
  // TODO: Retrieve project list preview

  return (
    <main className="main" data-testid={"project-id"}>
      <section data-testid={"project-id-project-information"}>
        <ProjectInformation
          date={DEFAULT_PROJECT_MOCK.date}
          url={DEFAULT_PROJECT_MOCK.url}
          images={DEFAULT_PROJECT_MOCK.images}
          paragraphs={DEFAULT_PROJECT_MOCK.paragraphs}
          platform={DEFAULT_PROJECT_MOCK.platform}
          projectName={DEFAULT_PROJECT_MOCK.projectName}
          techStack={DEFAULT_PROJECT_MOCK.techStack}
          projectId={DEFAULT_PROJECT_MOCK.projectId}
        />
      </section>
      <section
        data-testid={"project-id-project-list"}
        className={projectId__projectList}
      >
        <ProjectList projects={[DEFAULT_PROJECT_MOCK]} title="Other Projects" />
      </section>
      <section
        data-testid={"project-id-contact-us"}
        className={projectId__contactUsCTA}
      >
        <ContactUsCTA />
      </section>
    </main>
  );
};

export default ProjectId;
