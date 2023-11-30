import {IsString, IsIn, IsUUID, IsNumber, IsPositive, IsBoolean} from 'class-validator';


export class UserGigSkillsEventPayload {

    @IsString()
    @IsIn(['placed'])
    status: string;

    @IsUUID('all')
    id: string;

    @IsNumber()
    @IsPositive()
    tcUserId: number;

    @IsUUID('all')
    jobId: string;

    @IsBoolean()
    viewedByCustomer: boolean;

    @IsString()
    createdAt: string;

    @IsString()
    updatedAt: string;
}
