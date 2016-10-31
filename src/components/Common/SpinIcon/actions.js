export const START_LOADING = 'loading/start',
             END_LOADING = 'loading/end'

export function startLoading() {
  return {
    type: START_LOADING,
    value: true
  }
}

export function endLoading(item) {
  return {
    type: END_LOADING,
    value: false
  }
}
