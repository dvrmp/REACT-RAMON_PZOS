import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { selectCharacter, checkDeathCharacter, getEpisodesCharacter } from '../redux/actions/character-selected.action';

const mapStateToProps = (state) =>{
    return {
        CHARACTER_SELECTED: state.CHARACTER_SELECTED
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectCharacter: (character_name)=> dispatch(selectCharacter(character_name)),
        checkDeathCharacter: (character_name)=> dispatch(checkDeathCharacter(character_name)),
        getEpisodesCharacter: (character_name)=> dispatch(getEpisodesCharacter(character_name))
    };
};

const _CharacterPage = ({selectCharacter,checkDeathCharacter,getEpisodesCharacter,...props}) => {
    const location = useLocation();
    const history = useHistory();
    const handleRedirectToEpisodeDetail = (episode)=>{
        history.push({
            pathname:'/episode-detail/'+episode.episode_id,
            state: { episode: episode }
        })
    }
    useEffect(() => {
        selectCharacter(location.state.character);
        checkDeathCharacter(location.state.character);
        getEpisodesCharacter(location.state.character);
        console.log(props);
    }, [])

    return (
        <Fragment>
            {
                (props.CHARACTER_SELECTED.DATA_RESPONSE) &&
                (Object.keys(props.CHARACTER_SELECTED.DATA_RESPONSE).length>0) ?
                <div>
                    <h1>{ props.CHARACTER_SELECTED.DATA_RESPONSE.name }</h1>
                    <div>
                        <h1>EPISODIO DONDE MUERTE</h1>
                        {
                            (Object.keys(props.CHARACTER_SELECTED.EPISODE_DEATH).length>0) &&
                            <button onClick={()=>handleRedirectToEpisodeDetail(props.CHARACTER_SELECTED.EPISODE_DEATH)}>{props.CHARACTER_SELECTED.EPISODE_DEATH.title}</button>
                        }
                        <h1>NUMERO DE ASESINATOS { props.CHARACTER_SELECTED.DEATH_COUNT }</h1>
                    </div>
                </div>
                : <h1>NO EXISTEN DATOS DE PERSONAJE</h1>
            }
            {
                <div>
                    <h1>EPISODIOS QUE SALE</h1>
            {
                      (props.CHARACTER_SELECTED.EPISODES_CHARACTER) && (props.CHARACTER_SELECTED.EPISODES_CHARACTER.length>0) 
                      && 
                      props.CHARACTER_SELECTED.EPISODES_CHARACTER.map((episode)=>{
                              return (
                              <li key={episode.episode_id}>{episode.title}</li>
                              )
                      })
            }
                </div>
          
            }
        </Fragment>
    );
};

export const CharacterPage = connect(mapStateToProps,mapDispatchToProps)(_CharacterPage);