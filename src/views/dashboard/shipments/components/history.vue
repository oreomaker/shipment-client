<template>
    <a-card class="general-card" style="width: 100%">
      <template #title>
        {{ "出库历史" }}
      </template>
      <template #extra>
          <a-space>
            <a-button >一键删除</a-button>
            <a-button type="primary">返回</a-button>
          </a-space>
      </template>
      <div class="wrapper">
        <a-table
          :columns="columns"
          :data="histData"
          :scroll="scroll"
          :stripe="true"
          :row-selection="rowSelection" 
          @change="handleChange"
        >
        <template #history-filter="{ filterValue, setFilterValue, handleFilterConfirm, handleFilterReset}">
            <div class="custom-filter">
              <a-space direction="vertical">
                <a-input :model-value="filterValue[0]" @input="(value)=>setFilterValue([value])" />
                  <div class="custom-filter-footer">
                    <a-button @click="handleFilterConfirm">确认</a-button>
                    <a-button @click="handleFilterReset">重置</a-button>
                  </div>
              </a-space>
            </div>
         </template>
          <template #optional="{ record }">
            <a-space>
              <template #split>
                <a-divider direction="vertical" />
              </template>
              <a-tag v-if="false" color='arcoblue'>Tag</a-tag>
                <a-button @click="handleOut(record.id)">删除</a-button>
            </a-space>
          </template>
        </a-table>
      </div>
    </a-card>
  </template>
  
  <script lang="ts" setup>
    import { computed,ref,reactive,h } from 'vue';
    import { useI18n } from 'vue-i18n';
    import useLoading from '@/hooks/loading';
    import { getDocumentMeta, getTableData, DocMetaData } from '@/api/estimate';
    import { FormInstance } from '@arco-design/web-vue/es/form';
    import { IconSearch } from '@arco-design/web-vue/es/icon';
  
    const columns = computed(() => {
        return [
          {
            title: '序号',
            dataIndex: 'id',
            width: 90
          },
          {
            title: '货物名称',
            dataIndex: 'name',
            filterable: {
              filter: (value, record) => record.name.includes(value),
              slotName: 'history-filter',
              icon: () => h(IconSearch)
            }
          },
          {
            title: '货物编码',
            dataIndex: 'number',
            filterable: {
              filter: (value, record) => record.number.includes(value),
              slotName: 'history-filter',
              icon: () => h(IconSearch)
            },
          },
          {
            title: '货物位置',
            dataIndex: 'position',
            filterable: {
              filter: (value, record) => record.position.includes(value),
              slotName: 'history-filter',
              icon: () => h(IconSearch)
            }
          },
          {
            title: '出库批次',
            dataIndex: 'batch',
            filterable: {
              filter: (value, record) => record.batch.includes(value),
              slotName: 'history-filter',
              icon: () => h(IconSearch)
            }
          },        
          {
            title: '操作',
            slotName:'optional',
          }
        ];
      });
  
      const histData = reactive([{
        key: '1',
        id: '1',
        name: 'xrs心心念念的iPad',
        number: '19050839402385',
        position: 'B-03-26',
        batch: '20230311-1'
      }, {
        key: '2',
        id: '2',
        name: '一大箱德宝纸巾',
        number: '29457465434097',
        position: 'M-15-01',
        batch: '20230311-1'
      }, {
        key: '3',
        id: '3',
        name: '实验用滑动变阻器',
        number: '62485702634258',
        position: 'A-09-03',
        batch: '20230311-1'
      }, {
        key: '4',
        id: '4',
        name: '15瓶装很好喝的百香果红茶',
        number: '47654382530838',
        position: 'A-10-01',
        batch: '20230311-1'
      },{
        key: '5',
        id: '5',
        name: '古船面粉富强粉5kg家用',
        number: '69264537539277',
        position: 'D-16-19',
        batch: '20230311-1'
      },{
        key: '6',
        id: '6',
        name: 'zhls最喜欢的美式',
        number: '80899237665125',
        position: 'D-04-11',
        batch: '20230311-2'
      },{
        key: '7',
        id: '7',
        name: 'wwj的旧电脑',
        number: '84302938476200',
        position: 'F-08-02',
        batch: '20230311-2'
      },{
        key: '8',
        id: '8',
        name: '绿箭粒装口香糖薄荷味64克',
        number: '66879320778912',
        position: 'G-01-20',
        batch: '20230311-2'
      }]);
  
      const handleChange = (data, extra, currentDataSource) => {
        console.log('change', data, extra, currentDataSource)
      }
  
      const rowSelection = reactive({
        type: 'checkbox',
        showCheckedAll: true,
        onlyCurrent: false,
      });
  
  
  
    const emits = defineEmits(['changeStep']);
    const { loading, setLoading } = useLoading(true);
    const { t } = useI18n();
  
    const scroll = {
      x: '80%',
      y: 500,
    };
  
  

  
    // const fetchData = async () => {
    //   setLoading(true);
    //   const data = await getTableData();
    //   const meta = await getDocumentMeta();
    //   tableData.value = data.data;
    //   setLoading(false);
    // };
  
    // fetchData();
  
    const onNextClick = async () => {
      emits('changeStep', 'submit', {});
    };
    const goPrev = () => {
      emits('changeStep', 'backward');
    };
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
  