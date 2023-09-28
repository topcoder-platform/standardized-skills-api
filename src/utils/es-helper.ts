import elasticsearch from '@elastic/elasticsearch';
import { envConfig } from '../config';

let skillsESClient: elasticsearch.Client;

export default function getSkillsESClient() {
    if (skillsESClient) return skillsESClient;
    else return new elasticsearch.Client({ node: envConfig.SKILLS_ES.HOST });
}
