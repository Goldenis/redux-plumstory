import {getHTTPHeaderAuth, baseURL} from './../../../helpers/helpers';
import {CALL_API} from 'redux-api-middleware';

export const REQUEST = 'orders/REQUEST',
             SUCCESS = 'orders/SUCCESS',
             FAILURE = 'orders/FAILURE';

export function Orders(data = {searchField: '', status: '', offset: 0}) {
 return {
   [CALL_API]: {
     endpoint: `${baseURL}/manager/orders?q=${data.searchField}&status=${data.status}&limit=1000`,
     method: 'GET',
     ...getHTTPHeaderAuth(),
     types: [REQUEST, SUCCESS, FAILURE]
   }
 }
}
