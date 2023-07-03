import bookRouter from "./bookRouter";

const Routes = (app: any) => {
    app.use(bookRouter)
}

export default Routes;