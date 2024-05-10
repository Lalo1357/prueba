export interface IStudents {
    id: number;
    name: string;
    lastName: string;
    age: number;
    grade: number;
    class: string;
    subjects: ISubjects;
}

export interface ISubjects {
    gradeOne?: IGradeOne;
    gradeTwo?: IGradeTwo;
    gradeThree?: IGradeThree;
}

export interface IGradeOne {
    Mathematics: ISubject;
    LanguageAndLiterature: ISubject;
    NaturalSciences: ISubject;
    SocialSciences: ISubject;
    PhysicalEducation: ISubject;
    English: ISubject;
    TechnologyOrComputerScience: ISubject;
    MusicOrVisualArts: ISubject;
    EthicsAndCitizenshipEducation: ISubject;
}

export interface IGradeTwo {
    Mathematics: ISubject;
    LanguageAndLiterature: ISubject;
    NaturalSciences: ISubject;
    SocialSciences: ISubject;
    PhysicalEducation: ISubject;
    English: ISubject;
    TechnologyOrComputerScience: ISubject;
    MusicOrVisualArts: ISubject;
    HealthEducation: ISubject;
}

export interface IGradeThree {
    Mathematics: ISubject;
    LanguageAndLiterature: ISubject;
    NaturalSciences: ISubject;
    SocialSciences: ISubject;
    PhysicalEducation: ISubject;
    English: ISubject;
    TechnologyOrComputerScience: ISubject;
    MusicOrVisualArts: ISubject;
    EthicsAndCitizenshipEducation: ISubject;
}

export interface ISubject {
    mark: number;
    teacher: string;
}