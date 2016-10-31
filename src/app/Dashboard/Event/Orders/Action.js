import api from './../../../../helpers/api'
export const GET_ORDERS_LIST = 'event/get_orders_list',
             ADD_MANY_ORDERS = 'event/add_many_orders'
import {startLoading, endLoading} from './../../../../components/Common/SpinIcon/actions'
export function getOrdersListByID(id) {
  return (dispatch, getState, api) => {
    const state = getState()
    dispatch({
      type: GET_ORDERS_LIST
    })
    dispatch(startLoading())
    return api({
      headers: {
        'Authorization': `JWT ${state.user.token}`,
        'Account-Id': `57b0c8285356483f0e9eec2d`
      }
    }).get(`/manager/orders?event_id=${id}`)
    .then(orders => {
      dispatch(addManyOrders(orders.data.data))
      dispatch(endLoading())
    })
  }
}

export function getOrdersList(data = {searchField: '', status: 'DRAFT'}) {
  return (dispatch, getState, api) => {
    const state = getState()
    dispatch({
      type: GET_ORDERS_LIST
    })
    return api({
      headers: {
        'Authorization': `JWT ${state.user.token}`,
        'Account-Id': `57b0c8285356483f0e9eec2d`
      }
    }).get(`/manager/orders?q=${data.searchField}&status=${data.status}&limit=1000`)
    .then(orders => dispatch(addManyOrders(orders.data.data)))
    // .then(orders => orders.data.data.map(e => {
    //   dispatch(addOrder(e))
    // }))
  }
}


export function addManyOrders(itemList) {
  return {
    type: ADD_MANY_ORDERS,
    payload: itemList
  }
}