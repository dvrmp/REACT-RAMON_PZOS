import React, { Fragment } from 'react';
import { connect, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectSeason } from '../redux/actions/global.actions';
import { Container,Button, List, ListItem } from '@material-ui/core';

const mapStateToProps = (state) =>{
    return {
        GLOBAL: state.GLOBAL
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectSeason: (season_index)=> dispatch(selectSeason(season_index))
    };
};

const _HomePage = ({selectSeason}) => {
    const globalState = useSelector(state=>state.GLOBAL);
    const history = useHistory();
    const handleSelectSeason = (index) => {
        selectSeason(index);
        history.push({
            pathname:'/episodes/'+index,
            state: { season_selected: index }
        });
    };
    const redirectToKillersPage = () => {
        history.push({
            pathname:'/killers'
        });
    };
    
    return (
        <Fragment>
           <header>
                 <div className="jumbotron">
                    <h1 className="display-4">Examen React: Breaking bad api</h1>
                </div>
           </header>
           <Container>
               <div className="row">
                   <div className="col-6">
                       <Button fullWidth={true}  variant="contained" color="primary">Personajes</Button>
                   </div>
                   <div className="col-6">
                       <Button fullWidth={true} variant="contained" color="secondary" onClick={()=>redirectToKillersPage()}>Asesinos</Button>
                   </div>
               </div>
               <List>
                   {
                       globalState.SEASONS.map((season,index)=>{
                           return (
                               <ListItem key={index}>
                                   <Button fullWidth={true}  variant="outlined" onClick={ ()=> handleSelectSeason(season) }>Temporada : { season }</Button>
                               </ListItem>
                           )
                       })
                   }
               </List>
           </Container>
        </Fragment>
    );
};

export const HomePage = connect(mapStateToProps,mapDispatchToProps)(_HomePage);