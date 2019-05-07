import { BranchType, StudentPathType, STUDENT_PATH_LIST } from '@4c-shared/shared.service';

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
    descriptionShort: string;
    descriptionDetailed: string;

    /* other */
    _id: string,
    imageSrc: string;
    imageAlt: string;
    rating: number;
    attendees: any[];
}

/**
 * new type defines training type.
 */
export declare type TrainingType = StudentPathType;
/**
 * list of all training types.
 */
export const TRAINING_TYPE_LIST: TrainingType[] = STUDENT_PATH_LIST;

/**
 * list of training levels
 */
export const TRAINING_LEVEL = ['debutant', 'intermediare', 'avancé'];
