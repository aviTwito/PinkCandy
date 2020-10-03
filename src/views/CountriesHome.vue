<template>
  <div>
    <Countries />
  </div>
</template>

<script>
// @ is an alias to /src
import Countries from "@/components/FoodAroundTheWorld/Countries";

export default {
  name: "Home",
  components: {
    Countries
  },
  data: () => ({})
};
</script>
