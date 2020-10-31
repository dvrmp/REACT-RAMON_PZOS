import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { selectEpisode, getQuoteCharacter } from '../redux/actions/episode-selected.action';

//INCLUIR NUEVO ESTADO: QUOTE EN EL REDUCER
const mapStateToProps = (state) =>{
    return {
        EPISODE_SELECTED: state.EPISODE_SELECTED,
    };
};

//INCLUIR NUEVA ACCION QUOTE
const mapDispatchToProps = (dispatch) => {
    return {
        selectEpisode: (episode)=> dispatch(selectEpisode(episode)),
        getQuoteCharacter: (character) => dispatch(getQuoteCharacter(character))
    };
};

const _EpisodeDetailPage = ({selectEpisode,getQuoteCharacter,...props}) => {
    console.log(props)
    const location = useLocation();
    console.log(location);
    useEffect(()=>{
        selectEpisode(location.state.episode);
        const character = location.state.episode.characters[Math.floor(Math.random()*location.state.episode.characters.length)];
        getQuoteCharacter(character);
    },[])
  
    return (
        <Fragment>
            
            {
                (Object.keys(props.EPISODE_SELECTED.QUOTE_AUTHOR).length>0) && <h1>{props.EPISODE_SELECTED.QUOTE_AUTHOR.quote}</h1>
            }
            <h1>{ props.EPISODE_SELECTED.EPISODE.title }</h1>
            <ul>
                {
                    (Object.keys(props.EPISODE_SELECTED.EPISODE).length>0) &&
                    props.EPISODE_SELECTED.EPISODE.characters.map((character,index)=>{
                    return <li key={ index }>{ character }</li>
                    })
                }
            </ul>
        </Fragment>
    );
};

export const EpisodeDetailPage = connect(mapStateToProps,mapDispatchToProps)(_EpisodeDetailPage);