<script setup lang="ts">
import { onMounted } from 'vue'
import { useAccountsStore } from '@/stores/accounts.store'
import AccountsHeader from './AccountsHeader.vue'
import AccountRow from './AccountRow.vue'

const store = useAccountsStore()

onMounted(() => {
  store.load()
})
</script>

<template>
  <AccountsHeader @add="store.addAccount" />

  <AccountRow
    v-for="account in store.accounts"
    :key="account.id"
    :account="account"
    @update="store.updateAccount"
    @remove="store.removeAccount"
  />
</template>
