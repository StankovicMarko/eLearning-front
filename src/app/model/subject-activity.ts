import {SubjectActivityType} from './subject-activity-type';

export class SubjectActivity {
    id: number;
    datumAktivnosti: Date;
    maxBrojBodova: number;
    nastavnaAktivnostTipDto: SubjectActivityType;
    predmetId: number;
}