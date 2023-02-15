export interface IFormState {
    intro: string;
    name: string;
    adoptedIntoService: number;
    country: string;
    type: string;
    productionPeriod: string;
    exploitationYears: string;

    numberOfIssued: number;
    weight: number;
    length: number;
    width: number;
    height: number;
    clearance: number;

    crewSize: number;
    crewStructure: string;
}

// export type = 'setIntro' | 'setName' | 'setAdoptedIntoService' | 'setCountry' | 'setType';

export const FormInitialState: IFormState = {
    intro: '', adoptedIntoService: 0, name: '', country: '', type: '', productionPeriod: '', exploitationYears: '', numberOfIssued: 0, weight: 0, length: 0, width: 0, height: 0, clearance: 0, crewSize: 0, crewStructure: ''
}