<template>
  <a-drawer
    :height="500"
    :visible="visible"
    placement="bottom"
    unmount-on-close
    @ok="handleEditOk"
    @cancel="handleEditCancel"
  >
    <a-table
      :columns="columns"
      :data="props.data"
      :scroll="scroll"
      :pagination="false"
    >
    </a-table>
  </a-drawer>
</template>

<script lang="ts" setup>
  import { PropType, computed } from 'vue';
  import { CargoInfo } from '@/api/storage';

  const scroll = {
    x: '80%',
    y: 500,
  };

  const props = defineProps({
    data: {
      type: Object as PropType<CargoInfo[]>,
      required: true,
    },
    visible: Boolean,
  });
  const emit = defineEmits(['ok', 'cancel']);

  const columns = computed(() => {
    return [
      {
        title: '货物编码',
        dataIndex: 'id',
      },
      {
        title: '货物名称',
        dataIndex: 'name',
      },
      {
        title: '入库时间',
        dataIndex: 'inTime',
      },
      {
        title: '长度/m',
        dataIndex: 'length',
      },
      {
        title: '宽度/m',
        dataIndex: 'width',
      },
      {
        title: '高度/m',
        dataIndex: 'height',
      },
      {
        title: '重量/kg',
        dataIndex: 'weight',
      },
    ];
  });

  const handleEditOk = () => {
    emit('ok');
  };

  const handleEditCancel = () => {
    emit('cancel');
  };
</script>
