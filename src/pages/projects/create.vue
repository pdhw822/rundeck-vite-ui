<script setup lang="ts">
  
</script>

<template>
  <div class="container mx-auto">
    <div>
    <Breadcrumbs/>
    <page-title>Create Project</page-title>
    <page-description>Create a new project, this will be the context for all underlying jobs and executions</page-description>
    </div>

    <div class="mt-6 grid grid-cols-3 gap-3">
      <div class="col-span-2">
        <card>
          <FormKit
            type="form"
            id="project-name"
            submit-label="Register"
            @submit="submitHandler"
            :actions="false"
            #default="{ value }"
          >
         
            <FormKit
              type="text"
              name="name"
              label="Project Name"
              placeholder="Enter Name for Project"
              validation="required"
              :validation-messages="{
                  matches: 'Project name can only contain these charactersL [a-zA-Z0-9_-+.] and cannot start a \'.\'',
              }"
              :classes="{
                input: 'dark:text-white',
                help: 'dark:text-white text-sm'
              }"
 
            />
            <FormKit
              type="text"
              name="label"
              label="Project Label"
              validation="required"
              :classes="{
                input: 'dark:text-white'
              }"
            />
            <FormKit
              type="text"
              name="description"
              label="Project Description"
              validation="required"
              :classes="{
                input: 'dark:text-white'
              }"
            />
            <FormKit
              type="submit"
              label="Create"
            />
            <pre wrap>{{ value }}</pre>
          </FormKit>
    
        </card>
      </div>
    </div>


  </div>
</template>

<script setup lang="ts">
  const projects = useProjectStore()

  function submitHandler(projectdata){
    console.log('yuhhh')
    console.log(projectdata)
    projects.createProject(projectdata)
  }
</script>
