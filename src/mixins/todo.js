import { ref, onMounted } from "vue";
const todosFunction = () => {
  //data
  const todosList = ref([]);

  //methods

  //Set to locat storage
  const addToLocalSt = () => {
    localStorage.setItem("todos", JSON.stringify(todosList.value));
    console.log(todosList.value);
  };

  // update todo list
  const updateTodos = () => {
    if (localStorage.getItem("todos")) {
      todosList.value = JSON.parse(localStorage.getItem("todos"));
    }
  };

  onMounted(() => {
    updateTodos();
  });

  return { todosList, addToLocalSt, updateTodos };
};
export default todosFunction;
