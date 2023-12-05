import { getSkillsESClient } from '../utils/es-helper';
import { envConfig } from '../config';
import { LoggerClient } from '../utils/LoggerClient';
import elasticsearch7 from 'elasticsearch7';

const skillESClient = getSkillsESClient();
const logger = new LoggerClient('init-es');
let exists: elasticsearch7.ApiResponse;
let index: string;

const skillPutSettingsRequest: elasticsearch7.RequestParams.IndicesPutSettings = {
    index: envConfig.SKILLS_ES.INDEX,
    body: {
        settings: {
            analysis: {
                normalizer: {
                    lowercaseNormalizer: {
                        filter: ['lowercase'],
                    },
                },
            },
        },
    },
};

const skillPutMappingRequest: elasticsearch7.RequestParams.IndicesPutMapping = {
    index: envConfig.SKILLS_ES.INDEX,
    body: {
        properties: {
            doc: {
                properties: {
                    id: {
                        type: 'keyword',
                    },
                    name: {
                        type: 'text',
                    },
                    popularity: {
                        type: 'number',
                    },
                    category: {
                        properties: {
                            id: {
                                type: 'keyword',
                            },
                            name: {
                                type: 'text',
                            },
                        },
                    },
                    name_suggest: {
                        type: 'completion',
                        preserve_position_increments: true,
                    },
                    createdAt: {
                        type: 'date',
                        format: 'yyyy-MM-dd HH:mm:ss',
                    },
                    updatedAt: {
                        type: 'date',
                        format: 'yyyy-MM-dd HH:mm:ss',
                    },
                },
            },
        },
    },
};

const initSkillsIndex = async () => {
    index = envConfig.SKILLS_ES.INDEX;

    if (process.argv.length === 3 && process.argv[2] === 'force') {
        logger.info(`Deleting pre-existing index ${index}`);
        try {
            await skillESClient.indices.delete({ index });
        } catch (err) {
            logger.error(`Error encountered: ${JSON.stringify(err)}`);
        }
    }
    exists = await skillESClient.indices.exists({ index });
    if (exists.body) {
        logger.info(`The index ${index} exists.`);
    } else {
        logger.info(`The index ${index} will be created.`);

        await skillESClient.indices.create({ index });
        await skillESClient.indices.close({ index });
        await skillESClient.indices.putSettings(skillPutSettingsRequest);
        await skillESClient.indices.open({ index });
        await skillESClient.indices.putMapping(skillPutMappingRequest);
    }
};

initSkillsIndex()
    .then(() => {
        logger.info(`Skills index ${envConfig.SKILLS_ES.INDEX} initialized`);
        process.exit(0);
    })
    .catch((err) => {
        logger.error(`Error occured: ${JSON.stringify(err)}`);
        process.exit(1);
    });
