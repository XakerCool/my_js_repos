
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
    growth: "301asd",
  };
  
  const handleSubmit = (form) => {
    const { username, password, age, growth } = form;
  
    let isValid = true;
    let errors = { };
  
    if (username.length < 5) {
      errors["username"] = "Логин должен быть не меньше 5 символов";
      isValid = false;
    }
    
    if (password.length < 8) {
      errors["password"] = "Пароль должен быть не меньше 8 символов";
      isValid = false;
    }
  
    if (password.indexOf("!") < 0) {
      errors["password"] = "Пароль должен содержать '!'";
      isValid = false;
    }
  
    let ageNumber = parseInt(age);
    // "20" !== "20.1"
  
    if (isNaN(ageNumber) || age !== String(ageNumber)) {
      errors["age"] = "Возраст должен быть числом";
      isValid = false;
    }
  
    if (age < 0 || age > 150) {
      errors["age"] = "Возраст должен быть в промежутке от 0 до 150 лет";
      isValid = false;
    }

    if(growth !== null) {
        let growthNumber = parseInt(growth);

        if(isNaN(growthNumber) || growth !== String(growthNumber)){
            errors["growth"] = "Рост дожен быть числом";
            isValid = false;
        }
        if(growthNumber < 0 || growthNumber > 300){
            errors["growth"] = "Рост должен быть не меньше нуля и не больше 300";
            isValid = false;
        }
    }
  
    if (isValid) {
      // отправить форму 
      const user = {
        username,
        password,
        age,
        growth,
        dateOfRegistration: new Date(),
      };
  
      console.log("Создаем пользователя", user);
    } else {
      // отображаем ошибки в форме
      console.log("Форма заполнена с ошибками", errors, form);
    }
  }
  
  /// 
  
  handleSubmit(validForm);
  console.log("-----");
  handleSubmit(invalidForm);