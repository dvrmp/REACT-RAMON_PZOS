import React, { Fragment, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getAllEpisodesBySeason } from '../redux/actions/episodes.actions';

const mapStateToProps = (state) =>{
    return {
        EPISODES_SEASON: state.EPISODES_SEASON
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllEpisodesBySeason: (season_index)=> dispatch(getAllEpisodesBySeason(season_index))
    };
};

const _EpisodesPage = ({getAllEpisodesBySeason})=> {
    const episodesSeasonState = useSelector(state=>state.EPISODES_SEASON);
    const location = useLocation();
    useEffect(()=>{
        getAllEpisodesBySeason(location.state.season_selected);
    },[])
    return (
        <Fragment>
            <h1>EPISODES PAGE</h1>
            {
                episodesSeasonState.DATA_RESPONSE.map((episode,index)=>{
                    return (
                        <li>
                            { episode.title }
                        </li>
                    )
                })
            }
        </Fragment>
    );
}

export const EpisodesPage = connect(mapStateToProps,mapDispatchToProps)(_EpisodesPage);