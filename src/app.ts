import { makeLogger } from './Logger/';

const logger = makeLogger();

logger.debug({
    type: 'LOG_1',
    message: 'Vamos virar vasco!!'
});