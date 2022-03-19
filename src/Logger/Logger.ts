import pino from 'pino';
import { ILogger, ILogData} from './ILogger';

const pinoLogger = pino({
    level: 'debug'
});

const parseLoggerInputToPinoFormat = <T> ({ message, error, ...data}: ILogData<T>) => ({
    msg: message,
    err: error,
    ...data
});

const AppLogger: ILogger = {
    debug: <T> (logData: ILogData<T>) => pinoLogger.debug(parseLoggerInputToPinoFormat(logData)),
    info: <T> (logData: ILogData<T>) => pinoLogger.info(parseLoggerInputToPinoFormat(logData)),
    warn: <T> (logData: ILogData<T>) => pinoLogger.warn(parseLoggerInputToPinoFormat(logData)),
    error: <T> (logData: ILogData<T>) => pinoLogger.error(parseLoggerInputToPinoFormat(logData)),
}

export default (): ILogger => AppLogger;