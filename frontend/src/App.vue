<script setup lang="ts">
import { onMounted } from 'vue';
import { NConfigProvider } from 'naive-ui';
import { naiveThemeOverrides, applyPresetToCssVars } from './composables/useTheme';
import AppShell from './components/AppShell.vue';

onMounted(applyPresetToCssVars);
</script>

<template>
  <n-config-provider :theme-overrides="naiveThemeOverrides" class="h-full">
    <AppShell />
  </n-config-provider>
</template>
