import React, { Fragment } from 'react';
import { connect, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectSeason } from '../redux/actions/global.actions';

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

    return (
        <Fragment>
            <h1>HOME PAGE</h1>
            <ul>
                {
                    globalState.SEASONS.map((season,index)=>{
                        return (
                            <li key={index}>
                                SEASON { season }
                                <button onClick={ ()=> handleSelectSeason(season) }>IR A TEMPORADA</button>
                            </li>
                        )
                    })
                }
            </ul>
        </Fragment>
    );
};

export const HomePage = connect(mapStateToProps,mapDispatchToProps)(_HomePage);