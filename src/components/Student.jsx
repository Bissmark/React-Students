import Score from "./Score";

const Student = ({ students }) => {
    return (
        <ul>
            {students.map((student) => (
                <li key={student.name}>
                    <h1>{student.name}</h1>
                    <p>{student.bio}</p>
                    <Score scores={student.scores} />
                </li>
            ))}
        </ul>
    );
};

export default Student;