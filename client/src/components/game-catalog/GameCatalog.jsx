import { useEffect } from "react";
import gameService from "../../api/gameService";
import GameCatalogItem from "../game-catalog-item/GameCatalogItem.jsx";

export default function GameCatalog() {
    useEffect(() => {
        gameService.getAll()
            .then(r => {
                console.log(r);
            });
    }, []);
    
    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            </div>
            <div className="allGames">
                <div className="allGames-info">
                    <img src="/images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>MineCraft</h2>
                    <a href="#" className="details-button">Details</a>
                </div>
            </div>

            {/* Display paragraph: If there is no games  */}
            <h3 className="no-articles">No articles yet</h3>
        </section>
    );
}