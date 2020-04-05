<template>
  <div :class="classNames">
    <slot></slot>
  </div>
</template>

<script>
import getClassName from "../../helpers/getClassName";

export default {
  name: "Root",
  computed: {
    classNames() {
      return getClassName("vc-Root");
    }
  }
};
</script>

<style></style>
