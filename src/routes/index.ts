import companyRouter from "./companyRouter";
import employeeRouter from "./employeeRouter";

const Routes = (app: any) => {
  app.use(employeeRouter);
  app.use(companyRouter);
};

export default Routes;
