import {expect,test} from "@playwright/experimental-ct-vue";
import TestComponent from "../src/TestComponent.vue";
import {Page} from "playwright-core";

async function testFunction(mount: any, page: Page) {
  await mount(TestComponent);
  for (const _ of Array(5)) {
    await page.getByLabel("Username").fill("username");
    await page.getByLabel("Password").fill("password");
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page.getByText("Form Submitted")).toBeVisible();
    await page.getByRole('button', {name: 'Reset'}).click();
  }
}

test.describe("TestComponent.vue", () => {
  test("Should fill in form", async ({page, mount}) => {
    await testFunction(mount, page);
  });

  test("Should fill in form 1", async ({page, mount}) => {
    await testFunction(mount, page);
  });

  test("Should fill in form 2", async ({page, mount}) => {
    await testFunction(mount, page);
  });

  test("Should fill in form 3", async ({page, mount}) => {
    await testFunction(mount, page);
  });

  test("Should fill in form 4", async ({page, mount}) => {
    await testFunction(mount, page);
  });

  test("Should fill in form 5", async ({page, mount}) => {
    await testFunction(mount, page);
  });

  test("Should fill in form 6", async ({page, mount}) => {
    await testFunction(mount, page);
  });

  test("Should fill in form 7", async ({page, mount}) => {
    await testFunction(mount, page);
  });

  test("Should fill in form 8", async ({page, mount}) => {
    await testFunction(mount, page);
  });

  test("Should fill in form 9", async ({page, mount}) => {
    await testFunction(mount, page);
  });

  test("Should fill in form 10", async ({page, mount}) => {
    await testFunction(mount, page);
  });

  test("Should fill in form 11", async ({page, mount}) => {
    await testFunction(mount, page);
  });

  test("Should fill in form 12", async ({page, mount}) => {
    await testFunction(mount, page);
  });

  test("Should fill in form 13", async ({page, mount}) => {
    await testFunction(mount, page);
  });

  test("Should fill in form 14", async ({page, mount}) => {
    await testFunction(mount, page);
  });

  test("Should fill in form 15", async ({page, mount}) => {
    await testFunction(mount, page);
  });

  test("Should fill in form 16", async ({page, mount}) => {
    await testFunction(mount, page);
  });

  test("Should fill in form 17", async ({page, mount}) => {
    await testFunction(mount, page);
  });

  test("Should fill in form 18", async ({page, mount}) => {
    await testFunction(mount, page);
  });

  test("Should fill in form 19", async ({page, mount}) => {
    await testFunction(mount, page);
  });

  test("Should fill in form 20", async ({page, mount}) => {
    await testFunction(mount, page);
  });
})