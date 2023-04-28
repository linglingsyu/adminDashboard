<template>
  <div class="card">
    <div
      class="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60"
    >
      <h2 class="mr-auto text-base font-medium">Basic Select</h2>
      <div class="flex items-center w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
        <FormLabel htmlFor="show-example-1">Show example code</FormLabel>
        <FormInput type="text" id="show-example-1" placeholder="test" />

        <FormLabel htmlFor="show-example-2">222222</FormLabel>
        <FormInput type="checkbox" id="show-example-2" placeholder="test" />
        <FormInput type="checkbox" id="show-example-2" placeholder="test" />
        <FormInput type="checkbox" id="show-example-2" placeholder="test" />

        <FormLabel htmlFor="show-example-3">radio try</FormLabel>
        <FormInput
          type="radio"
          name="group"
          id="show-example-3"
          placeholder="test"
        />
        <FormInput type="radio" name="group" placeholder="test" />

        <FormSwitch id="switch01" />
        <FormLabel htmlFor="switch01">switch01</FormLabel>
        <!-- <label class="cursor-pointer ml-2" for=""> </label> -->
        <!-- <input
          class="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;[type='radio']]:checked:bg-primary [&amp;[type='radio']]:checked:border-primary [&amp;[type='radio']]:checked:border-opacity-10 [&amp;[type='checkbox']]:checked:bg-primary [&amp;[type='checkbox']]:checked:border-primary [&amp;[type='checkbox']]:checked:border-opacity-10 [&amp;:disabled:not(:checked)]:bg-slate-100 [&amp;:disabled:not(:checked)]:cursor-not-allowed [&amp;:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&amp;:disabled:checked]:opacity-70 [&amp;:disabled:checked]:cursor-not-allowed [&amp;:disabled:checked]:dark:bg-darkmode-800/50 w-[38px] h-[24px] p-px rounded-full relative before:w-[20px] before:h-[20px] before:shadow-[1px_1px_3px_rgba(0,0,0,0.25)] before:transition-[margin-left] before:duration-200 before:ease-in-out before:absolute before:inset-y-0 before:my-auto before:rounded-full before:dark:bg-darkmode-600 checked:bg-primary checked:border-primary checked:bg-none before:checked:ml-[14px] before:checked:bg-white ml-3 mr-0"
          type="checkbox"
          id="show-example-1"
        /> -->
      </div>
    </div>
    <div class="p-5">
      <div>
        <div>
          <label>Basic</label>
          <div class="mt-2">
            <select
              class="tom-select w-full"
              data-id="_oib81f1lz"
              hidden="true"
            >
              <option value="1">Leonardo DiCaprio</option>
              <option value="2">Johnny Deep</option>
              <option value="3">Robert Downey, Jr</option>
              <option value="4">Samuel L. Jackson</option>
              <option value="5">Morgan Freeman</option></select
            ><select
              class="tom-select w-full tomselected ts-hidden-accessible"
              data-id="_oib81f1lz"
              data-initial-class="tom-select w-full"
              id="tomselect-3"
              tabindex="-1"
            >
              <option value="2">Johnny Deep</option>
              <option value="3">Robert Downey, Jr</option>
              <option value="4">Samuel L. Jackson</option>
              <option value="5">Morgan Freeman</option>
              <option value="1">Leonardo DiCaprio</option>
            </select>
            <div
              class="ts-wrapper tom-select w-full single plugin-dropdown_input full has-items"
            >
              <div
                class="ts-control"
                role="combobox"
                aria-haspopup="listbox"
                aria-expanded="false"
                aria-controls="tomselect-3-ts-dropdown"
                id="tomselect-3-ts-control"
                tabindex="0"
              >
                <div data-value="1" class="item" data-ts-item="">
                  Leonardo DiCaprio
                </div>
                <input
                  class="items-placeholder"
                  tabindex="-1"
                  placeholder="Select your favorite actors"
                />
              </div>
              <div
                class="ts-dropdown single plugin-dropdown_input"
                style="display: none"
              >
                <div class="dropdown-input-wrap">
                  <input
                    type="select-one"
                    autocomplete="off"
                    size="1"
                    tabindex="-1"
                    class="dropdown-input"
                    placeholder="Select your favorite actors"
                  />
                </div>
                <div
                  role="listbox"
                  tabindex="-1"
                  class="ts-dropdown-content"
                  id="tomselect-3-ts-dropdown"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-3">
          <label>Nested</label>
          <div class="mt-2">
            <select
              class="tom-select w-full"
              data-id="_q7msdrlz8"
              hidden="true"
            >
              <optgroup label="American Actors">
                <option value="1">Leonardo DiCaprio</option>
                <option value="2">Johnny Deep</option>
                <option value="3">Robert Downey, Jr</option>
                <option value="4">Samuel L. Jackson</option>
                <option value="5">Morgan Freeman</option>
              </optgroup>
              <optgroup label="American Actresses">
                <option value="6">Scarlett Johansson</option>
                <option value="7">Jessica Alba</option>
                <option value="8">Jennifer Lawrence</option>
                <option value="9">Emma Stone</option>
                <option value="10">Angelina Jolie</option>
              </optgroup></select
            ><select
              class="tom-select w-full tomselected ts-hidden-accessible"
              data-id="_q7msdrlz8"
              data-initial-class="tom-select w-full"
              id="tomselect-4"
              tabindex="-1"
            >
              <optgroup label="American Actors">
                <option value="2">Johnny Deep</option>
                <option value="3">Robert Downey, Jr</option>
                <option value="4">Samuel L. Jackson</option>
                <option value="5">Morgan Freeman</option>
              </optgroup>
              <optgroup label="American Actresses">
                <option value="6">Scarlett Johansson</option>
                <option value="7">Jessica Alba</option>
                <option value="8">Jennifer Lawrence</option>
                <option value="9">Emma Stone</option>
                <option value="10">Angelina Jolie</option>
              </optgroup>
              <option value="1">Leonardo DiCaprio</option>
            </select>
            <div
              class="ts-wrapper tom-select w-full single plugin-dropdown_input full has-items"
            >
              <div
                class="ts-control"
                role="combobox"
                aria-haspopup="listbox"
                aria-expanded="false"
                aria-controls="tomselect-4-ts-dropdown"
                id="tomselect-4-ts-control"
                tabindex="0"
              >
                <div data-value="1" class="item" data-ts-item="">
                  Leonardo DiCaprio
                </div>
                <input
                  class="items-placeholder"
                  tabindex="-1"
                  placeholder="Select your favorite actors"
                />
              </div>
              <div
                class="ts-dropdown single plugin-dropdown_input"
                style="display: none"
              >
                <div class="dropdown-input-wrap">
                  <input
                    type="select-one"
                    autocomplete="off"
                    size="1"
                    tabindex="-1"
                    class="dropdown-input"
                    placeholder="Select your favorite actors"
                  />
                </div>
                <div
                  role="listbox"
                  tabindex="-1"
                  class="ts-dropdown-content"
                  id="tomselect-4-ts-dropdown"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!---->
    </div>
  </div>
</template>

<script>
// import HomeView from '@/components/HomeView.vue'
// import {mapActions,mapState} from 'pinia'
import FormInput from '@/components/form/FormInput.vue';
import FormLabel from '@/components/form/FormLabel.vue';
import FormSwitch from '@/components/form/FormSwitch.vue';

export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  computed: {},
  watch: {},
  components: {
    FormInput,
    FormLabel,
    FormSwitch,
  },
};
</script>

<style scoped></style>
