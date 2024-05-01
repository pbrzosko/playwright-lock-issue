import {defineComponent, h, ref} from "vue";

export const TestComponent2 = defineComponent(
() => {
  return () => h("div", "Imported defineComponent");
}
);