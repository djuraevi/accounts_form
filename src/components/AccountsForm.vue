<script setup lang="ts">
import { useAccountsStore } from '@/stores/accounts.store'
import AccountsHeader from './AccountsHeader.vue'
import AccountRow from './AccountRow.vue'
import AccountsDataView from './AccountsDataView.vue'

const store = useAccountsStore()
</script>

<template>
  <AccountsHeader />

  <AccountRow
    v-for="account in store.accounts"
    :key="account.id"
    :account="account"
  />

  <AccountsDataView />
</template>
