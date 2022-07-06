## Start Javascript

### form / submit in HTML

```html
  <form id="login-form class="hidden">
    <input type="text" placeholder="What is your name? />
    <input type="submit" value="Log In" />
  <form>
  <h1 id="greeting" class="hidden"></h1>
```
 * input text tag,  placeholder → input box의 글씨 입력
 * input submit tag, value → submit box의 글씨 입력
 * form / h1 의 class → 'hidden' 으로 하여 css에서 동시에 숨기는 것이 가능
```css
  .hidden { 
    display : none;
  }
```
 * **form id** : login-form, **form input tag** : #login-form input, **h1 tag** : #greeting 으로 접근 가능 
 * **querySelector** : class 중 array[0] 반환 / **querySelectorAll**, class array 반환 / '#'입력 시 id 접근 가능 
 * **_.addEventListener** : 기본적으로 주는 info가 있음. 이를 'event'라 표시하고 다양한 기능 존재(브라우저 기능 중단 등등,.,)
 ```javascript
 const loginForm = document.querySelector("#login-form"); // const를 항상 쓰고, let은 가끔 쓰고, var은 쓰지말자
 const loginInput = document.querySelector("#login-form input");
 const greeting = document.querySelector("#greeting");
 
 const HIDDEN_CLASSNAME = "hidden"; // string 은 다 굵은 글씨로 쓰는게 국룰
const USERNAME_KEY = "username";
function onLoginSubmit(event){
	event.preventDefault(); // 브라우저 기능 중단 
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username); // localstorage 를 통해 setter
	loginForm.classList.add(HIDDEN_CLASSNAME); // form 숨기기
	paintGreetings(username); 
}

function paintGreetings(username){ 
	greeting.innerText = `Hello ${savedUsername}`; // 해당 문장 사용시 백틱 사용!! (`)  
	greeting.classList.remove(HIDDEN_CLASSNAME); // h1 나타내기
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // savedUsername → localstorage 에 없을 시 null 반환

if(savedUsername === null){
	loginForm.classList.remove(HIDDEN_CLASSNAME); // form 등장
	loginForm.addEventListener("submit", onLoginSubmit); // submit Event
} else {
	paintGreetings(savedUsername); // h1 등장
}
 
 ```


 * **forEach** : array 의 item을 하나하나 function 을 적용함 → filter 또한 동일
 * **filter** : array 의 item을 하나하나 function 을 적용하며 True 일때 Array 새로 생성 후 item 남기고 False 는 item 제외
 * **JSON.stringify()** : parameter를 string 변환 / **JSON.parse()** : parameter를 array 변환
 * **_.addEventListener** : 기본적으로 주는 info가 있음. 이를 'event'라 표시하고 다양한 기능 존재(브라우저 기능 중단 등등,.,)
 ```javascript
 	const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list"); 

const TODOS_KEY = "todos";
let toDos = [];
function saveToDos(){
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function deleteTodo(event) {
	const li = event.target.parentNode;
	li.remove();
	toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
	saveToDos();
}
function paintToDo(newTodoObj) {
	const li = document.createElement('li');
	li.id = newTodoObj.id;
	const span = document.createElement('span');
	const button = document.createElement('button');
	button.innerText = "🤔";
	button.addEventListener("click", deleteTodo);
	li.appendChild(span);
	li.appendChild(button);
	span.innerText = newTodoObj.text;
	todoList.appendChild(li);
}
function handleToDoSubmit(event) {
	event.preventDefault();
	const newTodo = toDoInput.value;
	toDoInput.value="";
	const newTodoObj = {
		text : newTodo,
		id : Date.now(),
	};
	toDos.push(newTodoObj);
	paintToDo(newTodoObj);
	saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos){
	const parsedTodos = JSON.parse(savedTodos);
	toDos = parsedTodos;
	parsedTodos.forEach(paintToDo);
}
 ```
