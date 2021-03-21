
let validForm = {
    username: "anton",
    password: "anton!anton",
    age: "20",
    growth: "185",
};

let invalidForm = {
    username: "anto",
    password: "anto",
    age: "20a",
    growth: "301a",
};
  
  
const validateUsername = (username) => (
    username.length < 5
    ? [false, "Логин должен быть не меньше 5 символов"]
    : [true, null]
);
  
const validatePassword = (password) => {
    
    if (password.length < 8) {
      return [false, "Пароль должен быть не меньше 8 символов"];
    }
  
    if (password.indexOf("!") < 0) {
      return [false,  "Пароль должен содержать '!'"];
    }
  
    return [true, null];
}
  
const validateAge = (age) => {
    let ageNumber = parseInt(age);
    if (isNaN(ageNumber) || age !== String(ageNumber)) {
      return [false, "Возраст должен быть числом"];
    }
    if (age < 0 || age > 150) {
      return [false, "Возраст должен быть в промежутке от 0 до 150 лет"];
    }
    return [true, null];
}
const validateGrowth = (growth) => {
    let growthNumber = parseInt(growth);
    if (isNaN(growthNumber) || growth !== String(growthNumber)) {
        return [false, "Рост должен быть числом"];
    }
    if(growthNumber < 0 || growthNumber > 300){
        return[false, "Рост должен быть не меньше 0 и не меньше 300"];
    }
    return [true, null];
}
  
const createUser = ({
    username,
    password,
    age,
    growth
  }) => ({
    username,
    password,
    age,
    growth,
    dateOfRegistration: new Date()
});
  
  
const validateUserForm = form => {
    const { username, password, age, growth } = form;
  
    let isFormValid = true;
    const errors = [];
  
  
    let isValid = true;
    let error = null;
  
    [isValid, error] = validateUsername(username);
    isFormValid &= isValid;
    errors.push(error);
  
    [isValid, error] = validatePassword(password);
    isFormValid &= isValid;
    errors.push(error);
  
    [isValid, error] = validateAge(age);
    isFormValid &= isValid;
    errors.push(error);

    [isValid, error] = validateGrowth(growth);
    isFormValid &= isValid;
    errors.push(error);
  
    return [
      isFormValid, 
      errors, 
      isFormValid && createUser(form)
    ];
}
  
  
const handleSubmit = (form) => {
    const [isValid, errors, user] = validateUserForm(form);
  
    if (isValid) {
      console.log("Создаем пользователя", user);
    } else {
      console.log("Форма заполнена с ошибками", errors, form);
    }
}
  
/// 
  
handleSubmit(validForm);
console.log("-----");
handleSubmit(invalidForm);