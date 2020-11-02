import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { selectEpisode, getQuoteCharacter, checkDeathCharacters } from '../redux/actions/episode-selected.action';
import { Container ,List, ListItem, Button } from '@material-ui/core';

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
            <header>
                 <div className="jumbotron">
                     <div className="row">
                         <div className="col-12">
                            <h1>{location.state.episode.title}</h1>
                         </div>
                         <div className="col-12">
                             <h3>Episodio: {location.state.episode.episode}, Temporada : {location.state.episode.season} </h3>
                         </div>
                         <div className="col-12">
                            {
                            ( props.EPISODE_SELECTED.QUOTE_AUTHOR!=undefined) && 
                            <p>{props.EPISODE_SELECTED.QUOTE_AUTHOR.quote}</p>
                            }
                         </div>
                     </div>
                </div>
           </header>
           <Container>
               <div className="row">
                   <div className="col-6">
                       <div className="card">
                        <div className="card-header">
                            Personajes que aparecen
                        </div>
                           <List>
                           {
                            (Object.keys(props.EPISODE_SELECTED.EPISODE).length>0) &&
                                props.EPISODE_SELECTED.EPISODE.characters.map((character,index)=>{
                                    return (
                                        <ListItem key={ index }>
                                            <Button variant="outlined" color="primary" fullWidth={true} onClick={ ()=>handleRedirectToECharacterPage(character) }>{ character }</Button>
                                        </ListItem>
                                    )
                                })
                            }
                           </List>
                        </div>
                   </div>
                   <div className="col-6">
                        <div className="card">
                            <div className="card-header">
                                Muertes en el episodio
                            </div>
                            {
                            (props.EPISODE_SELECTED.DEATHS_CHARACTERS.length>0) ?
                              <List>
                                  {
                                       props.EPISODE_SELECTED.DEATHS_CHARACTERS.map((character)=>{
                                        return (
                                        <ListItem key={ character.death_id }>{ character.death }</ListItem>
                                        )
                                        })
                                  }
                              </List>
                            :
                            <div className="alert alert-warning" role="alert">
                                No existen fallecidos en este episodio
                            </div>
                            }
                        </div>
                   </div>
               </div>
           </Container>

        </Fragment>
    );
};

export const EpisodeDetailPage = connect(mapStateToProps,mapDispatchToProps)(_EpisodeDetailPage);