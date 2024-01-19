let input = prompt(
  `what would you like to do?` / n +
    `"new" - Add a Todo` / n +
    `"list" - List All Todos` / n +
    `"delete" - Remove Specific Todo` / n +
    `"quit" -Quit App` / n
);

const todos = ["Collect Chicken Eggs", "Clean Litter Box"];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("@@@@@@@@@@@@@@@@@");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("@@@@@@@@@@@@@@@@@");
  } else if (input === "new") {
    const newTodo = prompt("Ok, What is new todo?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list`);
  } else if (input == "delete") {
    const index = parseInt(prompt("OK enter an index to delete:"));
    if (!Number.isNaN(index)) {
      //isNaN은 현재 값이 NaN이거나, 숫자로 변환했을 때 NaN이 되면 참을 반환
      //즉 index가 숫자이면 항상 false일 것이므로 isNaN(index)가 false여야지 옳은것
      const deleted = todos.splice(index, 1);
      console.log(`OK, deleted ${deleted[0]}`);
    } else {
      console.log("Unkown index");
    }
  }
  input = prompt("what would you like to do?");
}

console.log("OK Quit the App");

// let todoList = [];
// let whatTodo = prompt("Enter 'new' to add a task, 'list' to display tasks, 'delete' to remove a task, or 'quit' to exit");

// while (whatTodo) {
//     if (whatTodo === "new") {
//         let whatToAdd = prompt("What do you like to do?")
//         todoList.push(whatToAdd);
//         console.log(`${whatToAdd} added to list`);
//         console.log("*******");
//         for (let i = 0; i < todoList.length; i++) {
//             console.log(`${i} : ${todoList[i]}`);
//         }
//         console.log("*******");
//     }
//     else if (whatTodo == 'list') {
//         console.log("*******");
//         for (let i = 0; i < todoList.length; i++) {
//             console.log(`${i} : ${todoList[i]}`);
//         }
//         console.log("*******");
//     }
//     else if (whatTodo == 'delete') {
//         let indextNum = parseInt(prompt(`Whate do you want to delete? insert index number}`));
//         console.log("*******");
//         for (let i = 0; i < todoList.length; i++) {
//             console.log(`${i} : ${todoList[i]}`);
//         }
//         console.log("*******");
//         while (!indextNum) {
//             indextNum = prompt('Enter vaild number!');
//         }
//         console.log(`${todoList[indextNum]} was delted.`);
//         todoList.pop(indextNum);

//         console.log("*******");
//         for (let i = 0; i < todoList.length; i++) {
//             console.log(`${i} : ${todoList[i]}`);
//         }
//         console.log("*******");

//     }
// }

// console.log('OK BYE');
