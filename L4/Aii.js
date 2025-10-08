const data = pm.response.json();
const sorted = data.sort((a, b) => a.name.localeCompare(b.name));
pm.response.json = () => sorted;

console.log("Отсортировано комментариев:", sorted.length);
console.log("Первый автор:", sorted[0].name);
console.log("Последний автор:", sorted[sorted.length-1].name);