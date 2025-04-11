import { rootConstant } from '../../utils/importConstantsUtil';
import {
    ROOT_LEVEL,
    ROOT_LABEL
} from '../../utils/constants/rootKeys';

export const appState = {
    level: rootConstant(ROOT_LEVEL),
    label: rootConstant(ROOT_LABEL)
};
