import {log, error} from './logger.console';

export interface ILogger {
  log: (...args: any) => void;
  error: (...args: any) => void;
}

export const defaultLogger = {log, error};
