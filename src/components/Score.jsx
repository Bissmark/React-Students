/* eslint-disable react/prop-types */

const Score = ({ scores }) => {
    return (
        <div>
            <ul>
                {scores.map((score) => (
                    <li key={score.date}>
                        {score.date} - {score.score}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Score;