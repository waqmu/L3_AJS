const data = pm.response.json();
const sorted = data.sort((a, b) => a.name.localeCompare(b.name));
pm.response.json = () => sorted;

console.log("Отсортировано комментариев:", sorted.length);
console.log("Первый автор:", sorted[0].name);
console.log("Последний автор:", sorted[sorted.length-1].name);

pm.test("Status 200", () => pm.expect(pm.response.code).to.eql(200));
pm.test("Sorted by name", () => {
    const comments = pm.response.json();
    for (let i = 0; i < comments.length-1; i++) {
        pm.expect(comments[i].name <= comments[i+1].name).to.be.true;
    }
});