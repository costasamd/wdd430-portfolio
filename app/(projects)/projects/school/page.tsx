import ProjectList from "@/components/projectList";
import { getProjects } from "@/lib/projects-db";
import { beginLockedNavigation } from "next/dist/client/components/segment-cache/navigation-testing-lock";
import { Suspense } from "react";
import LoadingPage from "../opensource/loading";

async function ProjectsData() {

    await new Promise(res => setTimeout(res, 2000));

    const projects = await getProjects('school');
    return <ProjectList projects={projects} />;
}

export default function ProjectsPage() {
    return (
        <main className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8">All Projects</h1>
            <Suspense fallback={<p>Loading...</p>}>
                <ProjectsData />
            </Suspense>
        </main>
    );
}
