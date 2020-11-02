import { Container } from '@material-ui/core';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { getAllEpisodesBySeason } from '../redux/actions/episodes.actions';
import { List, ListItem, Button, LinearProgress } from '@material-ui/core';

//INCLUIR NUEVO ESTADO: QUOTE
const mapStateToProps = (state) =>{
    return {
        EPISODES_SEASON: state.EPISODES_SEASON,
        GLOBAL: state.GLOBAL
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllEpisodesBySeason: (season_index)=> dispatch(getAllEpisodesBySeason(season_index))
    };
};

const _EpisodesPage = ({getAllEpisodesBySeason,...props})=> {
    const location = useLocation();
    const history = useHistory();
    const handleRedirectToEpisodeDetail = (episode)=>{
        history.push({
            pathname:'/episode-detail/'+episode.episode_id,
            state: { episode: episode }
        })
    }
    useEffect(()=>{
        getAllEpisodesBySeason(location.state.season_selected);
    },[])
    return (
        <Fragment>
            <header>
                 <div className="jumbotron">
                    <h1 className="display-4">Lista de episodios de la temporada : {props.GLOBAL.SEASON_SELECTED}</h1>
                </div>
           </header>
           <Container>
               {
                   (props.EPISODES_SEASON.LOADING) ? <LinearProgress></LinearProgress> :
                   (props.EPISODES_SEASON.DATA_RESPONSE.length>0) &&
                   <List>
                       {
                           props.EPISODES_SEASON.DATA_RESPONSE.map((episode)=>{
                               return (
                                   <ListItem key={episode.episode_id}>
                                     <Button fullWidth={true}  variant="outlined" onClick={ ()=> handleRedirectToEpisodeDetail(episode) }>{episode.title}</Button>
                                   </ListItem>
                               )
                           })
                       }
                   </List>
               }
           </Container>
        </Fragment>
    );
}

export const EpisodesPage = connect(mapStateToProps,mapDispatchToProps)(_EpisodesPage);