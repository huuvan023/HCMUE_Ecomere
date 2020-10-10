<template>
  <div class="q-pa-xl row paper-wrap">
    <q-card class="my-card col-xs-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
      <q-card-section>
        <div class="text-h3 q-pt-md" id="header-login" >Online transcript</div>
       <div class="text-center">
         <q-icon class="q-py-lg text-secondary" name="login" style="font-size: 3rem"/>
       </div>
      </q-card-section>
      <q-separator />
      <q-tabs
        v-model="tab"
        shrink stretch
        align="justify"
      >
        <q-tab @click="resetField" name="login" label="Login" />
        <q-tab @click="resetField"  name="signup" label="SignUp" />
      </q-tabs>

      <q-tab-panels v-model="tab" animated>

        <q-tab-panel name="login">
          <div class="text-h4 text-center" style="font-weight: bold">Login</div>

          <div class="text-h6 q-pt-lg q-px-xl">

            <q-input outlined class="q-pt-lg" color="primary" v-model="userName" label="Login name">
              <template v-slot:prepend>
                <q-icon name="account_circle" />
              </template>
            </q-input>
            <q-input outlined class="q-pt-lg" color="primary" label="Password" v-model="password"
                     :type="isPwd ? 'password' : 'text'">
              <template v-slot:prepend>
                <q-icon name="vpn_key" />
              </template>
              <template v-slot:append>
                <q-icon
                  v-if="password!==''"
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>

              <q-toggle
                v-model="rememberMe"
                checked-icon="check"
                class="q-mt-md"
                color="primary"
                unchecked-icon="clear"
              >
                <div style="font-weight: normal" class="text-subtitle2">
                  Remember me?
                </div>
              </q-toggle>

            <div class="flex justify-center">
              <q-btn @click="onLogin" outline rounded color="primary" class="q-my-lg q-px-xl q-py-sm text-body1" label="Login" />
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="signup">

          <div class="text-h4 text-center" style="font-weight: bold">Sign Up</div>

          <div class="text-h6 q-pt-lg q-px-xl">

            <q-input outlined class="q-pt-lg" color="primary" v-model="userName" label="Login name">
              <template v-slot:prepend>
                <q-icon name="account_circle" />
              </template>
            </q-input>
            <q-input outlined class="q-pt-lg" color="primary" v-model="fullName" label="Full name">
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>
            <q-select outlined class="q-pt-lg" v-model="classOption" :options="options" label="Choose your class">
              <template v-slot:prepend>
                <q-icon name="school" />
              </template>
            </q-select>
            <q-input outlined class="q-pt-lg" color="primary" label="Password" v-model="password"
                     :type="isPwd ? 'password' : 'text'">
              <template v-slot:prepend>
                <q-icon name="vpn_key" />
              </template>
              <template v-slot:append>
                <q-icon
                  v-if="password !==''"
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>

            <q-input outlined class="q-pt-lg" color="primary" label="Confirm password" v-model="confirmPassword"
                     :type="isConfirmPwd ? 'password' : 'text'">
              <template v-slot:prepend>
                <q-icon name="vpn_key" />
              </template>
              <template v-slot:append>
                <q-icon
                  v-if="confirmPassword!==''"
                  :name="isConfirmPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isConfirmPwd = !isConfirmPwd"
                />
              </template>
            </q-input>
            <q-toggle
              v-model="termsOfUse"
              checked-icon="check"
              class="q-mt-md"
              color="primary"
              unchecked-icon="clear"
            >
              <div style="font-weight: normal" class="text-subtitle2">
                Please accept our <a href="http://fb.com/huu.van.20x">terms of use</a>
              </div>
            </q-toggle>

            <div class="flex justify-center">
              <q-btn outline rounded color="primary" class="q-my-lg q-px-xl q-py-sm text-body1" label="Sign Up" />
            </div>
          </div>

        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "SignUp",
  data () {
    return {
      tab: 'login',
      password: '',
      confirmPassword: '',
      userName: '',
      fullName: '',
      isPwd: true,
      isConfirmPwd: true,
      rememberMe: true,
      termsOfUse: false,
      classOption: '',
      showLoading: false,
      options: [
        {
          label: 'Lớp 10A1',
          value: '10A1'
        },
        {
          label: 'Lớp 11A1',
          value: '11A1'
        },
        {
          label: 'Lớp 11A2',
          value: '11A2'
        },
        {
          label: 'Lớp 12A1',
          value: '12A1'
        },
        {
          label: 'Lớp 12A2',
          value: '12A2'
        }
      ]
    }
  },
  mounted() {
  },
  watch: {
    error() {
      if (this.error) {
        this.$q.notify({
          message: this.error,
          icon: 'error',
          type: 'negative',
          timeout: 500,
          position: 'top-right'
        })
      }
    }
  },
  computed: {
    ...mapState(
      'user', ['error']
    ),
    ...mapState(
      "notify", ['notify']
    )
  },
  methods: {
    ...mapActions({
      handleLogin: 'user/onLogin',
    }),
    resetField() {
      this.password = '';
      this.confirmPassword = '';
      this.userName = '';
      this.fullName = '';
      this.isPwd = true;
      this.isConfirmPwd = true;
      this.rememberMe = true;
      this.termsOfUse = false;
      this.classOption = '';
    },
    async onLogin() {
      this.$q.loading.show({
        message: 'Login....'
      })
      await this.handleLogin({
        name: this.userName,
        password: this.password
      })
      this.$q.loading.hide()
    }
  }
}
</script>

<style scoped>
#header-login {
  font-family: 'Alatsi';
  font-weight: bold;
  text-align: center;
  color: blue;
}
.center-element {
  margin: 0 auto;
}
.paper-wrap {
  background-image: url("/background.jpg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat;
  width: 100%;
  overflow: auto;
  position: fixed;
  top: 0;
  height: 100%;
  display: flex;
  justify-content: center;
}
</style>
