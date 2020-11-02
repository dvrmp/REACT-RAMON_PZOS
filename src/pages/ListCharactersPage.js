import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllCharacters } from '../redux/actions/list-all-characters.action';
import { Container, Button, List, ListItem, LinearProgress } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const mapStateToProps = (state) =>{
    return {
        CHARACTERS: state.CHARACTERS
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllCharacters: ()=> dispatch(getAllCharacters())
    };
};

const _ListCharactersPage = ({getAllCharacters,...props}) => {

    const history = useHistory();

    const handleRedirectToECharacterPage = (character)=>{
        history.push({
            pathname:'/character/'+character,
            state: { character: character }
        })
    }

    useEffect(()=>{
        getAllCharacters();
    },[])
    return (
        <Fragment>
            <Container>
                {
                    (props.CHARACTERS.LOADING) ? <LinearProgress></LinearProgress> :
                    <List>
                        {
                            props.CHARACTERS.DATA_RESPONSE.map((character,index)=>{
                                return (
                                    <ListItem key={index}>
                                        <Button fullWidth={true} onClick={()=>handleRedirectToECharacterPage(character.name)} variant="outlined" color="primary">{character.name}</Button>
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                }
            </Container>
        </Fragment>
    );
};

export const ListCharactersPage = connect(mapStateToProps,mapDispatchToProps)(_ListCharactersPage);