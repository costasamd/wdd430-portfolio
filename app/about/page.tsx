import WorkList from "@/components/workCardList";

const works = [
  {
    title: "Teacher Assistant",
    qualification: ["Level 3: Fitness Instructor", "GCSE 5-9"],
    iDo: "Support students inside and outside classroom to provide a better result in their efforts of learning and keep up with the school expectations",
    iLearn: "How to comunicate with people with different ages, knowledge, needs and aspirations"
  },
  {
    title: "Personal Trainer",
    qualification: ["Level 3: Fitness Instructor", "Circuit Trainer", "First Aider"],
    iDo: "I train people to their needs and goals through a bespoken program and individual session",
    iLearn: "How to help individuals to achieve their goals, patiently guide and support them in their journey, physicaly and emotionaly. I also learned how to maintain a business and keep track of finances and contracts. How to promote and find clients" 
  }

]

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 py-5">
        I am Samuel Dias Costa, a software developer student, with studies and  experience in Fitness and Midia creation. I wokerked in a great variety of jobs
      </p>
      
      <WorkList works={works} />
    </main>
  );
}