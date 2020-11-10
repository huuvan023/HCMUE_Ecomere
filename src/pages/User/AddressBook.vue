<template>
  <div class="row col-12">
    <div class="col-md-11 col-xs-12 row q-mx-auto q-pa-md q-mb-md" style="border: 1px solid lightgrey">
      <div class="col-12">
        <q-icon name="home" size="lg"/>
      </div>
      <div class="text-h4 q-my-md text-weight-bold col-12">Address Book</div>
      <div class="col-8 row" style="font-family: Actor">
        <div class="col-12 q-my-sm">
          <label class="text-weight-bold text-grey-7 text-h6">
             YOUR MOBILE:
          </label>
          <q-input class="col-12" outlined v-model="phoneNumber" color="dark" />
        </div>
        <div class="col-12 q-my-sm">
          <label class="text-weight-bold text-grey-7 text-h6">
            ADDRESS:
          </label>
          <q-input class="col-12" outlined v-model="address.mainAddress" color="dark" />
          <q-input class="col-12 q-mt-sm" outlined v-model="address.optionalNote" placeholder="Note (optional )" color="dark" />
        </div>
        <div class="col-12 q-my-sm">
          <label class="text-weight-bold text-grey-7 text-h6">
            CITY/PROVINCE:
          </label>
          <q-input class="col-12" outlined v-model="address.city" color="dark" />
        </div>
        <div class="col-12 q-my-sm">
          <p>This will be your default shipping address.</p>
        </div>
        <div class="col-8 q-mt-sm q-mb-md">
          <q-btn color="dark" text-color="white" class="text-h6 text-weight-bold full-width" label="SAVE CHANGES"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'quasar/dist/quasar.addon.css'

export default {
  name: "AddressBook",
  data: () => ({
    phoneNumber: '',
    address: {
      mainAddress: '',
      optionalNote: '',
      city:''
    }
  })
}
</script>

<style scoped>

</style>
