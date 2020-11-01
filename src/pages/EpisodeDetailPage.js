import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { selectEpisode, getQuoteCharacter, checkDeathCharacter } from '../redux/actions/episode-selected.action';

const mapStateToProps = (state) =>{
    return {
        EPISODE_SELECTED: state.EPISODE_SELECTED,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectEpisode: (episode)=> dispatch(selectEpisode(episode)),
        getQuoteCharacter: (character) => dispatch(getQuoteCharacter(character)),
        checkDeathCharacter: (characters,episode)=>dispatch(checkDeathCharacter(characters,episode))
    };
};

const _EpisodeDetailPage = ({selectEpisode,getQuoteCharacter,checkDeathCharacter,...props}) => {
    const location = useLocation();
    useEffect(()=>{
        selectEpisode(location.state.episode);
        const characterForQoute = location.state.episode.characters[Math.floor(Math.random()*location.state.episode.characters.length)];
        getQuoteCharacter(characterForQoute);
        checkDeathCharacter(location.state.episode.characters,location.state.episode.episode)
        console.log(props);
    },[])
  
    return (
        <Fragment>
            
            {
                ( props.EPISODE_SELECTED.QUOTE_AUTHOR!=undefined) && 
                <h1>{props.EPISODE_SELECTED.QUOTE_AUTHOR.quote}</h1>
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
            <h1>DEATHS</h1>
             {
                    (props.EPISODE_SELECTED.DEATHS_CHARACTERS) &&
                    props.EPISODE_SELECTED.DEATHS_CHARACTERS.map((character)=>{
                    return <li key={ character.death_id }>{ character.death }</li>
                    })
             }
        </Fragment>
    );
};

export const EpisodeDetailPage = connect(mapStateToProps,mapDispatchToProps)(_EpisodeDetailPage);