import { ValidateNested } from 'class-validator';

import { UserGigSkillsEventPayloadType } from './UserGigSkillsEventPayloadTypes';
import {Type} from 'class-transformer';
import {UserGigSkillsEventPayload} from './UserGigSkillsEventPayload.dto';


export class UserGigSkillsRequestBodyDto {
    @ValidateNested()
    @Type(() => UserGigSkillsEventPayload)
    payload: UserGigSkillsEventPayloadType;
}
