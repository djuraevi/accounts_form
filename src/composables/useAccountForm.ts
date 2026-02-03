import { reactive, watch, type Ref } from 'vue'
import type { Account, AccountType } from '@/types/accounts'

export function useAccountForm(account: Ref<Account>) {
  const form = reactive({
    labelsInput: '',
    type: 'LOCAL' as AccountType,
    login: '',
    password: '',
  })

  const typeOptions = [
    { value: 'LOCAL', label: 'Локальная' },
    { value: 'LDAP', label: 'LDAP' },
  ]

  watch(
    account,
    (acc) => {
      form.labelsInput = acc.labels.map((l: { text: string }) => l.text).join('; ')
      form.type = acc.type
      form.login = acc.login
      form.password = acc.password ?? ''
    },
    { immediate: true }
  )

  return {
    form,
    typeOptions,
  }
}
