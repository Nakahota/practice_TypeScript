
// テストコード

const todos: string[] = [];

const command = process.argv[2];
const value = process.argv[3];

if (command === "add" && value) {
  todos.push(value);

  console.log("追加しました");
  console.log(todos);
}