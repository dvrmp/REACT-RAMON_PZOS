import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { selectCharacter, checkDeathCharacter, getEpisodesCharacter,getQuotesCharacters } from '../redux/actions/character-selected.action';
import { Button, Container, List ,ListItem } from '@material-ui/core';

const mapStateToProps = (state) =>{
    return {
        CHARACTER_SELECTED: state.CHARACTER_SELECTED
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectCharacter: (character_name)=> dispatch(selectCharacter(character_name)),
        checkDeathCharacter: (character_name)=> dispatch(checkDeathCharacter(character_name)),
        getEpisodesCharacter: (character_name)=> dispatch(getEpisodesCharacter(character_name)),
        getQuotesCharacters: (character_name)=> dispatch(getQuotesCharacters(character_name))
    };
};

const _CharacterPage = ({selectCharacter,checkDeathCharacter,getEpisodesCharacter,getQuotesCharacters,...props}) => {
    
    const [ quoteState, setQuoteState ] = useState({quote:'',show_all_quotes:false});

    const generateRandomQuote = () => {
        setQuoteState({
            quote: props.CHARACTER_SELECTED.QUOTES_CHARACTER[Math.floor(Math.random()*props.CHARACTER_SELECTED.QUOTES_CHARACTER.length)].quote
        });
    }

    const showAllQuotes = () => {
        setQuoteState({...quoteState,show_all_quotes:true})
    }

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
        getQuotesCharacters(location.state.character);
    }, [])

    return (
      <Fragment>
          {
              (props.CHARACTER_SELECTED.LOADING) ? <h1>Cargando ...</h1>
              :
              (props.CHARACTER_SELECTED.DATA_RESPONSE) &&
              (Object.keys(props.CHARACTER_SELECTED.DATA_RESPONSE).length>0) ?
              <header>
                <div className="jumbotron">
                    <div className="row">
                    <div className="col-6">
                            <img src={props.CHARACTER_SELECTED.DATA_RESPONSE.img} width="120"></img>
                        </div>
                        <div className="col-6">
                            <h1>{props.CHARACTER_SELECTED.DATA_RESPONSE.name}</h1>
                        </div>
                    </div>
                </div>
             </header>
              : 
              <header>
                <div className="jumbotron">
                    <div className="row">
                        <div className="col-12">
                            <h1>{location.state.character}</h1>
                        </div>
                    </div>
                </div>
             </header>
          }
          {
                (props.CHARACTER_SELECTED.QUOTES_CHARACTER.length>0) ?
                <div>
                    {
                        (quoteState.quote==='') && generateRandomQuote()
                    }
                    <div className="alert alert-info" role="alert">
                        <p>{quoteState.quote }</p>
                    </div>
                    <Button fullWidth={true} variant="contained" color="secondary" onClick={()=>generateRandomQuote() }>GENERAR CITA</Button>
                    <Button fullWidth={true} variant="contained" color="primary" onClick={()=>showAllQuotes()}>MOSTRAR TODAS</Button>
                    {
                (quoteState.show_all_quotes===true) &&
                <Container>
                    {
                       props.CHARACTER_SELECTED.QUOTES_CHARACTER.map((quote,index)=>{
                       return <ListItem key={index}>{ quote.quote }</ListItem>
                       }) 
                    }
                </Container>
                 }
                </div>
                : null
          }
          {
            <div>
                {
                    (Object.keys(props.CHARACTER_SELECTED.EPISODE_DEATH).length>0) &&
                    <div>
                        <h3>Episodio donde muere</h3><Button onClick={()=>handleRedirectToEpisodeDetail(props.CHARACTER_SELECTED.EPISODE_DEATH)}>{props.CHARACTER_SELECTED.EPISODE_DEATH.title}</Button>
                    </div>
                }
                 <div className="alert alert-danger" role="alert">
                     {
                         ( props.CHARACTER_SELECTED.DEATH_COUNT>0) && 
                         <strong>Número de asesinatos { props.CHARACTER_SELECTED.DEATH_COUNT }</strong>

                     }
                 </div>
             </div>
          }
            <Container>
            <List>
            {
                (props.CHARACTER_SELECTED.EPISODES_CHARACTER) && (props.CHARACTER_SELECTED.EPISODES_CHARACTER.length>0) && 
                    props.CHARACTER_SELECTED.EPISODES_CHARACTER.map((episode,index)=>{
                        return (
                            <ListItem key={index}>
                                <Button fullWidth={true} variant="outlined" color="primary" onClick={ ()=>handleRedirectToEpisodeDetail(episode) }>{episode.title}</Button>
                            </ListItem>
                        )
                    })
                }
            </List>
            </Container>
      </Fragment>
    );
};

export const CharacterPage = connect(mapStateToProps,mapDispatchToProps)(_CharacterPage);