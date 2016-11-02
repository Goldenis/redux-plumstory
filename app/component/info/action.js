export const GET_INFO = 'info/get'

export function addInfo(info) {
  return {
    type: GET_INFO,
    payload: info
  }
}

export function getInfo() {
}
