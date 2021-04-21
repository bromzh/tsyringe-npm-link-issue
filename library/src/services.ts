import { injectable } from "tsyringe";

@injectable()
export class LoggerService {
    log(...args: any[]): void {
        console.log(...args);
    }
}

@injectable()
export class ApiService {
    constructor(private logger: LoggerService) {
    }

    getInfo(): string {
        this.logger.log('get info');
        return 'Info';
    }
}