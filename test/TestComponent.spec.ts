import {test, expect} from "@playwright/experimental-ct-vue";
import TestComponent from "../src/TestComponent.vue";
import {TestComponent2} from "../src/test-component2";
import {defineComponent, h} from "vue";

test.describe("Vue components testing", () => {
  test("Should mount imported component", async ({mount}) => {
    const component = await mount(TestComponent);
    await expect(component.getByText("Imported SFC")).toBeVisible();
  });

  test("Should mount imported defined component", async ({mount}) => {
    const component = await mount(TestComponent2);
    await expect(component.getByText("Imported defineComponent")).toBeVisible();
  });

  test("Should mount inlined component", async ({mount}) => {
    const component = await mount(defineComponent(() => {
      return () => h("div", "Inlined");
    }));
    await expect(component.getByText("Inlined")).toBeVisible();
  });
})