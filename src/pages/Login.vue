<template>
  <div style="font-family: 'Actor'" class="q-pa-md row paper-wrap">
    <div class="col-lg-4 col-sm-8 ">
      <div @click="go('/')" class="cursor-pointer col-12 flex q-mb-md justify-center">
        <q-img src="logo.png" alt=""  style="width: 150px"/>
      </div>
      <q-card class="col-10 q-pa-md q-mx-auto">
        <q-tabs
          v-model="tab"
          shrink stretch
          align="justify"
        >
          <q-tab @click="resetField" style="font-family: 'Actor'" name="login" label="ALREADY REGISTERED?" />
          <q-tab @click="resetField" style="font-family: 'Actor'" name="signup" label="YOU'RE NEW?" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated>

          <q-tab-panel class="col-12 row"  style="min-height: 50vh" name="login">
            <div class="text-h6 col-12 text-center" style="font-weight: bold; ">LOGIN WITH EMAIL</div>

            <div class="text-h6 col-md-8 q-mx-auto">

              <q-input outlined class="q-pt-lg" color="dark" v-model="userName" label="Email address">
                <template v-slot:prepend>
                  <q-icon name="account_circle" />
                </template>
              </q-input>
              <q-input outlined class="q-pt-lg" color="dark" label="Password" v-model="password"
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

              <div class="flex items-center q-mt-md justify-between">
                <q-toggle
                v-model="rememberMe"
                checked-icon="check"
                color="primary"
                unchecked-icon="clear"
                >
                  <div style="font-weight: normal" class="text-subtitle2">
                    Remember me?
                  </div>
                </q-toggle>
                <div class="text-subtitle2 cursor-pointer" @click="go('/forgot-password')">
                  Forgot password?
                </div>
              </div>

              <div class="flex justify-center">
                <q-btn @click="onLogin" outline color="primary" class="q-my-sm q-px-xl q-py-xs text-body1" label="Login" />
              </div>
            </div>
            <q-separator class="q-my-sm"/>
            <div class="col-12">
              <div class="text-h6 col-12 text-center" style="font-weight: bold; ">OR LOGIN WITH...</div>
              <div class="col-12 flex justify-center q-mt-sm">
                <div class="other-auth q-ml-xs q-mr-xs q-pa-sm flex items-center text-subtitle1">
                  <q-img class="q-mr-md q-ml-sm" src="https://my.asos.com/Content/images/logo-googleg-48-dp.svg" width="15px"/>
                   Google
                </div>
                <div class="other-auth q-ml-xs q-ml-xs q-pa-sm flex items-center text-subtitle1">
                  <q-img class="q-mr-md q-ml-sm" src="https://my.asos.com/Content/images/flogo-rgb-hex-512.svg" width="15px"/>
                   Facebook
                </div>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel class="col-12 row" style="min-height: 50vh" name="signup">
            <div class="text-h6 col-12 text-center" style="font-weight: bold; ">SIGN UP USING YOUR EMAIL ADDRESS</div>

            <div class="text-h6 col-md-8 q-mx-auto">

              <q-input outlined class="q-pt-lg" color="primary" v-model="userName" label="Email address">
                <template v-slot:prepend>
                  <q-icon name="account_circle" />
                </template>
              </q-input>
              <q-input outlined class="q-pt-lg" color="primary" v-model="firstName" label="First name">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-input outlined class="q-pt-lg" color="primary" v-model="lastName" label="Last name">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
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
                <q-btn outline color="primary" class="q-my-sm q-px-xl q-py-xs text-body1" label="Sign Up" />
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
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
      firstName: '',
      lastName: '',
      isPwd: true,
      isConfirmPwd: true,
      rememberMe: true,
      termsOfUse: false,
      showLoading: false,
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
    go (url) {
      if (this.$route.path !== url) {
        this.$router.replace(url)
      }
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
.other-auth {
  border: 2px solid lightgrey;
  cursor: pointer;
}
.other-auth:hover {
  background-color: #F0F0F0;
}
.paper-wrap {
  background-color: #EEEEEE;
  width: 100%;
  overflow: auto;
  position: fixed;
  top: 0;
  height: 100%;
  display: flex;
  justify-content: center;
}
</style>
