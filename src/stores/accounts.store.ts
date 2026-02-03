import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Account } from '@/types/account'

export const useAccountsStore = defineStore('accounts', () => {
  const accounts = ref<Account[]>([
    {
      id: '1',
      labels: [{ text: 'admin' }, { text: 'main' }],
      type: 'LOCAL',
      login: 'admin',
      password: '123456',
    },
    {
      id: '2',
      labels: [{ text: 'ldap' }],
      type: 'LDAP',
      login: 'ldap_user',
      password: null,
    },
  ])

  return {
    accounts,
  }
})
