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
        <tr v-for="(post, index) in sermonList" :key="index">
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

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: false,
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
      default: "",
    },
  },
  data() {
    return {
      sermonList: [],
    };
  },
  async created() {
    await this.getSermonList();
    // this.sermonList = this.$props.postList;
    // console.log("this.sermonList: ", this.sermonList);
  },
  methods: {
    async getSermonList() {
      if (this.$props.name === "sermonView") {
        try {
          const response = await fetch("http://localhost:8080/sermonView");
          const data = await response.json();
          this.sermonList = data.map((d) => ({
            id: d.id,
            title: d.sm_title,
            writer: d.sm_writer,
            date: d.sm_date,
            hit: d.sm_hit,
          }));
          console.log("Sermon List:", this.sermonList);
        } catch (error) {
          console.error("Error fetching sermon list:", error);
        }
      } else if (this.$props.name === "columnView") {
        try {
          const response = await fetch("http://localhost:8080/columnView");
          const data = await response.json();
          this.sermonList = data.map((d) => ({
            id: d.id,
            title: d.cm_title,
            writer: d.cm_writer,
            date: d.cm_date,
            hit: d.cm_hit,
          }));
          console.log("Sermon List:", this.sermonList);
        } catch (error) {
          console.error("Error fetching sermon list:", error);
        }
      } else if (this.$props.name === "weeksScriptView") {
        try {
          const response = await fetch("http://localhost:8080/weeksScriptView");
          const data = await response.json();
          this.sermonList = data.map((d) => ({
            id: d.id,
            title: d.ws_title,
            writer: d.ws_writer,
            date: d.ws_date,
            hit: d.ws_hit,
          }));
          console.log("Sermon List:", this.sermonList);
        } catch (error) {
          console.error("Error fetching sermon list:", error);
        }
      } else if (this.$props.name === "classView") {
        try {
          const response = await fetch("http://localhost:8080/classView");
          const data = await response.json();
          this.sermonList = data.map((d) => ({
            id: d.id,
            title: d.ct_title,
            writer: d.ct_writer,
            date: d.ct_date,
            hit: d.ct_hit,
          }));
          console.log("Sermon List:", this.sermonList);
        } catch (error) {
          console.error("Error fetching sermon list:", error);
        }
      }
    },
    // },
  },
};
</script>

<style scoped>
.my-editor {
  color: black;
  font-family: Consolas, Fira Mono, Menlo, Courier, monospace;
  font-size: 1em;
  line-height: 1.5;
  padding: 5px;
  tab-size: 4;
}

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
