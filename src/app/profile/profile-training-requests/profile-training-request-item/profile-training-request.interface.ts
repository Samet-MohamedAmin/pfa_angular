import { TrainingRequestState } from 'src/app/shared/shared.service';

export interface ProfileTrainingRequestInterface {
    requestId: number;

    courseTitle: string;
    courseInstructor: string;
    courseImageSrc: string;
    courseDescriptionShort: string;
    courseStartDate: Date;

    state: TrainingRequestState,
    
    hide: boolean;
}
