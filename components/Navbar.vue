<script setup lang="ts">
const links = [
  { label: "Home", to: "/" },
  { label: "test", to: "/test" },
];

const colorMode = useColorMode();
const { toggleDocsSearch } = useUIState();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
const items = [
  [
    {
      label: "Profile",
      avatar: {
        src: "https://avatars.githubusercontent.com/u/739984?v=4",
      },
    },
  ],
];
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <div class="flex items-center">
        <img src="~/assets/logo.png" alt="Joseon Space logo" class="h-8 w-8" />
        <span class="ml-2 font-bold">Luma</span>
      </div>
    </template>

    <template #right>
      <UButton
        icon="lucide:search"
        color="white"
        variant="ghost"
        @click="toggleDocsSearch"
      />
      <UColorModeButton
        :icon="isDark ? 'lucide:moon' : 'lucide:sun'"
        color="white"
        variant="ghost"
      />
      <UDropdown
        :items="items"
        mode="hover"
        variant="ghost"
        :popper="{ placement: 'bottom-start' }"
      >
        <UButton
          color="white"
          label="En"
          variant="ghost"
          trailing-icon="lucide:chevron-down"
        />
      </UDropdown>
    </template>

    <template #panel>
      <UAsideLinks :links="links" />

      <UDivider class="my-6" />

      <UButton label="Sign in" color="white" block class="mb-3" />
      <UButton label="Get started" block />
    </template>
  </UHeader>

  <ClientOnly>
    <LazyUDocsSearch />
  </ClientOnly>
</template>
