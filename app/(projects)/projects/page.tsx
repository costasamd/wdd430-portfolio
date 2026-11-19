import ProjectList from "@/components/projectList";
import { fetchFilteredProjects, fetchProjectsPages } from "@/lib/projects-db";
import { Suspense } from "react";
import { ProjectSearch } from "@/components/projectSearch";
import Pagination from "@/components/pagination"; 

async function ProjectsData({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const [projects, totalPages] = await Promise.all([
    fetchFilteredProjects(query, currentPage),
    fetchProjectsPages(query),
  ]);

  return (
    <>
      <ProjectList projects={projects} />
      {<div className="mt-8 flex justify-center">
        <Pagination totalPages={totalPages} />
      </div> }
    </>
  );
}

export default async function ProjectsPage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">All Projects</h1>

      <div className="mb-8">
        <Suspense fallback={<p>Loading search...</p>}>
          <ProjectSearch />
        </Suspense>
      </div>

      <Suspense key={query + currentPage} fallback={<p>Loading page...</p>}>
        <ProjectsData query={query} currentPage={currentPage} />
      </Suspense>
    </main>
  );
}