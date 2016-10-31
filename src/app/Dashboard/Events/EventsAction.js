import api from './../../../helpers/api'
import {getHTTPHeaderAuth, baseURL} from './../../../helpers/helpers'
import {CALL_API} from 'redux-api-middleware';


export const ADD_EVENT = 'events/add_event'
export const GET_EVENTS_LIST = 'events/get_events_list'
export const ADD_MANY_EVENTS = 'events/add_many_events'
export const CALL_API_EVENTS_REQUEST = 'events/CALL_API_EVENTS_REQUEST'
export const CALL_API_EVENTS_SUCCESS = 'events/CALL_API_EVENTS_SUCCESS'
export const CALL_API_EVENTS_FAILURE = 'events/CALL_API_EVENTS_FAILURE'


export function Events(data = {searchField: '', status: '', offset: 0}) {
    return {
      [CALL_API]: {
        endpoint: `${baseURL}/manager/events`,
        method: 'GET',
        ...getHTTPHeaderAuth(),
        types: [CALL_API_EVENTS_REQUEST, CALL_API_EVENTS_SUCCESS, CALL_API_EVENTS_FAILURE]
      }
    }
}

// export function Events(data = {searchField: '', status: '', offset: 0}) {
//   return (dispatch, getState) => {
//     const state = getState()
//     dispatch({
//       [CALL_API]: {
//         endpoint: 'http://mvl-api-staging.herokuapp.com/api/manager/events',
//         method: 'GET',
//         headers: {
//           'Authorization': `JWT ${state.user.token}`,
//           'Account-Id': `57b0c8285356483f0e9eec2d`
//         },
//         types: [
//           {
//             type: CALL_API_EVENTS_REQUEST,
//             payload: (action, state) => ({ endpoint: action.endpoint })
//           },
//           {
//             type: CALL_API_EVENTS_SUCCESS,
//             payload: (action, state, res) => {
//               return res.data.data
//             }
//           },
//           {
//             type: CALL_API_EVENTS_FAILURE,
//             meta: (action, state, res) =>
//               getJSON(res).then(
//                 (json) => new ApiError(res.status, res.statusText, json)
//               )
//           }]
//       }
//     })
//   }
// }

export function getEventsList(data = {searchField: '', status: '', offset: 0}) {
  return (dispatch, getState, api) => {
    const state = getState()
    var status = ''
    if (data.status != '') {
      status = "status=" + data.status
    }
    dispatch({
      type: GET_EVENTS_LIST
    })
    return api({
      headers: {
        'Authorization': `JWT ${state.user.token}`,
        'Account-Id': `57b0c8285356483f0e9eec2d`
      }
    }).get(`/manager/events?q=${data.searchField}${status}`)
    .then(events => {
      dispatch(addManyEvents(events.data.data))
    })
  }
}

export function addevent(item) {
  return {
    type: ADD_EVENT,
    payload: item
  }
}

export function addManyEvents(itemList) {
  return {
    type: ADD_MANY_EVENTS,
    payload: itemList
  }
}
