<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'

const emit = defineEmits<{
  (e: 'add'): void
}>()
</script>

<template>
  <el-card class="accounts-header" shadow="never">
    <div class="accounts-header__top">
      <el-text tag="h2" size="large">
        Учетные записи
      </el-text>

      <el-button
        type="primary"
        :icon="Plus"
        @click="emit('add')"
      />
    </div>

    <el-alert
      class="accounts-header__alert"
      type="info"
      description="Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;"
      show-icon
      :closable="false"
    />
  </el-card>
</template>

<style scoped>
.accounts-header {
  margin-bottom: 16px;
}

.accounts-header__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.accounts-header__alert {
  margin-top: 4px;
}
</style>
