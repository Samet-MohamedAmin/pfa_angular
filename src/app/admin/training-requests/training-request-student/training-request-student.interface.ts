export interface TrainingRequestStudentInterface {
    requestId: number;

    courseId: string;
    courseTitle: string;
    courseImage: string;
    courseDescriptionShort: string;

    studentId: string;
    studentBranch: string;
    studentFirstName: string;
    studentLastName: string;
    studentOverview: string;
    studentStudyYear: number;
    
    hide: boolean;
}
