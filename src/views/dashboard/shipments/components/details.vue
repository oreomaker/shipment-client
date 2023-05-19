<template>
  <a-card class="general-card" style="width: 100%">
    <template #title>
      {{ '详细信息' }}
    </template>
    <template #extra>
      <a-space>
        <a-button type="primary" @click="goBack">返回</a-button>
      </a-space>
    </template>
    <div class="wrapper">
      <a-table
        :loading="loading"
        :columns="columns"
        :data="detData"
        :scroll="scroll"
        :row-selection="rowSelection"
        @change="handleChange"
      >
        <template
          #details-filter="{
            filterValue,
            setFilterValue,
            handleFilterConfirm,
            handleFilterReset,
          }"
        >
          <div class="custom-filter">
            <a-space direction="vertical">
              <a-input
                :model-value="filterValue[0]"
                @input="(value) => setFilterValue([value])"
              />
              <div class="custom-filter-footer">
                <a-button @click="handleFilterConfirm">确认</a-button>
                <a-button @click="handleFilterReset">重置</a-button>
              </div>
            </a-space>
          </div>
        </template>
        <!-- <template #optional="{ record }">
          <a-space>
            <template #split>
              <a-divider direction="vertical" />
            </template>
            <a-tag v-if="false" color='arcoblue'>Tag</a-tag>
              <a-button @click="$modal.info({ title:'Info', content:record.name})">移除</a-button>
          </a-space>
        </template> -->
      </a-table>
    </div>
  </a-card>
</template>

<script lang="ts" setup>
  import { computed, ref, reactive, h } from 'vue';
  import { useI18n } from 'vue-i18n';
  import useLoading from '@/hooks/loading';
  import { FormInstance } from '@arco-design/web-vue/es/form';
  import { IconSearch } from '@arco-design/web-vue/es/icon';
  import { useRouter } from 'vue-router';
  import { CargoInfo, getCargo, OutStorageData } from '@/api/storage';

  const router = useRouter();
  const detData = ref([]);
  const { loading, setLoading } = useLoading(true);
  const { t } = useI18n();

  const columns = computed(() => {
    return [
      {
        title: '货物编码',
        dataIndex: 'd',
        filterable: {
          filter: (value, record) => record.id.includes(value),
          slotName: 'details-filter',
          icon: () => h(IconSearch),
        },
      },
      {
        title: '货物名称',
        dataIndex: 'name',
        filterable: {
          filter: (value, record) => record.name.includes(value),
          slotName: 'details-filter',
          icon: () => h(IconSearch),
        },
      },
      {
        title: '入库时间',
        dataIndex: 'inTime',
        filterable: {
          filter: (value, record) => record.inTime.includes(value),
          slotName: 'details-filter',
          icon: () => h(IconSearch),
        },
      },
      {
        title: '目的地区',
        dataIndex: 'outBranch.city',
      },
      // {
      //   title: '操作',
      //   slotName:'optional',
      // }
    ];
  });

  const handleChange = (data, extra, currentDataSource) => {
    console.log('change', data, extra, currentDataSource);
  };

  const rowSelection = reactive({
    type: 'checkbox',
    showCheckedAll: true,
    onlyCurrent: false,
  });

  const scroll = {
    x: '80%',
    y: 500,
  };

  // const formRef = ref<FormInstance>();

  const fetchData = async () => {
    setLoading(true);

    const data = await getCargo();

    setLoading(false);
  };

  const goBack = () => {
    router.go(-1);
  };

  fetchData();
</script>

<style scoped lang="less">
  .container {
    .keep-margin {
      margin-bottom: 10px;
    }
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    background-color: var(--color-bg-2);
  }

  .steps {
    margin-bottom: 36px;
  }

  .form {
    width: 540px;
  }

  .form-content {
    padding: 8px 50px 0 30px;
  }

  .custom-filter {
    padding: 20px;
    background: var(--color-bg-5);
    border: 1px solid var(--color-neutral-3);
    border-radius: var(--border-radius-medium);
    box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
  }

  .custom-filter-footer {
    display: flex;
    justify-content: space-between;
  }
</style>
