import React, { Fragment, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { getAllEpisodesBySeason } from '../redux/actions/episodes.actions';


//INCLUIR NUEVO ESTADO: QUOTE
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
            <h1>EPISODES PAGE</h1>
            {
                (props.EPISODES_SEASON.DATA_RESPONSE.length>0) &&
                props.EPISODES_SEASON.DATA_RESPONSE.map((episode,index)=>{
                    return (
                        <li key={ index }>
                            { episode.title }
                            <br></br>
                            <button onClick={()=>handleRedirectToEpisodeDetail(episode)} >IR A DETALLES</button>
                        </li>
                    )
                })
            }
        </Fragment>
    );
}

export const EpisodesPage = connect(mapStateToProps,mapDispatchToProps)(_EpisodesPage);