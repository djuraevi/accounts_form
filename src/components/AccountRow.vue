<script setup lang="ts">
import { Delete } from '@element-plus/icons-vue'
import { toRef } from 'vue'
import { useAccountForm } from '@/composables/useAccountForm'
import type { Account } from '@/types/account'

const props = defineProps<{
  account: Account
}>()


const accountRef = toRef(props, 'account')


const { form, typeOptions } = useAccountForm(accountRef)

</script>


<template>
  <fieldset class="account-row">
    <el-input v-model="form.labelsInput" />
    <el-select v-model="form.type">
      <el-option
        v-for="option in typeOptions"
        :key="option.value"
        :label="option.label"
        :value="option.value"
      />
    </el-select>

    <el-input v-model="form.login" />
    <el-input v-model="form.password" />
    <el-button type="danger" :icon="Delete"  />
  </fieldset>
</template>

