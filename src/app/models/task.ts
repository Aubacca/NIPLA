export interface Task {
    id: string;
    answer?: string;
    question?: string;
    TYPE: string;
    NAME: string;
    FG: string;
    TASK_OWNER: string;
    REQUEST: string;
    PRIORITY: string;
    STATUS: string;
    CREATION_DATE: string;
}

/*
export class Score {
  id: number;
  providerId: number;
  score: number;
  validFrom: Date;

  constructor(jsondata) {
    Object.assign(this, jsondata);
  }
}
*/