<template>
    <div class='content_page'>
        <div class='content_body'>
            <div class='content_button'>
                <button class='add primary' @click='addItem' title='添加'>添加</button>
            </div>
            <div class='content_table'>
                <table>
                    <thead>
                        <tr>
                            <th v-for='item in thead' :key='item'>{{item}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for='(item, index) in list' :key='item.id'>
                            <td>
                                <span :title='item.id'>{{item.id}}</span>
                            </td>
                            <td>
                                <div v-if='index === currentIndex'>
                                    <input
                                        v-model='item.users'
                                        title='users'
                                    />
                                </div>
                                <span :title='item.users' v-else>{{item.users}}</span>
                            </td>
                            <td :title='item.date'>
                              <div v-if='index === currentIndex'>
                                    <input
                                        v-model='item.date'
                                        title='sex'
                                    />
                                </div>
                                <span :title='item.date' v-else>{{item.date}}</span>
                            </td>
                            <td>
                                <div v-if='index === currentIndex'>
                                    <button
                                        class='primary confirm'
                                        @click='confirm(item)'
                                    >确定</button>
                                    <button
                                        @click='cancel(item)'
                                    >取消</button>
                                </div>
                                <span v-else>
                                    <span @click='editItem(index)'>
                                        edit
                                    </span>
                                    <span @click='deleteItem(index, item)'>delete</span>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script lang='ts'>
import axios from 'axios';
import { defineComponent, reactive } from 'vue';
import { compositionApi } from '../components/composables/index';
import {ItemType} from '../types/index';

const AboutComponent = defineComponent({
  name: 'List',
  setup() {
    const state = reactive({
      itemData: {
        id: '',
        users: '',
        date: ''
      },
    });
    const fetchApi = () => {
      return axios.get('/about');
    };
    const deleteApi = (item: ItemType) => {
      return axios.post('/about/delete', { id: item.id });
    };
    const confirmAddApi = (item: ItemType) => {
      return axios.post('/about/add', { 
        users: item.users,
        date: item.date,
      });
    };
    const confirmEditApi = (item: ItemType) => {
      return axios.post('/about/edit', {
        id: item.id,
        users: item.users,
        date: item.date,
      });
    };
    const localPageData = compositionApi(fetchApi, deleteApi, confirmAddApi, confirmEditApi, state.itemData);
    return {
      state,
      ...localPageData,
    };
  },
  data() {
    return {
      thead: [
        'id',
        'users',
        'date',
        'option',
      ],
    };
  },
});

export default AboutComponent;
</script>
<style lang='less'>
.content_page {
  .primary {
    margin-right: 20px;
  }
  input {
    width: 100%;
  }
}
</style>
