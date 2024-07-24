import { component$, Slot } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Avatar } from "qwik-library";

export default component$(() => {
  return (
    <div class="mx-auto w-[90%]">
      <header class="border-b border-gray-600 py-5">
        <h1 class="text-3xl font-bold">Qwik Library Components</h1>
      </header>

      <div class="mt-10 space-y-10">
        <Group title="Avatars">
          <Avatar src="https://i.pravatar.cc/300" shape="square" alt="avatar" />
          <Avatar
            class="border-yellow-600"
            src="https://i.pravatar.cc/300?img=2"
            size="lg"
            withBorder
            alt="avatar"
            shape="rounded"
          />
          <Avatar
            class="border-purple-600"
            src="https://i.pravatar.cc/300?img=3"
            size="xl"
            withBorder
            alt="avatar"
            shape="square"
          />
          <Avatar
            class="border-blue-700"
            src="https://i.pravatar.cc/300?img=1"
            size="xxl"
            withBorder
            alt="avatar"
            shape="circular"
          />
        </Group>
      </div>
    </div>
  );
});

const Group = component$<{ title: string }>((props) => {
  return (
    <section class="space-y-6">
      <h2 class="text-2xl font-semibold">{props.title}</h2>

      <div class="flex flex-wrap gap-5">
        <Slot />
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: "Qwik Library",
  meta: [
    {
      name: "description",
      content: "",
    },
  ],
};
