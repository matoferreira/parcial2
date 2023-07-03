import { companies } from "../data/companies";
import { Company } from "../interface/companyInterface";

export const companyController = {
  getCompany: (req: any, res: any) => {
    try {
      const result: Company[] = companies.map(
        ({ id, name, webSite, notes }) => ({
          id,
          name,
          webSite,
          notes,
        })
      );
      res.json(result);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Error fetching company, please try again" });
    }
  },

  getCompanyByID: (req: any, res: any) => {
    try {
      if (!req.params.id || !parseInt(req.params.id))
        return res.status(400).json("Invalid Company ID, try again");

      const result = companies.find(
        (company) => company.id === parseInt(req.params.id)
      );
      if (result) res.json(result);
      else
        res
          .status(404)
          .json({ message: "Company not found, please try again" });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Cannot get the company you are looking for, please try again",
      });
    }
  },

  addCompany: (req: any, res: any) => {
    try {
      const newCompany: Company = req.body;

      const newCompanyId = generateUniqueId();
      newCompany.id = newCompanyId;

      companies.push({
        ...newCompany,
      });

      res.json({ message: "Company sucessfuly added to Agenda" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Error adding company to agenda, please try again" });
    }
  },

  deleteCompany: (req: any, res: any) => {
    try {
      const companyId: number = req.params.id;

      const companyIndex = companies.findIndex(
        (company) => company.id === companyId
      );

      if (companyIndex === -1) {
        return res.status(404).json({ message: "company not found in agenda" });
      }

      companies.splice(companyIndex, 1);

      res.json({ message: "company deleted successfully from the agenda" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error deleting company from the agenda, please try again" });
    }
  },
};

function generateUniqueId() {
  const maxId = 9999;
  const minId = 1000;

  const randomId = Math.floor(Math.random() * (maxId - minId + 1)) + minId;
  return randomId;
}
