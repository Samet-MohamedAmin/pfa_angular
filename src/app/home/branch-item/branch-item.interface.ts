import {BranchType} from '../../shared/shared.service'
export interface BranchItemInterface {
    name: string;
    // TODO: change image attribute to imageSrc
    image: string;
    imageAlt: string;
    description: string;
    code:BranchType
}