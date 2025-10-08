//Req
const postsResponse = await pm.sendRequest('https://jsonplaceholder.typicode.com/posts');
const sortedPosts = postsResponse.json().sort((a, b) => b.title.length - a.title.length);
pm.environment.set("sortedPosts", JSON.stringify(sortedPosts));
console.log( Posts отсортированы: ${sortedPosts.length} записей);

//res
const sortedPosts = JSON.parse(pm.environment.get("sortedPosts")  "[]");
if (sortedPosts.length > 0) {
    console.log("Проверка sortedPosts:");
    console.log("Первый пост:", sortedPosts[0].title);
    pm.test("Posts sorted by title length", () => {
        pm.expect(sortedPosts[0].title.length).to.be.greaterThan(sortedPosts[1].title.length);
    });
}

//Req
const commentsResponse = await pm.sendRequest('https://jsonplaceholder.typicode.com/comments');
        const sortedComments = commentsResponse.json().sort((a, b) => a.name.localeCompare(b.name));
        pm.environment.set("sortedComments", JSON.stringify(sortedComments));
        console.log(` Comments отсортированы: ${sortedComments.length} комментариев`);

//res
const sortedComments = JSON.parse(pm.environment.get("sortedComments")  "[]");
if (sortedComments.length > 0) {
    console.log("Проверка sortedComments:");
    pm.test("Comments sorted by name", () => {
        pm.expect(sortedComments[0].name <= sortedComments[1].name).to.be.true;
    });
}


//Req
const usersResponse = await pm.sendRequest('https://jsonplaceholder.typicode.com/users');
        const filteredUsers = usersResponse.json().map(user => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone
        }));
        pm.environment.set("filteredUsers", JSON.stringify(filteredUsers));
        console.log( Users отфильтрованы: ${filteredUsers.length} пользователей);

//res
const filteredUsers = JSON.parse(pm.environment.get("filteredUsers")  "[]");
if (filteredUsers.length > 0) {
    console.log("Проверка filteredUsers:");
    pm.test("Users have only selected fields", () => {
        const user = filteredUsers[0];
        pm.expect(user).to.have.keys(['id', 'name', 'username', 'email', 'phone']);
    });
}

//Req
const todosResponse = await pm.sendRequest('https://jsonplaceholder.typicode.com/todos');
        const incompleteTodos = todosResponse.json().filter(todo => !todo.completed);
        pm.environment.set("incompleteTodos", JSON.stringify(incompleteTodos));
        console.log(`Todos отфильтрованы: ${incompleteTodos.length} невыполненных задач`);

//res
const incompleteTodos = JSON.parse(pm.environment.get("incompleteTodos")  "[]");
if (incompleteTodos.length > 0) {
    console.log("Проверка incompleteTodos:");
    pm.test("Only incomplete todos", () => {
        incompleteTodos.forEach(todo => pm.expect(todo.completed).to.be.false);
    });
}