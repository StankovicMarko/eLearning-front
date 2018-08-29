import {SubjectActivityType} from './subject-activity-type';
import {Subject} from './subject';

export class SubjectActivity {
    id: number;
    datumAktivnosti: Date;
    maxBrojBodova: number;
    nastavnaAktivnostTipDto: SubjectActivityType;
    predmet: Subject;
}
