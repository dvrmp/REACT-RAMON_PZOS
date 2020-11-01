import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getKillers } from '../redux/actions/killers.action';
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
            <h1>KILLER PAGE</h1>
            <ul>
                {
                    props.KILLERS.KILLERS.map((killer,index)=>{
                        return (
                            <li>
                                <p>{killer.name} :</p>
                                <p>Numero de muertos: { killer.deathCount }</p>
                            </li>
                        )
                    })
                }
            </ul>
        </Fragment>
    );
};

export const KillersPage = connect(mapStateToProps,mapDispatchToProps)(_KillersPage);