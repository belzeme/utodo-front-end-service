import { defaultLogger } from "../../services/logger";

export const ping =
  (route: string = "http://localhost:8080/ping") =>
  async (logger = defaultLogger) => {
    try {
      logger.log(`pinging the todos api on ${route}`);
      const response = await fetch(route);
      logger.log({
        response,
        body: await response.json(),
      });
      return response.ok;
    } catch (error) {
      logger.error("error");
      return false;
    }
  };
