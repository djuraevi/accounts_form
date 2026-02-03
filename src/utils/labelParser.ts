import type { LabelItem } from '@/types/account'

export function parseLabels(input: string): LabelItem[] {
  return input
    .split(';')
    .map(v => v.trim())
    .filter(Boolean)
    .map(text => ({ text }))
}
