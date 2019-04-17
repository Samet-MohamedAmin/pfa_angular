import { BranchType } from '../shared/shared.service';

/**
 * training interface defining all training properties
 * as they are described in the backend
 */
export interface TrainingItemInterface {
    /* general informations */
    title: string;
    instructor: string;
    startDate: Date;
    endDate: Date;
    totalHours: number;
    totalPlaces: number;

    /* specifications  */
    level: number;
    requirements: string[];
    type: TrainingType;
    concernedBranches: BranchType[];

    /* description */
    goals: string[];
    // TODO: change briefDescription => descriptionBrief & detailedDescription => descriptionDetailed
    descriptionShort: string;
    descriptionDetailed: string;

    /* other */
    imageSrc: string;
    imageAlt: string;
    rating: number;
}

/**
 * new type defines training type.
 */
export declare type TrainingType = 'soft-skills' | 'technique' | 'entrepreneurial';
/**
 * list of all training types.
 */
export const TRAINING_TYPE_LIST: TrainingType[] = ['soft-skills', 'technique', 'entrepreneurial'];

/**
 * list of training levels
 */
export const TRAINING_LEVEL = ['debutant', 'intermediare', 'avancé'];
