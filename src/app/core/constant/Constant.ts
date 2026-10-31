export const GlobalConstant = {
     LOCAL_LOGIN_KEY: 'farmerLoginData',
     API_ENDPOINTS: {
        LOGIN : 'farmerUsers/login',
        GET_USER_BY_ID : 'getUserbyId?id=',
        GET_ALL_ROLES : 'farmerRoles/get-all-roles'
     },
     // Static messages basically using for forms
     VALIDATION_MESSAGES:{
        REQUIRED : 'This is required',
        MOBILE_NO : 'Max and Min 10 Char Needed'
     }
};

// with the help of pipe we can read the constant data in the HTML.