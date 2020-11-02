import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getKillers } from '../redux/actions/killers.action';
import { Container, List, ListItem, LinearProgress } from '@material-ui/core';

const mapStateToProps = (state) =>{
    return {
        KILLERS: state.KILLERS
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getKillers: ()=> dispatch(getKillers())
    };
};

const _KillersPage = ({getKillers,...props}) => {
    useEffect(()=>{
        getKillers();
    },[])
    return (
        <Fragment>
            <h1>Asesinos</h1>
            <Container>
                {
                    (!props.KILLERS.LOADING) ? 
                    <List>
                    {
                        props.KILLERS.KILLERS.map((killer,index)=>{
                            return (
                                <ListItem key={index}>
                                    <p>{killer.name} :</p>
                                    <p>Numero de muertos: { killer.deathCount }</p>
                                </ListItem>
                            )
                        })
                    }
                    </List>
                    : <LinearProgress></LinearProgress>
                }

            </Container>
        </Fragment>
    );
};

export const KillersPage = connect(mapStateToProps,mapDispatchToProps)(_KillersPage);