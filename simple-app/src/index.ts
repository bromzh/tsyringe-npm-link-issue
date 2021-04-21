import 'reflect-metadata';
import { container, injectable } from 'tsyringe';
import { ApiService, LoggerService } from '@my/library';

@injectable()
export class ApiConsumer {
    constructor(private api: ApiService) { }

    main(): void {
        console.log(this.api.getInfo());
    }
}

function main() {
    const apiConsumer = container.resolve(ApiConsumer);
    apiConsumer.main();
}

main();