<template>
  <div
    class="max-w-6xl mx-auto sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid grid-cols-2 gap-4"
  >
    <CourseCard v-for="item in courseList" :key="item.id" :item="item" />
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