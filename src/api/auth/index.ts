import { FormValuesModel } from "../../components/TemplateForms/Auth";
import { generateRandomToken } from "../../helpers/utils";

const authAPI = {
  logIn: (values: FormValuesModel) => {
    // Simulation backend service
    const response = { token: generateRandomToken(values.username.length * 2) };
    return response;
  },
};

export default authAPI;
