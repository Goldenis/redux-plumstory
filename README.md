###DASHBOARD APP

###STRUCTURE
Application located in `/src` directory  
`/actions` - Action functions and const for reducers  
`/reducers` - Reducers  
`/helpers`  - anything that will be helpful  
`/api`      - some middlewares (TODO: Maybe change dir name to /middleware)
`/components` - helpful components  
  UI - widgets, blocks, any reusable components  
  Common - layout components via Header, Footer  
  Any else only for components  

###DEVELOPMENT ENV
For start dev mode just use in console:
```
npm start
```
###PRODUCTION/SERVER ENV
For start in production mode use:
```
npm run server
```
p.s. Change server ip in `package.json` file for production mode
