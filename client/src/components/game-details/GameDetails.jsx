import { useParams, useNavigate, Link } from "react-router";
import gameService from "../../api/gameService.js";
import { useEffect, useState } from "react";
import Comments from "../comments/Comments.jsx";
import CommentsCreate from "../comments-create/CommentsCreate.jsx";

export default function GameDetails({
    email,
}) {
    const navigate = useNavigate();
    const [game, setGame] = useState({});
    const { gameId } = useParams();

    useEffect(() => {
        (async () => {
            const game = await gameService.getOne(gameId);
            setGame(game);
        })();
    }, [gameId]);

    const onDelete = async () => {
        const hasConfirm = confirm(`Are you sure you want to DELETE ${game.title} game?`);

        if (hasConfirm) {
            await gameService.delete(gameId);
            navigate('/games/catalog');
        }
    };

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">{game.summary}</p>

                <Comments />

                {/* Edit/Delete buttons ( Only for creator of this game )  */}
                <div className="buttons">
                    <Link to={`/games/${gameId}/edit`} className="button">Edit</Link>
                    <button
                        onClick={onDelete}
                        className="button"
                    >
                        Delete
                    </button>
                </div>
            </div>

            <CommentsCreate 
            userEmail={email} />

        </section>
    );
}