<template>
  <div class="px-5 pt-10 ">
      <div
      class="grid max-w-6xl grid-cols-1 gap-4 mx-auto sm:grid-cols-2" 
      >
      <CourseCard v-for="item in courseList" :key="item.id" :item="item" />
    </div>

  </div>

</template>

<script>
import CourseCard from "../components/CourseCard";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    CourseCard,
  },
  setup() {
    const store = useStore();

    const courseList = computed(() => store.getters.courseList);
    const getCourse = () => {
      store.dispatch("handgetCourse");
    };

    onMounted(() => {
      getCourse();
    });
    return {
      courseList,
    };
  },
};
</script>

<style scoped>
</style>