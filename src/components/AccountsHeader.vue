<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue'
</script>

<template>
  <div>
    <h2>Учетные записи</h2>
    <el-button type="primary" :icon="Edit" />
    <el-alert
      type="info"
      description="Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;"
      show-icon
    />
  </div>

</template>

<style scoped></style>
