import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Loading } from "../../components/Loading/Loading";
import { Header } from "../../components/Header/Header";

import './Game.css';

export const Game = () => {
    const KEY = process.env.REACT_APP_API_KEY;

    const [game, setGame] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { slug } = useParams(); 

    const getGame = async () => {
        let response = (await axios.get(`https://api.rawg.io/api/games/${slug}?key=${KEY}`));
        setGame(response.data)
        setTimeout(() => {
            setIsLoading(false);
        },800)
    };
    useEffect(() => {
        getGame()
    }, [slug]);


  
    


    return (
        isLoading ? (<Loading type={'spinningBubbles'} color={'#ffffff'} width={100}/>) :
        (
            <main className="main_game">
                <Header/>
                <article className="game_article">
                    <section className="game_section1">
                        <span className="game_date">{game.released}</span>
                        <h1 className="game_name">{game.name}</h1>
                        <div className="container_about">
                            <h3 className="game_about">About</h3>
                            <p className="game_description">{game.description.replace(/(<([^>]+)>)/gi, "")}</p>
                        
                        </div>

                    </section>
                    <section className="game_section1">
                        <img className="game_img" src ={game.background_image} alt=""></img>
                    </section>
                     
                </article>

            </main>
           
            
        )
    )   
}