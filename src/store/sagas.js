import { takeLatest } from 'redux-saga/effects';

import * as TYPES from '../types/StarWarActionTypes';

import {fetchPerson} from '../actions/StarWarActions';

/**
 * TakeLatest listens to the store for the dispatched action provided in the argument. 
 * When it sees this type it will call the genearator function passed as second argument
 * When there is already an instance of generator function running, it will cancel it and start another one
 */

function *mySaga() {
    yield takeLatest(TYPES.FETCH_STAR_WARS_REQUEST, fetchPerson);
}

export default mySaga;