import { reactive } from 'vue'
import { validateAccountFields } from '@/utils/validateAccount'
import type { AccountType } from '@/types/account'

export function useAccountValidation() {
  const errors = reactive<{
    labels?: string
    login?: string
    password?: string
  }>({})

  const validate = (params: {
    labelsInput: string
    type: AccountType
    login: string
    password: string
  }) => {
    const result = validateAccountFields(params)

    Object.keys(errors).forEach(k => {
      errors[k] = undefined
    })

    if (Object.keys(result).length) {
      Object.assign(errors, result)
      return false
    }

    return true
  }

  return {
    errors,
    validate,
  }
}
