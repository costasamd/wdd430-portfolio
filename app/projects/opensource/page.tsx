import ProjectList from "@/components/projectList";
import { getProjects } from "@/lib/projects-db";

export default async function OpensourceProjectPage () {
    const project = await getProjects('opensource');

    return (
        <main className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8">Open Source Projects</h1>
            <ProjectList projects = {project} />
        </main>
    );
}