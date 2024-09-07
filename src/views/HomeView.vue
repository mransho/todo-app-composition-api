<template>
  <div class="homePage">
    <h1>add new todos</h1>
    <form action="" @submit.prevent="addTodo">
      <input
        type="text"
        v-model="todoObject.text"
        name=""
        id=""
        placeholder="Enter your todo"
      />
      <br />
      <input
        type="date"
        v-model="todoObject.from"
        placeholder="form"
        style="margin-top: 20px"
      />
      <input
        type="date"
        placeholder="to"
        v-model="todoObject.to"
        style="margin-left: 10px; margin-bottom: 10px"
      />
      <br />
      <input type="submit" value="add" />
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import todosMixin from "@/mixins/todo";

const { todosList, addToLocalSt } = todosMixin();

//data

const todoObject = ref({
  id: "",
  text: "",
  from: "",
  to: "",
  createdAt: "",
  isCompleted: false,
});

//methods

//add toDo
const addTodo = () => {
  todoObject.value.id = todosList.value.length + 1;
  todoObject.value.createdAt = new Date();
  todosList.value.push(todoObject.value);
  addToLocalSt();
  todoObject.value = {
    id: "",
    text: "",
    from: "",
    to: "",
    createdAt: "",
    isCompleted: false,
  };
  // console.log(todosList.value);
};
</script>

<style scoped lang="scss">
.homePage {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-inline: auto;

  justify-content: center;
  height: 90vh;
}
form {
  width: 50%;
  text-align: center;
  input[type="text"] {
    padding: 10px;
    font-size: 20px;
    width: 50%;
    border-radius: 10px;
  }
  input[type="submit"] {
    padding: 10px 20px;
    font-size: 20px;
    color: white;
    background-color: #143f3f;
    border: 1px solid #143f3f;
    border-radius: 10px;
  }
}
</style>
