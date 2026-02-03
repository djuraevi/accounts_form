<script setup lang="ts">
import { Delete } from '@element-plus/icons-vue'
import { toRef, computed } from 'vue'
import { useAccountForm } from '@/composables/useAccountForm'
import { parseLabels } from '@/utils/labelParser'
import type { Account } from '@/types/account'

const props = defineProps<{
  account: Account
}>()

const emit = defineEmits<{
  (e: 'update', account: Account): void
  (e: 'remove', id: string): void
}>()

const accountRef = toRef(props, 'account')
const { form, typeOptions } = useAccountForm(accountRef)

const save = () => {
  emit('update', {
    id: props.account.id,
    labels: parseLabels(form.labelsInput),
    type: form.type,
    login: form.login,
    password: form.type === 'LDAP' ? null : form.password,
  })
}


</script>

<template>
  <el-card class="account-row" shadow="never">
    <el-form
      label-position="top"
      class="account-row__form"
    >
      <el-row :gutter="12" align="bottom">
        <el-col :span="6">
          <el-form-item label="Метки">
            <el-input
              v-model="form.labelsInput"
              placeholder="Например: admin; main"
              @blur="save"
            />
          </el-form-item>
        </el-col>

        <el-col :span="4">
          <el-form-item label="Тип записи">
            <el-select
              v-model="form.type"
              @change="save"
            >
              <el-option
                v-for="option in typeOptions"
                :key="option.value"
                :label="option.label"
                :value="option.value"
              />
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item label="Логин">
            <el-input
              v-model="form.login"
              placeholder="Введите логин"
              @blur="save"
            />
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item
            v-if="form.type === 'LOCAL'"
            label="Пароль"
          >
            <el-input
              v-model="form.password"
              placeholder="Введите пароль"
              show-password
              @blur="save"
            />
          </el-form-item>
        </el-col>

        <el-col :span="2" class="actions">
          <el-form-item label=" ">
            <el-button
              type="danger"
              :icon="Delete"
              @click="emit('remove', props.account.id)"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-card>
</template>



