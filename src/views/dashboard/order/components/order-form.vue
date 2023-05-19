<template>
  <a-card class="general-card" style="width: 100%" title="发货人信息">
    <a-form ref="formRef" layout="vertical" :model="userInfo">
      <a-row :gutter="80">
        <a-col :span="6">
          <a-form-item
            field="name"
            label="发货人姓名"
            :rules="[{ required: true, message: '货品名称不能为空' }]"
            :validate-trigger="['change', 'blur']"
          >
            <a-input
              v-model="form.name"
              placeholder="请输入货品名称"
              style="width: 480px; margin: 0 auto"
              allowclear
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item
            field="name"
            label="发货人电话"
            :rules="[{ required: true, message: '货品名称不能为空' }]"
            :validate-trigger="['change', 'blur']"
          >
            <a-input
              v-model="form.name"
              placeholder="请输入货品名称"
              style="width: 480px; margin: 0 auto"
              allowclear
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item
            field="name"
            label="发货人身份证号"
            :rules="[{ required: true, message: '货品名称不能为空' }]"
            :validate-trigger="['change', 'blur']"
          >
            <a-input
              v-model="form.name"
              placeholder="请输入货品名称"
              style="width: 480px; margin: 0 auto"
              allowclear
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item
            field="name"
            label="发货地址"
            :rules="[{ required: true, message: '货品名称不能为空' }]"
            :validate-trigger="['change', 'blur']"
          >
            <a-input
              v-model="form.name"
              placeholder="请输入货品名称"
              style="width: 480px; margin: 0 auto"
              allowclear
            />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-card>
  <a-card class="general-card" style="width: 100%" title="收货人信息">
    <a-form ref="formRef" layout="vertical" :model="userInfo">
      <a-row :gutter="80">
        <a-col :span="6">
          <a-form-item
            field="name"
            label="发货人姓名"
            :rules="[{ required: true, message: '货品名称不能为空' }]"
            :validate-trigger="['change', 'blur']"
          >
            <a-input
              v-model="form.name"
              placeholder="请输入货品名称"
              style="width: 480px; margin: 0 auto"
              allowclear
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item
            field="name"
            label="发货人电话"
            :rules="[{ required: true, message: '货品名称不能为空' }]"
            :validate-trigger="['change', 'blur']"
          >
            <a-input
              v-model="form.name"
              placeholder="请输入货品名称"
              style="width: 480px; margin: 0 auto"
              allowclear
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item
            field="name"
            label="发货地址"
            :rules="[{ required: true, message: '货品名称不能为空' }]"
            :validate-trigger="['change', 'blur']"
          >
            <a-input
              v-model="form.name"
              placeholder="请输入货品名称"
              style="width: 480px; margin: 0 auto"
              allowclear
            />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-card>
  <a-card class="general-card" style="width: 100%" title="货品信息">
    <a-form layout="vertical" :model="form">
      <a-row :gutter="80">
        <a-col :span="6">
          <a-form-item
            field="name"
            label="货品名称"
            style="margin-top: 10%"
            :rules="[{ required: true, message: '货品名称不能为空' }]"
            :validate-trigger="['change', 'blur']"
          >
            <a-input
              v-model="form.name"
              placeholder="请输入货品名称"
              style="width: 480px; margin: 0 auto"
              allowclear
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item
            field="name"
            label="货品类别"
            style="margin-top: 10%"
            :rules="[{ required: true, message: '货品名称不能为空' }]"
            :validate-trigger="['change', 'blur']"
          >
            <a-input
              v-model="form.name"
              placeholder="请输入货品名称"
              style="width: 480px; margin: 0 auto"
              allowclear
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="80">
        <a-col :span="6">
          <a-form-item
            field="length"
            label="货品长度"
            :rules="[{ required: true, message: '货品长度不能为空' }]"
            :validate-trigger="['change', 'blur']"
          >
            <a-input-number
              v-model="form.length"
              :style="{ width: '150px' }"
              placeholder="长度"
              :min="0"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item
            field="width"
            label="货品宽度"
            :rules="[{ required: true, message: '货品宽度不能为空' }]"
            :validate-trigger="['change', 'blur']"
          >
            <a-input-number
              v-model="form.width"
              :style="{ width: '150px' }"
              placeholder="宽度"
              :min="0"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item
            field="height"
            label="货品高度"
            :rules="[{ required: true, message: '货品高度不能为空' }]"
            :validate-trigger="['change', 'blur']"
          >
            <a-input-number
              v-model="form.height"
              :style="{ width: '150px' }"
              placeholder="高度"
              :min="0"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item
            field="weight"
            label="货品重量"
            :rules="[{ required: true, message: '货品重量不能为空' }]"
            :validate-trigger="['change', 'blur']"
          >
            <a-space>
              <a-input-number
                v-model="form.weight"
                :style="{ width: '150px' }"
                placeholder="重量"
                :min="0"
              />
            </a-space>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-card>
  <a-space :size="16" style="margin-top: 40px">
    <a-button key="agian" type="primary" @click="oneMore"> 下一步 </a-button>
  </a-space>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import { Message, ValidatedError } from '@arco-design/web-vue';
  import useLoading from '@/hooks/loading';
  import { CargoData, CityData, getCity, inStorage } from '@/api/storage';
  import { FormInstance } from '@arco-design/web-vue/es/form';

  const emits = defineEmits(['changeStep']);
  const oneMore = () => {
    emits('changeStep', 'forward', {});
  };

  const { loading, setLoading } = useLoading();

  const cityList = ref([] as CityData[]);
  const formRef = ref<FormInstance>();

  const fetchData = async () => {
    setLoading(true);
    const cityData = await getCity();
    cityList.value = cityData.data;
    setLoading(false);
  };

  fetchData();

  let form = reactive({
    name: '',
    length: 0,
    width: 0,
    height: 0,
    weight: 0,
    outBranch: 0,
  } as CargoData);

  const userInfo = reactive({
    name: '',
    phone: '',
    address: '',
  });

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
      const res = await inStorage(values as CargoData);
      if ((res as any).code === 20000) {
        Message.success('入库成功');
      }
      form = {
        name: '',
        length: 0,
        width: 0,
        height: 0,
        weight: 0,
        outBranch: 0,
      } as CargoData;
      setLoading(false);
    }
  };
</script>

<style scoped lang="less">
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 0;
    background-color: var(--color-bg-2);
  }
</style>
