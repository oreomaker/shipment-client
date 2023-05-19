<template>
  <div class="container">
    <Breadcrumb :items="['工作台', '出库管理']" />
    <a-spin :loading="loading" style="width: 100%">
      <a-card class="general-card">
        <template #title>
          {{ '出库管理' }}
        </template>
        <a-table
          v-model:selectedKeys="selectedKeys"
          row-key="id"
          :loading="loading"
          :columns="columns as TableColumnData[]"
          :data="tableData"
          :row-selection="rowSelection as TableRowSelection"
        >
          <template
            #des-filter="{
              filterValue,
              setFilterValue,
              handleFilterConfirm,
              handleFilterReset,
            }"
          >
            <div class="des-filter">
              <a-space direction="vertical">
                <a-input
                  :model-value="filterValue[0]"
                  @input="(value) => setFilterValue([value])"
                />
                <div class="des-filter-footer">
                  <a-button @click="handleFilterConfirm">确认</a-button>
                  <a-button @click="handleFilterReset">重置</a-button>
                </div>
              </a-space>
            </div>
          </template>
          <template #operation="{ record }">
            <a-space>
              <a-button @click="handleDetails(record)">查看详情</a-button>
              <a-popconfirm content="确定出库?" @ok="handleOut(record.id)">
                <a-button type="primary"> 出库 </a-button>
              </a-popconfirm>
            </a-space>
            <DetailsDrawer
              v-if="visible"
              :data="detailCargoList"
              :visible="visible"
              @ok="handleDetailsOk"
              @cancel="handleDetailsCancel"
            />
          </template>
        </a-table>
      </a-card>
    </a-spin>
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref, reactive, h } from 'vue';
  import { IconSearch } from '@arco-design/web-vue/es/icon';
  import { TableColumnData, TableRowSelection } from '@arco-design/web-vue';
  import useLoading from '@/hooks/loading';
  import { getCargo, outStorage } from '@/api/storage';
  import DetailsDrawer from './components/details-drawer.vue';

  const selectedKeys = ref([]);
  const visible = ref(false);
  const { loading, setLoading } = useLoading(true);
  const tableData = ref([]);

  const columns = computed(() => {
    return [
      {
        title: '批次号',
        dataIndex: 'id',
      },
      {
        title: '目的地',
        dataIndex: 'branch.city',
        filterable: {
          filter: (value: any, record: any) => {
            return record.branch.city.includes(...value);
          },
          slotName: 'des-filter',
          icon: () => h(IconSearch),
        },
      },
      {
        title: '最早货物入库时间',
        dataIndex: 'earliestTime',
      },
      {
        title: '操作',
        slotName: 'operation',
      },
    ];
  });

  const fetchData = async () => {
    setLoading(true);
    const data = await getCargo();
    tableData.value = data.data;
    setLoading(false);
  };

  let detailCargoList = reactive([]);
  const handleDetails = (record: any) => {
    visible.value = true;
    detailCargoList = record.cargoList;
  };

  const handleDetailsOk = () => {
    visible.value = false;
  };

  const handleDetailsCancel = () => {
    visible.value = false;
  };

  const handleOut = async (id: number) => {
    setLoading(true);
    await outStorage(id);
    fetchData();
    setLoading(false);
  };

  const rowSelection = reactive({
    type: 'checkbox',
    showCheckedAll: true,
    onlyCurrent: false,
  });

  fetchData();
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px;
  }

  .des-filter {
    padding: 20px;
    background: var(--color-bg-5);
    border: 1px solid var(--color-neutral-3);
    border-radius: var(--border-radius-medium);
    box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
  }

  .des-filter-footer {
    display: flex;
    justify-content: space-between;
  }
</style>
