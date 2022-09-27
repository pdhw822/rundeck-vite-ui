<script lang="ts" setup>
  import useSteps from '~/core/utilities/formsteps'
  
  const { steps, visitedSteps, activeStep, setStep, stepPlugin } = useSteps()
  
  // NEW: submit handler, which posts to our fake backend.
  const submitApp = async (formData, node) => {
    try {
      const res = await axios.post(formData)
      node.clearErrors()
      alert('Your application was submitted successfully!')
    } catch (err) {
      node.setErrors(err.formErrors, err.fieldErrors)
    }
  }
  
  const checkStepValidity = (stepName) => {
    return (steps[stepName].errorCount > 0 || steps[stepName].blockingCount > 0) && visitedSteps.value.includes(stepName)
  }
  
</script>

<script lang="ts">
  import { defineComponent } from "vue";
  import { stringify } from 'yaml'
  import { v4 as uuidv4 } from 'uuid';

  export default defineComponent({
    computed: {
      yamlize (){
        return stringify(this.yamlJobData)
      },
      uuid (){
        return uuidv4()
      }
    },
    data(){
      return {
        options_input_type: '',
        options: [],
        options_group: null,
        jobOptions: 0,
        jobOptionss: [],
        yamlJobData: {
          defaultTab: 'nodes',
          description: '',
          executionEnabled: true,
          id: this.uuid,
          loglevel: 'INFO',
          name: 'echo',
          nodeFilterEditable: false,
          plugins: {
            ExecutionLifecycle: null
          },
          scheduleEnabled: true,
          sequence:{
            commands: {
              exec: `echo "Testing"`
            },
            keepgoing: false,
            strategy: 'node-first',
          },
          uuid: this.uuid
        }
      }
    },
    methods: {
      addJobOption(){
        this.jobOptions = this.jobOptions+1
      }
    }
  })
</script>

<template>
  <div>
    <div>
      <div>
        <Breadcrumbs/>
        <page-title>Create a Job</page-title>
        <page-description>Run workflow Jobs and Node Jobs </page-description>
      </div>

      <div class="mt-6">
        <div class="col-span-2">
          <card css-override="p-0">
            <FormKit
              type="form"
              #default="{ value, state: { valid } }"
              :plugins="[stepPlugin]"
              @submit="submitApp"
              :actions="false"
            >
              
              <section class="p6">
                <ul class="flex pb-3 mb-6 border-b border-gray-700">
                  <li
                    v-for="(step, stepName) in steps"
                    class="relative first:ml-0 px-2 mx-2 py-1 block rounded hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                    :class="['step', { 'has-errors': checkStepValidity(stepName) }]"
                    @click="activeStep = stepName"
                    :data-step-valid="step.valid && step.errorCount === 0"
                    :data-step-active="activeStep === stepName"
                  >
                    <span
                      v-if="checkStepValidity(stepName)"
                      class="bg-red-500 rounded px-2"
                      v-text="step.errorCount + step.blockingCount"
                    />
                    {{ stepName }}
                    <div :class="[{ 'border-b border-2 border-red-500 rounded': activeStep === stepName}]" class="absolute left-0 bottom-[-13px] w-full">

                    </div>
                  </li>
                </ul>

                <!-- .form-body solely for styling -->
                <div class="form-body">
             
                    <section v-show="activeStep === 'Details'">
                      <FormKit
                        type="group"
                        id="Details"
                        name="Details"
                      >
                        <div class="p-6 bg-gray-100 dark:bg-gray-800 rounded">
                          <div>
                            <div class="text-2xl dark:font-white">Basic Details</div>
                            <div class="dark:font-white">The most important part! Set a descriptive name you will be referencing this often</div>
                          </div>
                          <div class="mt-6">
                            <FormKit
                              type="text"
                              label="*Job name"
                              name="job_name"
                              validation="required"
                              :classes="{
                                input: 'dark:text-white',
                                error: 'dark:text-white'
                              }"
                            />

                            <FormKit
                              type="text"
                              name="description"
                              label="*Description"
                              validation="required"
                              :classes="{
                                input: 'dark:text-white'
                              }"
                            />
                          </div>
                          
                        </div>
                      </FormKit>
                    </section>

                    <section v-show="activeStep === 'Workflow'">
   
                      <FormKit
                        id="Workflow"
                        type="group"
                        name="Workflow"
                      >
                        <div class="p-6 bg-gray-100 dark:bg-gray-800 rounded">
                          <div class="flex justify-between">
                            <div>
                              <div class="text-2xl dark:font-white">Options</div>
                              <div class="dark:font-white">Enter the customizable options you would like to pass into this job</div>
                            </div>
                            <div class="flex justify-between items-start">
                              <div class="btn-secondary-sm flex items-center">
                                <div i="heroicons-backward-solid" class="mr-2 w-4 h-4 text-black align-center inline-block"/>
                                Undo</div>
                              <div class="btn-secondary-sm flex items-center">
                                Redo
                                <div i="heroicons-forward-solid" class="ml-2 w-4 h-4 text-black align-center inline-block"/>
                              </div>
                            </div>
                          </div>
                          <div class="mt-6" v-if="jobOptions == 0">
                            <div class="btn-secondary-sm cursor-pointer" @click="addJobOption()">Add an Option </div>
                          </div>
                          <div class="mt-6" v-if="jobOptions >= 1">
                            <FormKit
                              v-model="options"
                              type="list"
                            >
                              <div v-for="index in jobOptions" :key="index">
                                <div class="flex">
                                  <div class="flex-none rounded-full mr-3 h-6 w-6 font-bold flex items-center justify-center bg-gray-900 text-white dark:text-black dark:bg-white">{{ index }}</div>
                                  <div class="flex-grow border border-gray-600 rounded p-6">
                                    <FormKit
                                      type="group"
                                    >
                                      <FormKit
                                        type="select"
                                        label="Option Type?"
                                        placeholder="Select a planet"
                                        :name="`option-type-${index}`"
                                        :options="{
                                          text: 'Text',
                                          file: 'File'
                                        }"
                                        validation="required"
  
                                        :classes="{
                                          input: 'dark:text-white',
                                          error: 'dark:text-white'
                                        }"
                                      />
                                      <FormKit
                                        type="text"
                                        label="Option Name?"
                                        placeholder="Set the option name"
                                        :name="`option-name-${index}`"
                                        validation="required"
                                       
                                        :classes="{
                                          input: 'dark:text-white',
                                          error: 'dark:text-white'
                                        }"
                                      />
                                      <FormKit
                                        type="text"
                                        label="Option Label"
                                        placeholder="Set the option label"
                                        :name="`option-label-${index}`"
                                        validation="required"
                                        validation-visibility="dirty"
                                        :validation-messages="{
                                          is: 'Nope! Jupiter is the largest planet',
                                        }"
                                        :classes="{
                                          input: 'dark:text-white',
                                          error: 'dark:text-white'
                                        }"
                                      />
                                      <FormKit
                                        type="textarea"
                                        label="Option Description"
                                        rows="5"
                                        placeholder="Set the option label"
                                        :name="`option-description-${index}`"
                                        validation="required"
                                        :classes="{
                                          input: 'dark:text-white',
                                          error: 'dark:text-white'
                                        }"
                                      />
                                      <FormKit
                                        type="text"
                                        label="Default Value"
                                        placeholder="Set the option label"
                                        :name="`option-defaultval-${index}`"
                                        validation="required"
                                
                                        :classes="{
                                          input: 'dark:text-white',
                                          error: 'dark:text-white'
                                        }"
                                      />
                                      <FormKit
                                        type="radio"
                                        label="Input Type"
                                        :name="`option-radio-${index}`"
                                        :options="{
                                          teddy: 'Plain Text',
                                          lama: 'Date: The date will pass to your job as a string formatted this way: m/dd/yy HH:MM',
                                          lizard: 'Secure: † Password input, value exposed in scripts and commands.',
                                          giraffe: 'Secure Remote Authentication: Password input, value not exposed in scripts or commands, used only by Node Executors for authentication.'
                                        }"
                                        help="† Secure input values are not stored by Rundeck after use. If the exposed value is used in a script or command then the output log may contain the value"
                                        :classes="{
                                          input: 'dark:text-white',
                                          error: 'dark:text-white',
                                          help: 'dark:text-white'
                                        }"
                                      />
                                      <FormKit
                                        type="radio"
                                        label="Input Type"
                                        :name="`valuesType-${index}`"
                                        :options="{
                                          list: 'list',
                                          url: 'Remote URL',
                                          awsRegionsJobOptions: 'AWS Regions',
                                          jiraIssueTypesOptionValues: 'Jira / Issue Types',
                                          jiraOptionsValues: 'Jira / Issue List',
                                          jiraTransitionValues: 'Jira / Transitions',
                                          sensuOptionChecks: 'Sensu / Options Checks',
                                          servicenowOptionAssignmentGroup: 'ServiceNow Options/ Assinment Group',
                                          servicenowOptionImpact: 'ServiceNow Options/ Impact List',
                                          servicenowOptionIncidentStates: 'ServiceNow / Options / Incident States',
                                          servicenowOptionIncidents: 'ServiceNow / Options / Incident List',
                                          servicenowOptionPriority: 'ServiceNow / Options / Priority List',
                                          servicenowOptionUrgency: 'ServiceNow / Options / Urgency List',
                                          vmwareOptionDatanceter: 'VMWare / Options / Datacenter',
                                          vmwareOptionNetworks: 'VMWare / Options / Networks',
                                          vmwareOptionTemplates: 'VMWare / Options / Templates',
                                        }"
                                        :classes="{
                                          input: 'dark:text-white',
                                          error: 'dark:text-white',
                                          help: 'dark:text-white'
                                        }"
                                      />
                                    </FormKit>
                                  </div>
                              </div>
                             
                            </div>
                            </FormKit>
                          </div>
                            
                        </div>
                      </FormKit>
                    </section>

                    <section v-show="activeStep === 'Nodes'">
                      <FormKit
                        id="Nodes"
                        type="group"
                        name="Nodes"
                      >
                        <FormKit
                          type="checkbox"
                          label="*I'm not a previous grant recipient"
                          help="Have you received a grant from us before?"
                          name="not_previous_recipient"
                          validation="required|accepted"
                          :validation-messages="{
                            accepted: 'We can only give one grant per organization.'
                          }"
                        />
                        <FormKit
                          type="textarea"
                          label="*How will you use the money?"
                          name="how_money"
                          help="Must be between 20 and 500 characters."
                          placeholder="Describe how the grant will accelerate your efforts."
                          validation="required|length:20,500"
                        />
                      </FormKit>
                    </section>
                    <section v-show="activeStep === 'Schedule'">
                      <FormKit
                        id="Schedule"
                        type="group"
                        name="Schedule"
                      >
                        <FormKit
                          type="checkbox"
                          label="*I'm not a previous grant recipient"
                          help="Have you received a grant from us before?"
                          name="not_previous_recipient"
                          validation="required|accepted"
                          :validation-messages="{
                            accepted: 'We can only give one grant per organization.'
                          }"
                        />
                        <FormKit
                          type="textarea"
                          label="*How will you use the money?"
                          name="how_money"
                          help="Must be between 20 and 500 characters."
                          placeholder="Describe how the grant will accelerate your efforts."
                          validation="required|length:20,500"
                        />
                      </FormKit>
                    </section>
                    <section v-show="activeStep === 'ExecutionPlugins'">
                      <FormKit
                        id="ExecutionPlugins"
                        type="group"
                        name="ExecutionPlugins"
                      >
                        <FormKit
                          type="checkbox"
                          label="*I'm not a previous grant recipient"
                          help="Have you received a grant from us before?"
                          name="not_previous_recipient"
                          validation="required|accepted"
                          :validation-messages="{
                            accepted: 'We can only give one grant per organization.'
                          }"
                        />
                        <FormKit
                          type="textarea"
                          label="*How will you use the money?"
                          name="how_money"
                          help="Must be between 20 and 500 characters."
                          placeholder="Describe how the grant will accelerate your efforts."
                          validation="required|length:20,500"
                        />
                      </FormKit>
                    </section>
                    <section v-show="activeStep === 'Other'">
                      <FormKit
                        id="Other"
                        type="group"
                        name="Other"
                      >
                        <FormKit
                          type="checkbox"
                          label="*I'm not a previous grant recipient"
                          help="Have you received a grant from us before?"
                          name="not_previous_recipient"
                          validation="required|accepted"
                          :validation-messages="{
                            accepted: 'We can only give one grant per organization.'
                          }"
                        />
                        <FormKit
                          type="textarea"
                          label="*How will you use the money?"
                          name="how_money"
                          help="Must be between 20 and 500 characters."
                          placeholder="Describe how the grant will accelerate your efforts."
                          validation="required|length:20,500"
                        />
                      </FormKit>
                    </section>
          

                  <!-- NEW: Adds Next / Previous navigation buttons. -->
                  <div class="flex mt-4">
                    <FormKit type="button" :disabled="activeStep == 'Details'" @click="setStep(-1)" v-text="'Previous step'" />
                    <FormKit type="button" class="next" :disabled="activeStep == 'Other' " @click="setStep(1)" v-text="'Next step'"/>
                  </div>

              

                  <details>
                    <summary>Form data</summary>
                    <pre>{{ value }}</pre>
                  </details>
                </div>
              </section>
              <div class="flex justify-end border-t border-gray-300 dark:border-gray-700">
                <!-- NEW: Adds submit button. -->
                <div class="px-6 pt-4">
                  <FormKit type="submit" label="Create Job" :disabled="!valid" />
                </div>
              </div>
            </FormKit>
          </card>
        </div>
      </div>
      
    </div>
   
  </div>
</template>

<route lang="yaml">
  meta:
    layout: project
</route>