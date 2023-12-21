



## note 
1. set up sanity backend and create scema, cd into folder and run npm run dev to see database, create sanity.ts in lib folder to connect sanity backend to frontend doc: https://www.sanity.io/docs 
2. check apiVersion in sanity.ts match sanity studio!!! or will fetch a null 
3. create provider for stipe and wrap whole app in it at layout 
4. never code shopping cart, use shadcn sheet component and useShoppingCart, make life much easier https://ui.shadcn.com/docs/components/sheet