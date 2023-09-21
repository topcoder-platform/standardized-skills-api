import { asyncWrapper } from '../utils/asyncWrapper';
import { SuccessResponse } from '../utils/SuccessResponse';
import { Service } from 'typedi';

@Service()
export default class HealthController {
    health = asyncWrapper(async () => {
        return new SuccessResponse({
            status: 'ok',
        });
    });
}
