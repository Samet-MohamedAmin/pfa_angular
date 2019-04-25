export interface IndicatorInterface {
    name: string;
    value: string;
    goalCurrent: {value: string; dueTo: string;};
    goalNext: string;
    color: IndicatorColor;
    icon: string;
}

export type IndicatorColor = '#F44336' | '#E91E63' | '#9C27B0' | '#673AB7' | '#009688' | '#4CAF50' | '#E65100' | '#FFC107' | '#FF3D00' | '#FBC02D' | '#1E88E5' | '#01579B' | '#006064';
export const COLOR_LIST: IndicatorColor[] = ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#009688', '#4CAF50', '#E65100', '#FFC107', '#FF3D00', '#FBC02D', '#1E88E5', '#01579B', '#006064'];