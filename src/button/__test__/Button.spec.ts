import Button from "../Button";

//在node渲染dom
import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("Button", () => {
  //mount
  //@vue/test-utils
  test("mount @vue/test-utils", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    //断言
    expect(wrapper.text()).toBe("Button");
  });
});

describe("Button color", () => {
  test("color", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });

    //断言
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("bg-blue-500")
    ).toBe(true);
  });

  test("color", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        color: "red",
      },
    });

    //断言
    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("bg-red-500")
    ).toBe(true);
  });
});
