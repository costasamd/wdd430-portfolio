interface WorkExperiences {
    title: string;
    qualification: string[];
    iDo: string;
    iLearn?: string;
}

export default function WorkExperience ({title, qualification, iDo, iLearn}: WorkExperiences) {
    return (
        <article className="">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-700 mb-3"><strong>Qualifications: </strong>{qualification.join(',')}</p>
            <p className="text-gray-700 mb-3"> <strong>What I do: </strong>{iDo}</p>
           {iLearn && ( 
            <p className="text-gray-700 mb-3"> <strong>What I Learned: </strong>{iLearn}
            </p>
            )}
        </article>
    )
}