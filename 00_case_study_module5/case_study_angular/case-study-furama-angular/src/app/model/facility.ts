import {RenType} from './ren-type';
import {FacilityType} from './facility-type';

export interface Facility {
  id: number;
  name: string;
  area: number;
  cost: string;
  maxPeople: number;
  standardRoom: string;
  descriptionOtherConvenience: string;
  poolArea: number;
  numberOfFloors: number;
  facilityFree: string;
  facilityType: FacilityType;
  renType?: RenType;
  facilityImage?: string;
}
