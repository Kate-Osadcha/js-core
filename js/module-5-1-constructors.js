// CONSTRUCTOR
function Constructor(prop1 = 0, prop2 = 1) {
  this.prop1 = prop1;
  this.prop2 = prop2;
}

// {/////} new
// call $ construct
const newObj = new Constructor(); //{}

//ИСХОДНАЯ ФУНКЦИЯ
const User = function (login, password) {
  this.login = login;
  this.password = password;

  this.showLogin = function () {
    console.log(this.login);
  };

  User.prototype.showPassword = function () {
    console.log(this.password);
  };
};
const user1 = new User("user", "qwerd");
console.log(user1);

console.log(User.prototype);

const user2 = new User("user2", "vfgyr");
console.log(user2);

//НОВАЯ ФУНКЦИЯ НА БАЗЕ ИСХОДНОЙ
function NewUser(name, age, login, password) {
  User.call(this, login, password);
  this.name = name;
  this.age = age;
}

// Перезаписываем prototype новой функции и привязываем в
// него prototype из исходной
NewUser.prototype = Object.create(User.prototype);
NewUser.prototype.constructor = NewUser;

//Добавляе новые методы prototype в новой функции
NewUser.prototype.updateAge = function () {
  return (this.age += 1);
};

//Создаем экземпляр из новой функции
const newUser1 = new NewUser("Kate", 35, "new user1", "qwerd");
console.log(newUser1);

newUser1.showLogin();
newUser1.showPassword();
console.log(newUser1.updateAge());

// ==============
const regularObject = {}
// [[Prototype]] === __proto__
console.log(regularObject.prototype)

//=================================================================================//
//ПРИМЕРЫ
console.log("ok");

//========1========//
function Post(title ='title', text='lorem ipsut....') {
  this.title = title;
  this.text = text;
}
Post.prototype.updateTitle = function (value) {
  return(this.title=value)
}
const post1 = new Post()
console.log(post1);

//======2=========//
function NewPost(imageUrl='',title = "title", text = "lorem ipsut....") {
  Post.apply(this, [title, text]);
  this.image = imageUrl;
}

console.log(NewPost.prototype);
NewPost.prototype = Object.create(Post.prototype)
NewPost.prototype.constructor =NewPost


NewPost.prototype.updateImage = function (url) {
  return (this.image= url)
}

const newPost1 = new NewPost(
  undefined,
  undefined,
  "https://naked-science.ru/wp-content/uploads/2018/04/field_image_istock-516189065.jpg"
);
console.log(newPost1);


