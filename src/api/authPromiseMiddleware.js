export default function authPromiseMiddleware() {
  return next => action => {
    const { authpromise, type, ...rest } = action;

    if (!authpromise) return next(action);

    const SUCCESS = type + '_success';
    const REQUEST = type + '_request';
    const FAILURE = type + '_failure';
    next({ ...rest, type: REQUEST });
    return authpromise
      .then(req => {
        next({ ...rest, req, type: SUCCESS });
        return true;
      })
      .catch(error => {
        next({ ...rest, error, type: FAILURE });
        console.log(error);
        return false;
      });
   };
}
