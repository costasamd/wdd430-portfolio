import ProjectList from "@/components/projectList";
import { getProjects } from "@/lib/projects-db";
import { Suspense } from "react";

async function ProjectsData() {
    const projects = await getProjects('school');
    return <ProjectList projects={projects} />;
}

export default function ProjectsPage() {
    return (
        <main className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8">All Projects</h1>
            <Suspense fallback={<p>Loading page...</p>}>
                <ProjectsData />
            </Suspense>
        </main>
    );
}
