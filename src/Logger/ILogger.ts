export interface ILogData <T> {
    type: string;
    payload?: T;
    message?: string;
    error?: Error;
}  

export interface ILogMethod { <T>(logData: ILogData<T>): void };

export interface ILogger {
    debug: ILogMethod;
    info: ILogMethod;
    warn: ILogMethod;
    error: ILogMethod;
}