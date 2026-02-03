import type { AccountType } from '@/types/account'

export interface ValidationErrors {
  labels?: string
  login?: string
  password?: string
}

export function validateAccountFields(params: {
  labelsInput: string
  type: AccountType
  login: string
  password: string
}): ValidationErrors {
  const errors: ValidationErrors = {}

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
