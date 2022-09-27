<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="rows"
      styleClass="vgt-table striped"
      :search-options="{
        enabled: true,
        placeholder: 'Search this table'
      }"
    >
    <template #table-row="props">
      <span v-if="props.column.field == 'actions'">
        <div class="relative">
          <Dropdown :config="[
            {
              icon: '',
              label: 'Edit Configuration',
              link: `/project/${props.row.name}/configure`
            },
            {
              icon: '',
              label: 'New Job',
              link: `/project/${props.row.name}/job/create`
            },
            {
              icon: '',
              label: 'Upload Definition',
              link: `/project/${props.row.name}/job/upload`
            }

          ]"/>
        </div>

      </span>
      <span v-else>
        {{props.formattedRow[props.column.field]}}
      </span>
    </template>
    </vue-good-table>
  </div>
</template>

<script lang="ts">
  import { mapState, mapActions } from 'pinia'
  import { useProjectStore } from '~/core/store/projects'

  import 'vue-good-table-next/dist/vue-good-table-next.css'
  import { VueGoodTable } from 'vue-good-table-next';

  export default {
    name: 'Projects Table',
    components: {
      VueGoodTable,
    },
    methods: {
      ...mapActions(useProjectStore, ['getProjects'])
    },
    computed: {
      ...mapState(useProjectStore, ['projectsList']),
      rows (){
        return this.projectsList
      }
    },
    data(){
      return {
        columns: [
          {
            label: 'Name',
            field: 'name',
          },
          {
            label: 'Actions',
            field: 'actions',
            width: '150px',
            sortable: false
          }
        ],
      };
    },
  };
</script>

<style>
  
</style>