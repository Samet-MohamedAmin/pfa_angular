import { BranchType } from '../shared/shared.service';

export interface TrainingItemInterface {
    /* general informations */
    title: string;
    instructor: string;
    startDate: Date;
    endDate: Date;
    totalHours: number;
    totalPlaces: number;

    /* specifications  */
    levels: number[];
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


export declare type TrainingType = 'soft-skills' | 'technique' | 'entrepreneurial';
export const TRAINING_TYPE_LIST: TrainingType[] = ['soft-skills', 'technique', 'entrepreneurial'];

export const TRAINING_LEVEL = ['debutant', 'intermediare', 'avancé'];
