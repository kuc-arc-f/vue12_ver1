<template>
  <div>
    <h1>Tasks - index</h1>
    <!-- リスト表示部分 -->
    <div>
      <ul v-for="task in tasks" v-bind:key="task.id">
        <li>
          <input type="checkbox" v-bind:id="'task_' + task.id" />
          <label v-bind:for="'task_' + task.id" class="word-color-black">{{ task.name }}</label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data: function () {
      return {
        tasks: [],
        newTask: ''
      }
    },
    mounted: function () {
      this.fetchTasks();
    },
    methods: {
      fetchTasks: function () {
        axios.get('/api/tasks').then((response) => {
//            console.log(response.data.data.length)
            console.log(response.data.data )
            for(var i = 0; i < response.data.data.length; i++) {
                this.tasks.push(response.data.data[i]);
            }
        }, (error) => {
          console.log(error);
        });
      }
    }
  }
</script>

<style>
</style>
