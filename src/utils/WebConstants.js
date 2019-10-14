
export const fielUserName = 'username';
export const fielEmail = 'email';
export const fielPhone = 'phone';
export const fielGender = 'sex';
export const fielFavColor = 'favoritecolor';
export const fielEmployed = 'employed';
export const fielNotes = 'notes';


// remove offer 
export const setDefaultValue = (initObj) => {
    initObj = {
        username: 'pankaj',
        email: 'aaa@gmail.com',
        phone: '0000000000',
        sex: 'male',
        favoritecolor: 'Blue',
        employed: true,
        notes: 'This is an notes for testing purpose here.',
    };
    return initObj;
};

export const removeDefaultValue = (initObj) => {
    initObj = {
        username: '',
        email: '',
        phone: '',
        sex: '',
        favoritecolor: '',
        employed: false,
        notes: '',
    };
    return initObj;
};
