require('babel-register')({
  comments: false,
  highlightCode: (process.env.NODE_ENV === 'production' ? false : true),
  minified: (process.env.NODE_ENV === 'production' ? true : false),
});
require.extensions['.scss'] = () => {
    return;
};
require.extensions['.css'] = () => {
    return;
};
require.extensions['.svg'] = () => {
    return;
};
require.extensions['.png'] = () => {
    return;
};
require.extensions['.jpg'] = () => {
    return;
};
if(process.env.NODE_ENV === 'production') {
  console.log(`production`)
}

require('./dev-app.js')
