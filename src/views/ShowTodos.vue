<template>
  <div class="show-todos">
    <h1>ShowTodos</h1>
    <table v-if="todosList.length > 0">
      <thead>
        <tr>
          <th>text</th>
          <th>from</th>
          <th>to</th>
          <th>created at</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(todo, index) in todosList"
          :key="todo.id"
          :style="`${
            todo.isCompleted
              ? 'background: #a3c3c3'
              : 'backgroundcolor:transparent'
          }`"
        >
          <td>
            {{ todo.text }}
          </td>
          <td>
            {{
              new Date(todo.from)
                .toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "numeric",
                  day: "2-digit",
                })
                .replaceAll("/", "-")
            }}
          </td>
          <td>
            {{
              new Date(todo.to)
                .toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "numeric",
                  day: "2-digit",
                })
                .replaceAll("/", "-")
            }}
          </td>
          <td>
            {{
              new Date(todo.createdAt)
                .toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "numeric",
                  day: "2-digit",
                })
                .replaceAll("/", "-")
            }}
          </td>
          <td>
            <button class="completed" @click="markCompleted(todo)">
              {{ todo.isCompleted ? "Incompleted" : "Completed ?" }}
            </button>
            <button class="delete" @click="deletTodo(index)">delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <h2 v-else>No Todos to show</h2>
  </div>
</template>
<script setup>
import todosMixin from "@/mixins/todo";

const { todosList, addToLocalSt } = todosMixin();

//methods

//delet doto
const deletTodo = (index) => {
  todosList.value.splice(index, 1);
  addToLocalSt();
};

//Mark as completed
const markCompleted = (todo) => {
  todo.isCompleted = !todo.isCompleted;
  addToLocalSt();
};
</script>
<style scoped lang="scss">
h1,
h2 {
  text-align: center;
  margin: 45px;
}
table {
  tr,
  td,
  th {
    border: 1px solid #143f3f;
    padding: 5px;
  }
  width: 100%;
  td {
    text-align: center;
    button {
      color: white;
      background-color: #143f3f;
      font-size: 17px;
      padding: 5px 10px;
      border: 1px solid #143f3f;
      border-radius: 7px;
      &.delete {
        background: indianred;
        border: 1px solid indianred;
        margin-left: 10px;
      }
    }
  }
}
</style>
