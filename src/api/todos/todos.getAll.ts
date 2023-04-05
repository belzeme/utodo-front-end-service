import { defaultLogger } from "../../services/logger";

export const getAll =
  (route: string = "http://localhost:8080/todos") =>
  async (logger = defaultLogger) => {
    try {
      logger.log(`Fetching all the todos api on ${route}`);
      const response = await fetch(route);
      const body = await response.json();
      logger.log({
        response,
        body,
      });
      return response.ok ? body : null;
    } catch (error) {
      logger.error("error");
      return false;
    }
  };
