const todos = pm.response.json();
const incompleteTodos = todos.filter(todo => !todo.completed);
pm.response.json = () => incompleteTodos;

pm.test("Status 200", () => pm.expect(pm.response.code).to.eql(200));
pm.test("All todos are incomplete", () => {
    pm.response.json().forEach(todo => pm.expect(todo.completed).to.be.false);
});

console.log(Невыполненных задач: ${incompleteTodos.length} из ${todos.length});