import ProjectList from "@/components/projectList";
import Link from "next/link";


export default function Home () {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="test-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I am a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <div className="flex justify-center gap-4">
        <Link href="/projects" className="px-4 py-2 bg-blue-600 text-white rounded">All Projects</Link>
        <Link href="/projects/school" className="px-4 py-2 border rounded">School Project</Link>
        <Link href="/projects/opensource" className="px-4 py-2 border rounded">Open Source</Link>
      </div>
      
    </main>
  );
}