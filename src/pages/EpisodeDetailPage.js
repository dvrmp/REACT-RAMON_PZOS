import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { selectEpisode, getQuoteCharacter, checkDeathCharacters } from '../redux/actions/episode-selected.action';

const mapStateToProps = (state) =>{
    return {
        EPISODE_SELECTED: state.EPISODE_SELECTED,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectEpisode: (episode)=> dispatch(selectEpisode(episode)),
        getQuoteCharacter: (character) => dispatch(getQuoteCharacter(character)),
        checkDeathCharacters: (characters,episode)=>dispatch(checkDeathCharacters(characters,episode))
    };
};

const _EpisodeDetailPage = ({selectEpisode,getQuoteCharacter,checkDeathCharacters,...props}) => {
    const location = useLocation();
    const history = useHistory();
    const handleRedirectToECharacterPage = (character)=>{
        history.push({
            pathname:'/character/'+character,
            state: { character: character }
        })
    }
    useEffect(()=>{
        selectEpisode(location.state.episode);
        getQuoteCharacter(location.state.episode.characters);
        checkDeathCharacters(location.state.episode.characters,location.state.episode.episode)
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
                    return (
                        <li key={ index }>{ character }
                        <button onClick={ ()=>handleRedirectToECharacterPage(character) }>IR A PERSONAJE</button>
                        </li>
                    )
                    })
                }
            </ul>
            <h1>DEATHS</h1>
             {
                    (props.EPISODE_SELECTED.DEATHS_CHARACTERS) &&
                    props.EPISODE_SELECTED.DEATHS_CHARACTERS.map((character)=>{
                    return (
                    <li key={ character.death_id }>{ character.death }</li>
                    )
                    })
             }
        </Fragment>
    );
};

export const EpisodeDetailPage = connect(mapStateToProps,mapDispatchToProps)(_EpisodeDetailPage);