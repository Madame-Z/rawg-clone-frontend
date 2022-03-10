import React from "react";
import { Link } from "react-router-dom";

import css from './GamesList.module.css';

export const GamesList = (props) => {
    const { games } = props
    return (
        <div className = {css['cards_list']}>
            {
                games.map((game) => {
                    return (
                        <Link to={{ pathname: `/games/${game.slug}`, }}>
                            <article key={game.id} className= {css['card_game']}>
                                <img className= {css['card_game_image']} alt="background_image" src={game.background_image}></img>
                                <h3 className= {css['card_game_title']}>{game.name}  </h3>
                            </article>
                        </Link>
                    )
                })
            };
        </div>
    )
}