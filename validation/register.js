import Validator from 'validator';
import isEmpty from 'is-empty';

function ValidateRegisterInput(data) {
     let errors = {};

     // Convert empty fields to an empty string so we can use validator functions
     data.name = !isEmpty(data.name) ? data.name : "";
     data.email = !isEmpty(data.email) ? data.email : "";
     data.password = !isEmpty(data.password) ? data.password : "";
     data.password2 = !isEmpty(data.password2) ? data.password2 : "";

     // Name check
     if (Validator.isEmpty(data.name)) {
          errors.name = 'Name field is required';
     }

     // Email Checks
     if (Validator.isEmpty(data.email)) {
          errors.email = 'Email field is required';
     }

     if (Validator.isEmpty(data.password)) {
          errors.password = 'Password field is required'
     }

     if (Validator.isEmpty(data.password2)) {
          errors.password2 = 'Confirm password field is required';
     }

     if (Validator.isLength(data.password, { min: 6, max: 30 })) {
          errors.password = 'Password must be at least 6 characters';
     }

     if (!Validator.equals(data.password, data.password2)) {
          errors.password2 = 'Passwords do not match';
     }

     return {
          errors,
          isValid: isEmpty(errors)
     };
};

export default ValidateRegisterInput;