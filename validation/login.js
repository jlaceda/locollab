import Validator from 'validator';
import isEmpty from 'is-empty';

function ValidateLoginInput(data) {
     let errors = {};

     // Convert empty fields to an empty string so we can use validator functions
     data.email = !isEmpty(data.email) ? data.email : '';
     data.password = !isEmpty(data.password) ? data.password : '';

     // Email checks
     if (Validator.isEmpty(data.email)) {
          errors.email = "Email field is required";
     } else if (!Validator.isEmail(data.email)) {
          errors.email = "Email is invalid";
     }

     // Password checks
     if (Validator.isEmpty(data.password)) {
          errors.password = 'Password field is required';
     }

     // return statement
     return {
          errors,
          isValid: isEmpty(errors)
     };
};

export default ValidateLoginInput;