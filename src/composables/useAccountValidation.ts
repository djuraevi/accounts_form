import { reactive } from 'vue'
import { validateAccount } from '@/utils/validateAccount'
import type { AccountType } from '@/types/accounts'
import type { AccountValidationErrors } from '@/utils/validateAccount'


export function useAccountValidation() {
  const errors = reactive<AccountValidationErrors>({})

  type ErrorKey = keyof typeof errors

  const runValidation = (params: {
    labelsInput: string
    type: AccountType
    login: string
    password: string
  }): boolean => {
    const rawParams = {
      labelsInput: params.labelsInput,
      type: params.type,
      login: params.login,
      password: params.password,
    }

    const result = validateAccount(rawParams)

    ;(Object.keys(errors) as ErrorKey[]).forEach((key) => {
      errors[key] = undefined
    })

    if (Object.keys(result).length) {
      Object.assign(errors, result)
      return false
    }

    return true
  }


  return {
    errors,
    runValidation,
  }
}
