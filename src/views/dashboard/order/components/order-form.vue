<template>
  <!-- 发货人 -->
  <a-card class="general-card" style="width: 100%" title="发货人信息">
    <a-form ref="senderFormRef" layout="vertical" :model="formData.sender">
      <a-row :gutter="80">
        <a-col :span="8">
          <a-form-item
            field="name"
            label="发货人姓名"
            :rules="[{ required: true, message: '发货人姓名不能为空' }]"
            :validate-trigger="['change', 'blur']"
          >
            <a-input
              v-model="formData.sender.name"
              placeholder="请输入发货人姓名"
              style="width: 480px; margin: 0 auto"
              allowclear
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item
            field="phone"
            label="发货人电话"
            :rules="[{ required: true, message: '发货人电话不能为空' }]"
            :validate-trigger="['change', 'blur']"
          >
            <a-input
              v-model="formData.sender.phone"
              placeholder="请输入发货人电话"
              style="width: 480px; margin: 0 auto"
              allowclear
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item
            field="address"
            label="发货地址"
            :rules="[{ required: true, message: '发货地址不能为空' }]"
            :validate-trigger="['change', 'blur']"
          >
            <a-input
              v-model="formData.sender.address"
              placeholder="请输入发货地址"
              style="width: 480px; margin: 0 auto"
              allowclear
            />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-card>
  <!-- 收货人 -->
  <a-card class="general-card" style="width: 100%" title="收货人信息">
    <a-form ref="receiverFormRef" layout="vertical" :model="formData.receiver">
      <a-row :gutter="80">
        <a-col :span="8">
          <a-form-item
            field="name"
            label="收货人姓名"
            :rules="[{ required: true, message: '收货人姓名不能为空' }]"
            :validate-trigger="['change', 'blur']"
          >
            <a-input
              v-model="formData.receiver.name"
              placeholder="请输入收货人姓名"
              style="width: 480px; margin: 0 auto"
              allowclear
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item
            field="phone"
            label="收货人电话"
            :rules="[{ required: true, message: '收货人电话不能为空' }]"
            :validate-trigger="['change', 'blur']"
          >
            <a-input
              v-model="formData.receiver.phone"
              placeholder="请输入收货人电话"
              style="width: 480px; margin: 0 auto"
              allowclear
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item
            field="address"
            label="收货地址"
            :rules="[{ required: true, message: '发货地址不能为空' }]"
            :validate-trigger="['change', 'blur']"
          >
            <a-input
              v-model="formData.receiver.address"
              placeholder="请输入收货地址"
              style="width: 480px; margin: 0 auto"
              allowclear
            />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-card>
  <a-card class="general-card" style="width: 100%" title="货品信息">
    <a-form ref="cargoFormRef" layout="vertical" :model="formData.cargo">
      <a-row :gutter="80">
        <a-col :span="8">
          <a-form-item
            field="name"
            label="货品名称"
            style="margin-top: 10%"
            :rules="[{ required: true, message: '货品名称不能为空' }]"
            :validate-trigger="['change', 'blur']"
          >
            <a-input
              v-model="formData.cargo.name"
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
            label="货品长度(m)"
            :rules="[{ required: true, message: '货品长度不能为空' }]"
            :validate-trigger="['change', 'blur']"
          >
            <a-input-number
              v-model="formData.cargo.length"
              placeholder="长度"
              :min="0"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item
            field="width"
            label="货品宽度(m)"
            :rules="[{ required: true, message: '货品宽度不能为空' }]"
            :validate-trigger="['change', 'blur']"
          >
            <a-input-number
              v-model="formData.cargo.width"
              placeholder="宽度"
              :min="0"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item
            field="height"
            label="货品高度(m)"
            :rules="[{ required: true, message: '货品高度不能为空' }]"
            :validate-trigger="['change', 'blur']"
          >
            <a-input-number
              v-model="formData.cargo.height"
              placeholder="高度"
              :min="0"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item
            field="weight"
            label="货品重量(kg)"
            :rules="[
              { required: true, message: '货品重量不能为空' },
              { positive: true, message: '货品重量必须大于0' },
            ]"
            :validate-trigger="['change', 'blur']"
          >
            <a-space>
              <a-input-number
                v-model="formData.cargo.weight"
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
  import { Message } from '@arco-design/web-vue';
  import { ShipOrderData } from '@/api/shipment';
  import { useShipmentStore } from '@/store';
  import { FormInstance } from '@arco-design/web-vue/es/form';

  const senderFormRef = ref<FormInstance>();
  const receiverFormRef = ref<FormInstance>();
  const cargoFormRef = ref<FormInstance>();

  const emits = defineEmits(['changeStep']);

  const shipmentStore = useShipmentStore();

  const formData = reactive(shipmentStore.shipOrder as ShipOrderData);

  const oneMore = async () => {
    const senderErr = await senderFormRef.value?.validate();
    const receiverErr = await receiverFormRef.value?.validate();
    const cargoErr = await cargoFormRef.value?.validate();
    if (
      senderErr !== undefined ||
      receiverErr !== undefined ||
      cargoErr !== undefined
    ) {
      Message.error('请填写完整信息');
      return;
    }
    await shipmentStore.setShipOrder(formData);
    Message.success('成功创建订单');

    emits('changeStep', 'forward', {});
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
