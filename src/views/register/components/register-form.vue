<template>
  <a-card class="register-form-wrapper" title="注册用户">
    <a-form :model="registerForm" @submit="handleSubmit">
      <a-form-item
        label="用户名"
        field="username"
        :rules="[{ required: true, message: '用户名不能为空' }]"
        :validate-trigger="['change', 'input']"
      >
        <a-input v-model="registerForm.username" placeholder="请输入密码">
          <template #prefix>
            <icon-user />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item
        label="密码"
        field="password"
        :rules="[
          { required: true, message: '密码不能为空' },
          { minLength: 5, message: '密码长度不能小于5位' },
        ]"
        :validate-trigger="['change', 'input']"
      >
        <a-input-password
          v-model="registerForm.password"
          placeholder="请输入密码"
          allow-clear
        >
          <template #prefix>
            <icon-lock />
          </template>
        </a-input-password>
      </a-form-item>
      <a-form-item
        label="确认密码"
        field="checkPassword"
        :rules="confirmPasswordRules"
        :validate-trigger="['change', 'input']"
      >
        <a-input-password
          v-model="registerForm.checkPassword"
          placeholder="请再次输入密码"
          allow-clear
        >
          <template #prefix>
            <icon-lock />
          </template>
        </a-input-password>
      </a-form-item>
      <a-button type="primary" html-type="submit" :loading="loading">
        注册
      </a-button>
      <a-button type="text" class="login-form-register-btn" @click="goBack">
        返回
      </a-button>
    </a-form>
  </a-card>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import useLoading from '@/hooks/loading';
  import { register, RegisterData } from '@/api/user';
  import { ValidatedError, Message } from '@arco-design/web-vue';

  const router = useRouter();
  const { loading, setLoading } = useLoading();
  const errorMessage = ref('');

  const registerForm = reactive({
    username: '',
    password: '',
    checkPassword: '',
    email: '',
  } as RegisterData);

  const confirmPasswordRules = [
    { required: true, message: '请再次输入密码' },
    { minLength: 5, message: '密码长度不能小于5位' },
    {
      validator: (value: any, cb: (arg0: string) => void) => {
        return new Promise<void>((resolve) => {
          window.setTimeout(() => {
            if (registerForm.password !== (value as any)) {
              cb('两次输入的密码不一致');
            }
            resolve();
          }, 2000);
        });
      },
    },
  ];

  const handleSubmit = async ({
    errors,
    values,
  }: {
    errors: Record<string, ValidatedError> | undefined;
    values: Record<string, any>;
  }) => {
    if (loading.value) return;
    if (!errors) {
      setLoading(true);
      try {
        const res = await register(values as RegisterData);
        if ((res as any).code === 20000) {
          Message.success('注册成功, 请登录');
          router.push({
            name: 'login',
          });
        }
      } catch (err) {
        errorMessage.value = (err as Error).message;
      } finally {
        setLoading(false);
      }
    }
  };
  const goBack = () => {
    router.go(-1);
  };
</script>

<style lang="less" scoped>
  .register-form-wrapper {
    width: 500px;
  }
</style>
