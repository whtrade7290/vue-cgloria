<script setup>
import { onMounted, ref } from "vue";
import "prismjs/themes/prism.css"; // import the styles somewhere
import "vue-prism-editor/dist/prismeditor.min.css";
// store
import { useAppStore } from "@/stores";

const store = useAppStore();
const posts = ref();

onMounted(async () => {
  await store.fetchBoardList(props.name);
  posts.value = store.dataList;
});

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="position-relative border-radius-xl overflow-hidden shadow-lg mb-7"
  >
    <table class="table">
      <thead>
        <tr>
          <th scope="col" style="width: 10%">#</th>
          <th scope="col" style="width: 30%">제목</th>
          <th scope="col" style="width: 10%">글쓴이</th>
          <th scope="col" style="width: 10%">날짜</th>
          <th scope="col" style="width: 10%">조회수</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(post, index) in posts" :key="index">
          <th>{{ post.id }}</th>
          <td>{{ post.title }}</td>
          <td>{{ post.writer }}</td>
          <td>{{ post.date }}</td>
          <td>{{ post.hit }}</td>
        </tr>
      </tbody>
    </table>

    <div class="tab-content tab-space">
      <div class="tab-pane active p-2">
        <div class="overflow-auto" :class="`${height && `height-${height}`}`">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  color: black;
  /* you must provide font-family font-size line-height. Example: */
  font-family: Consolas, Fira Mono, Menlo, Courier, monospace;
  font-size: 1em;
  line-height: 1.5;
  padding: 5px;
  tab-size: 4;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}

.table th,
.table td {
  text-align: center;
}
</style>
