import {Division} from './Division';
import {Position} from './Position';
import {EducationDegree} from './educationDegree';

export interface Employee {
  id?: number;
  name?: string;
  dateOfBirth?: string;
  idCard?: string;
  salary?: string;
  phoneNumber?: string;
  email?: string;
  address?: string;
  division?: Division;
  educationDegree?: EducationDegree;
  position?: Position;
}
