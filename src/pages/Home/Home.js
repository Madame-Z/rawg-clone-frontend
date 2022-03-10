import React, { useEffect, useState } from "react";
import axios from "axios";

import { Header } from "../../components/Header/Header"
import { Search } from "../../components/Search/Search";
import { Loading } from "../../components/Loading/Loading";
import { GamesList } from "../../components/GamesList/GamesList";
import { FilterButton } from "../../components/Filters/FilterButton";
import { FilterSelect } from "../../components/Filters/FilterSelect";

import css from './Home.module.css';

/////////////////////////////////////////////////////////////////////////

export const Home = () => {
    const KEY = process.env.REACT_APP_API_KEY;

    const [games, setGames] = useState([]);
    const [countGames, setCountGames] = useState(0);
    const [pageGame, setPageGame] = useState(1);

    const [isLoading, setIsLoading] = useState(true);
   
    const [search, setSearch] = useState('');
    const [ordering, setOrdering] = useState('');
    
    const [platforms, setPlatforms] = useState([]);
    const [chosenPlatform, setChosenPlatform] = useState();
    const [platformsSize, setPlatformsSize] = useState(5);
    const [countPlatforms, setCountPlatforms] = useState();
    const [buttonLoadMoreFiltersPlatforms, setButtonLoadMoreFiltersPlatforms] = useState(true)

    const [genres, setGenres] = useState([]);
    const [chosenGenre, setChosenGenre] = useState();
    const [genresSize, setGenresSize] = useState(5);
    const [countGenres, setCountGenres] = useState();
    const [buttonLoadMoreFiltersGenres, setButtonLoadMoreFiltersGenres] = useState(true);

//////////////////////////////////////////////////////////////////////////

    const getGames = async () => {
        let response;

        let DEFAULT_REQUEST = `https://api.rawg.io/api/games?key=${KEY}&page=${pageGame}&search=${search}&ordering=${ordering}`;
        let request = DEFAULT_REQUEST;

        if (chosenPlatform !== undefined) {
            request += `&platforms=${chosenPlatform}`;
        }
        
        if (chosenGenre !== undefined) {
            request += `&genres=${chosenGenre}`;
        }

        response = (await axios.get(request));

        setGames(response.data.results)
        setCountGames(response.data.count)

        setTimeout(() => {
            setIsLoading(false);
        }, 800)
    };

    useEffect(() => {
        getGames();
    }, [pageGame, search, ordering, chosenPlatform, chosenGenre]);

/////////////////////////////////////////////////////////////////////////////

    const getPlatforms = async () => {
        const response = await axios.get(`https://api.rawg.io/api/platforms?key=${KEY}&page_size=${platformsSize}`);
        setPlatforms(response.data.results);
        setCountPlatforms(response.data.count)
    };

    useEffect(() => {
        getPlatforms();
    }, [platformsSize]);

    ////////////////////////////////////////////////////////////////////////

    const getGenres = async () => {
        const response = await axios.get(`https://api.rawg.io/api/genres?key=${KEY}&page_size=${genresSize}`);
        setGenres(response.data.results);
        setCountGenres(response.data.count)
    };

    useEffect(() => {
        getGenres();

    }, [genresSize]);

///////////////////////////////////////////////////////////////////////////////

    function loadMoreGames() {
        setPageGame(pageGame + 1);
        window.scrollTo(0, 0);
    }

    function onChangeSearchGame(e) {
        setSearch(e.target.value);
    }

    function onChangeSortFilter(e) {
        setOrdering(e.target.value);
        setPageGame(1);
    }

    function loadMorePlatforms() {
        setPlatformsSize(countPlatforms);
        window.scrollTo(0, 0);

        setButtonLoadMoreFiltersPlatforms(false);

        if (buttonLoadMoreFiltersPlatforms === false) {
            setPlatformsSize(5)   
            setButtonLoadMoreFiltersPlatforms(true);
        };   
    }

    function onChangeFilterPlatform(e) {
        setChosenPlatform(e.target.value);
        setPageGame(1);
    }

    function onChangeFilterGenre(e) {
        setChosenGenre(e.target.value);
        setPageGame(1);
    }

    function loadMoreGenres() {
        setGenresSize(countGenres);
        window.scrollTo(0, 0);

        setButtonLoadMoreFiltersGenres(false);

        if (buttonLoadMoreFiltersGenres === false) {
            setGenresSize(5)   
            setButtonLoadMoreFiltersGenres(true);
        };   
    }

    return (
        isLoading ? (<Loading type={'spinningBubbles'} color={'#ffffff'} width={100} />) :
            (
                <div className={css['container_page']}>
                    <Header/>
                    <main className={css['main']}>

                        <div className={css['container_games']}>
                            <Search
                                placeholder={`Fais ta recherche parmis les ${countGames} jeux...`}
                                value={search}
                                onChange={onChangeSearchGame}
                            >
                            </Search>
                            
                            <h1 className={css['main_title']}>New and trending</h1>
                            <h2 className={css['second_title']}>Based on player counts and release date</h2>

                            <FilterSelect onChangeFunction={onChangeSortFilter}/>

                            <GamesList games = {games}/>
                            <div className={css['container_button']}>
                                <button className={css['button_load_more_games']} onClick={loadMoreGames}>More Games</button>
                            </div>
                        </div>

                        <div className={css['container_menu']}>     
                            <FilterButton
                                title='Platforms'
                                arrayFilter={platforms}
                                onClickFunctionLoadMore={loadMorePlatforms}
                                onClickFunctionChangeFilter={onChangeFilterPlatform}
                                button={buttonLoadMoreFiltersPlatforms} />
                            <FilterButton
                                title='Genres'
                                arrayFilter={genres} 
                                onClickFunctionLoadMore={loadMoreGenres}
                                onClickFunctionChangeFilter={onChangeFilterGenre}
                                button={buttonLoadMoreFiltersGenres} />    
                        </div>
                    </main>
                </div>
            )
    )
}