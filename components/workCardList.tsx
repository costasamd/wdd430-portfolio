import WorkExperience from "./workCard";

interface Work {
    title: string;
    qualification: string[],
    iDo: string,
    iLearn?: string
}

interface WorkListProps {
    works: Work[];
}

export default function WorkList ({works}:WorkListProps) {
    return (
        <section className="grid gap-4 md:grid-cols-2">
            {works.map((work) => (
                <WorkExperience key={work.title} {...work} />
            ))}
               
        </section>
    )
}