<script setup lang="ts">
import { useAccountsStore } from '@/stores/accounts.store'

const store = useAccountsStore()
</script>

<template>
  <el-card class="data-view">
    <pre>{{ store.accounts }}</pre>
  </el-card>
</template>

