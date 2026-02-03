import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import type { Account } from '@/types/account'

const STORAGE_KEY = 'accounts'

export const useAccountsStore = defineStore('accounts', () => {
  const accounts = ref<Account[]>([])

  const load = () => {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      accounts.value = JSON.parse(raw)
    } else {
      accounts.value = [
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
      ]
    }
  }

  const isPersistableAccount = (account: Account) => {
    return account.login.trim().length > 0
  }


  watch(
    accounts,
    (val) => {
      const filtered = val.filter(isPersistableAccount)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
    },
    { deep: true }
  )

  const addAccount = () => {
    accounts.value.push({
      id: crypto.randomUUID(),
      labels: [],
      type: 'LOCAL',
      login: '',
      password: '',
    })
  }

  const updateAccount = (updated: Account) => {
    const index = accounts.value.findIndex(a => a.id === updated.id)
    if (index !== -1) {
      accounts.value[index] = updated
    }
  }

  const removeAccount = (id: string) => {
    accounts.value = accounts.value.filter(a => a.id !== id)
  }

  return {
    accounts,
    load,
    addAccount,
    updateAccount,
    removeAccount,
  }
})
