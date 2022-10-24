<template>
  <div class="px-5 pt-10 ">
    <div class="sm:text-3xl mx-auto font-shadow border-4 border-yellow-500 bg-[#ffffff90] rounded-md groove-border h-12 w-fit text-sm " v-if="isLoad" >
      載入中
    </div>
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
    const isLoad = computed(() => store.getters.isLoadDone)
    const getCourse = () => {
      store.dispatch("handgetCourse");
    };

    onMounted(() => {
      getCourse();
    });
    return {
      courseList,
      isLoad
    };
  },
};
</script>

<style scoped>
</style>