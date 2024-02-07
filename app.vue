<script setup lang="ts">
const links = [
  {
    label: "Home",
    icon: "i-heroicons-book-open",
    to: "/",
  },
];

const { locale, locales } = useI18n();

const items = [
  [
    {
      label: "English",
    },
  ],
];
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <img src="~/assets/logo.png" class="h-7 w-7" alt="Joseon Space Logo" />
    </template>

    <template #right>
      <UDocsSearchButton label="" />

      <UColorModeButton />

      <UButton
        to="https://github.com/nuxt/ui"
        target="_blank"
        icon="i-simple-icons-github"
        color="gray"
        variant="ghost"
      />

      <!-- Language dropdown -->
      <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
        <UButton
          color="white"
          label="Options"
          trailing-icon="i-heroicons-chevron-down-20-solid"
        />
      </UDropdown>
    </template>
  </UHeader>

  <UMain>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UMain>
</template>
