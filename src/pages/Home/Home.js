import React, { useEffect, useState } from "react";
import axios from "axios";

import { Header } from "../../components/Header/Header" 
import { Search } from "../../components/Search/Search";
import { Loading } from "../../components/Loading/Loading";



import './Home.css';


export const Home = () => {
    const KEY = process.env.REACT_APP_API_KEY;

    const [games, setGames] = useState([]);
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');

    const getGames = async () => {
        let response = (await axios.get(`https://api.rawg.io/api/games?key=${KEY}&page=${page}&search=${search}`));
        setGames(response.data.results)
        setCount(response.data.count)
        setTimeout(() => {
            setIsLoading(false);
        },800)
    };
    useEffect(() => {
        getGames()
    }, [page, search]);

    function loadMoreGames() {
        setPage(page + 1); 
        window.scrollTo(0,0);
    };

    return (
        isLoading ? (<Loading type={'spinningBubbles'} color={'#ffffff'} height={667} width={375}/>) :
        (
            <main className="main">
                <Header/>
                <Search
                    placeholder={`Fais ta recherche parmis les ${count} jeux...`}
                    value={search}
                    onChange =
                    {
                        (event) => {setSearch(event.target.value);}
                    }
                />
                <h1 className="main_title">New and trending</h1>
                <h2 className="second title">Based on player counts and release date</h2>

                <div className="cards_list">
                    {
                        games.map((game, index) => {
                            return (
                                <article key={index} className="card_game">
                                    <img className="card_game_image" alt="background_image" src={game.background_image}></img>
                                    <h3 className="card_game_title">{game.name}</h3>
                                </article>           
                            )
                        })
                    };
                </div> 
                <div className="container_button">
                    <button className="button_load_more_games" onClick={loadMoreGames}>More Games</button>
                </div>
            </main>
        )
    )   
}