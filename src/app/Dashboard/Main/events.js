import api from './../../../helpers/api'
export const ADD_EVENT = 'home_events/add_event',
             ADD_MANY_EVENTS = 'home_events/add_many_events',
             GET_EVENTS_LIST = 'home_events/get_events_list'

export function getEventsList() {
  return (dispatch, state, api) => {
    dispatch({
      type: GET_EVENTS_LIST
    })
    api('test').get(`/events`)
    .then(events => dispatch(addManyEvents(events.data.data)))
    // .then(events => events.data.data.map(e => {
    //   dispatch(addEvent(e))
    // }))
  }
}

export function addManyEvents(items) {
  return {
    type: ADD_MANY_EVENTS,
    items: items
  }
}

export function addEvent(item) {
  return {
    type: ADD_EVENT,
    item: item
  }
}
