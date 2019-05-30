export interface IndicatorInterface {
    name: string;
    value: string;
    goalCurrent: {value: string; dueTo: string;};
    goalNext: string;
    color: IndicatorColor;
    icon: string;
}

const selectedColors = {
                        certifedStudent: 'blue',
                        certifedTeacher: 'violet | deep_blue',
                        formedFemale: 'pink | violet',
                        formedStudents: 'green',
                        formedTeachers: 'deep_green',
                        actions: 'gold',
                        planified: 'deep_orange',
                        realized: 'deep_orange'
                    };

export type IndicatorColor = string//'#F44336' | '#E91E63' | '#9C27B0' | '#673AB7' | '#009688' | '#4CAF50' | '#E65100' | '#FFC107' | '#FF3D00' | '#FBC02D' | '#1E88E5' | '#01579B' | '#006064';


export const COLOR_LIST: IndicatorColor[] = ['#0288D1', '#01579B', '#C2185B', '#388E3C', '#1B5E20', '#FFA000', '#E64A19', '#BF360C'];