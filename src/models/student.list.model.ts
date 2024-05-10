import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    grade: { type: Number, required: true },
    class: { type: String, required: true },
    subjects: {
        gradeOne: {
            Mathematics: { type: Number, required: false },
            LanguageAndLiterature: { type: Number, required: false },
            NaturalSciences: { type: Number, required: false },
            SocialSciences: { type: Number, required: false },
            PhysicalEducation: { type: Number, required: false },
            English: { type: Number, required: false },
            TechnologyOrComputerScience: { type: Number, required: false },
            MusicOrVisualArts: { type: Number, required: false },
            EthicsAndCitizenshipEducation: { type: Number, required: false },
        },
        gradeTwo: {
            Mathematics: { type: Number, required: false },
            LanguageAndLiterature: { type: Number, required: false },
            NaturalSciences: { type: Number, required: false },
            SocialSciences: { type: Number, required: false },
            PhysicalEducation: { type: Number, required: false },
            English: { type: Number, required: false },
            TechnologyOrComputerScience: { type: Number, required: false },
            MusicOrVisualArts: { type: Number, required: false },
            HealthEducation: { type: Number, required: false },
        },
        gradeThree: {
            Mathematics: { type: Number, required: false },
            LanguageAndLiterature: { type: Number, required: false },
            NaturalSciences: { type: Number, required: false },
            SocialSciences: { type: Number, required: false },
            PhysicalEducation: { type: Number, required: false },
            English: { type: Number, required: false },
            TechnologyOrComputerScience: { type: Number, required: false },
            MusicOrVisualArts: { type: Number, required: false },
            EthicsAndCitizenshipEducation: { type: Number, required: false },
        },
    },
}, { collection: "students" });

const StudentModel = mongoose.model("Student", studentSchema);

export default StudentModel;