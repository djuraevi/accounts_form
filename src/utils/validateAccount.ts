import type { AccountType } from '@/types/accounts'

export interface AccountValidationErrors {
  labels?: string
  login?: string
  password?: string
}

export function validateAccount(params: {
  labelsInput: string
  type: AccountType
  login: string
  password: string
}): AccountValidationErrors {
  const errors: AccountValidationErrors = {}

  if (params.labelsInput.length > 50) {
    errors.labels = 'Максимум 50 символов'
  }

  if (!params.login.trim()) {
    errors.login = 'Логин обязателен'
  } else if (params.login.length > 100) {
    errors.login = 'Максимум 100 символов'
  }

  if (params.type === 'LOCAL') {
    if (!params.password.trim()) {
      errors.password = 'Пароль обязателен'
    } else if (params.password.length > 100) {
      errors.password = 'Максимум 100 символов'
    }
  }

  return errors
}
