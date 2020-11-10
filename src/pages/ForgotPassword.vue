<template>
  <div style="font-family: 'Actor'" class="q-pa-md row paper-wrap">
    <div class="col-lg-4 col-sm-8 ">
      <div @click="go('/')" class="cursor-pointer col-12 flex q-mb-md justify-center">
        <q-img src="logo.png" alt=""  style="width: 150px"/>
      </div>
      <q-card class="col-10 q-pa-md q-mx-auto">

            <div class="text-h6 col-12 text-center" style="font-weight: bold; ">ENTER YOUR EMAIL</div>

            <div class="text-h6 col-md-8 q-mx-auto">

              <q-input outlined class="q-pt-lg" color="dark" v-model="email" label="Email address">
                <template v-slot:prepend>
                  <q-icon name="account_circle" />
                </template>
              </q-input>

              <div class="flex justify-center q-mt-md">
                <q-btn @click="onLogin" outline color="primary" class="q-my-sm q-px-xl q-py-xs text-body1" label="Get new password" />
              </div>
            </div>
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
      email: ''
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
