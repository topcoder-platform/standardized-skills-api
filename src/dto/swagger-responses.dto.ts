import { ApiProperty } from '@nestjs/swagger';

export class CategoryResponseDto {
    @ApiProperty({ format: 'uuid', example: '6db06f9a-2c47-4b6f-8a50-b88a3e6b4a79' })
    id: string;

    @ApiProperty({ example: 'Software Development' })
    name: string;

    @ApiProperty({ example: 'Skills used to build software products', nullable: true, required: false })
    description?: string;
}

export class SkillCategorySummaryDto {
    @ApiProperty({ format: 'uuid', example: '3c7d3e28-2e22-4d75-9a6d-7db13c7ab48a' })
    id: string;

    @ApiProperty({ example: 'Backend' })
    name: string;

    @ApiProperty({ example: 'Server-side skills', nullable: true, required: false })
    description?: string;
}

export class SkillResponseDto {
    @ApiProperty({ format: 'uuid', example: 'a1c85186-2f7d-4b29-bc2a-3b6a9175d0fb' })
    id: string;

    @ApiProperty({ example: 'Node.js' })
    name: string;

    @ApiProperty({ example: 'JavaScript runtime built on Chrome V8', nullable: true, required: false })
    description?: string;

    @ApiProperty({ example: '2024-01-01T10:15:00.000Z', nullable: true, required: false })
    deletedAt?: string | null;

    @ApiProperty({ type: SkillCategorySummaryDto, nullable: true })
    category: SkillCategorySummaryDto | null;
}

export class SkillAutocompleteResponseDto {
    @ApiProperty({ format: 'uuid', example: '9a85fc12-613e-4bb3-9d1a-1d6ae4f76848' })
    id: string;

    @ApiProperty({ example: 'React' })
    name: string;

    @ApiProperty({ type: SkillCategorySummaryDto, nullable: true })
    category: SkillCategorySummaryDto | null;
}

export class SkillFuzzyMatchResponseDto {
    @ApiProperty({ format: 'uuid', example: 'a9b19d30-3355-4a5b-92a7-f3a2c73bc9a2' })
    id: string;

    @ApiProperty({ example: 'React Native' })
    name: string;
}

export class SemanticSkillMatchResponseDto extends SkillFuzzyMatchResponseDto {
    @ApiProperty({ format: 'number', example: '0-1' })
    weighted_distance: number;
}

export class SkillAssignmentResponseDto {
    @ApiProperty({ type: [SkillResponseDto] })
    skills: SkillResponseDto[];
}

export class UserSkillLevelDto {
    @ApiProperty({ format: 'uuid', example: 'f4020544-3b22-4e33-8d71-0faad72bb8b9' })
    id: string;

    @ApiProperty({ example: 'verified' })
    name: string;

    @ApiProperty({ example: 'Validated by Topcoder', required: false })
    description?: string;
}

export class UserSkillDisplayModeDto {
    @ApiProperty({ format: 'uuid', example: 'f7b373a0-7a34-4a1f-9cdd-3b3b5d1c33b3' })
    id: string;

    @ApiProperty({ example: 'public' })
    name: string;
}

export class UserSkillResponseDto {
    @ApiProperty({ format: 'uuid', example: 'b4085e09-6a30-4ed8-85fd-4d8c506f6ca9' })
    id: string;

    @ApiProperty({ example: 'PostgreSQL' })
    name: string;

    @ApiProperty({ type: SkillCategorySummaryDto, nullable: true })
    category: SkillCategorySummaryDto | null;

    @ApiProperty({ type: [UserSkillLevelDto] })
    levels: UserSkillLevelDto[];

    @ApiProperty({ type: UserSkillDisplayModeDto, nullable: true })
    displayMode: UserSkillDisplayModeDto | null;
}

export class DisplayModeListResponseDto {
    @ApiProperty({ type: [UserSkillDisplayModeDto] })
    displayModes: UserSkillDisplayModeDto[];
}

export class EmptyResponseDto {
    @ApiProperty({ example: {} })
    message?: Record<string, never>;
}
