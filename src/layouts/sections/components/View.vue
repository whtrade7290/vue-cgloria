<script setup>
// prop
defineProps({
  id: {
    type: String,
    required: true,
  },
  code: {
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
        <tr>
          <th>1</th>
          <td>첫 번째 포스트</td>
          <td>John Doe</td>
          <td>2024-04-15</td>
          <td>100</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>두 번째 포스트</td>
          <td>Jane Smith</td>
          <td>2024-04-14</td>
          <td>150</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>세 번째 포스트</td>
          <td>Alice Johnson</td>
          <td>2024-04-13</td>
          <td>120</td>
        </tr>
        <!-- 원하는 만큼 행을 추가할 수 있습니다 -->
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
li {
  list-style: none;
}
.table th,
.table td {
  text-align: center;
}
</style>
