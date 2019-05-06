import { TrainingRequestState } from '@4c-shared/shared.service';

export interface ProfileTrainingRequestInterface {
    courseId: number;

    courseTitle: string;
    courseInstructor: string;
    courseImageSrc: string;
    courseDescriptionShort: string;
    courseStartDate: Date;

    state: TrainingRequestState,
    
    hide: boolean;
}
