<template>
  <div class="row col-12">
    <div class="col-11 row q-mx-auto q-mb-md">
      <q-breadcrumbs class="col-12 q-my-md-md q-my-xs-sm">
        <q-breadcrumbs-el to="/" label="Home" />
        <q-breadcrumbs-el label="Hữu Văn" />
      </q-breadcrumbs>
      <q-separator/>
    </div>
    <div class="col-lg-8 col-md-10 col-xs-12 q-mt-sm q-pa-sm row q-mx-auto q-mb-xl ">
      <div class="col-md-4 col-sm-10 q-mx-sm-auto q-mx-md-none col-xs-12">
        <q-list bordered class="flex items-center q-py-lg q-pl-sm">
          <q-avatar size="100px" font-size="40px" color="dark"
                    class="text-weight-bold"
                    text-color="white">
            HV
          </q-avatar>
          <div class="q-ml-md">
            <div>Hi,</div>
            <div class="text-h6 text-weight-bold">Hữu Văn</div>
          </div>
        </q-list>

        <div class="q-mt-md non-selectable">
          <q-list bordered>


            <UserTabItem v-for="(item,index) in userTabList"
                     @goURL = "go"
                     :key="index" :data = "item" :userTabCurrent="userTabCurrent"/>
          </q-list>
        </div>
        <div class="q-my-md non-selectable">
          <q-list bordered>
            <q-item clickable v-ripple>
              <div class="q-ma-xs flex">
                <q-item-section avatar>
                  <q-avatar color="dark" text-color="white" icon="login" />
                </q-item-section>
                <q-item-section>Log out</q-item-section>
              </div>
            </q-item>
          </q-list>
        </div>
      </div>
      <div class="col-md-8 col-xs-12 col-sm-10 q-mx-sm-auto q-mx-md-none">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import 'quasar/dist/quasar.addon.css'
import UserTabItem from "components/UserTabItem";
export default {
  name: "UserLayout",
  components: {UserTabItem},
  data:() => ({
    userTabCurrent: '',
    userTabList: [
      {
        userTabCheck: '/user',
        icon: 'person',
        text: 'Account overview',
        active: false
      },
      {
        userTabCheck: '/user/my-orders',
        icon: 'local_shipping',
        text: 'My orders',
        active: false
      },
      {
        userTabCheck: '/user/my-details',
        icon: 'contacts',
        text: 'My details',
        active: false
      },
      {
        userTabCheck: '/user/address-book',
        icon: 'home',
        text: 'Address book',
        active: false
      },
      {
        userTabCheck: '/user/gift-and-vouchers',
        icon: 'redeem',
        text: 'Gift and Vouchers',
        active: false
      }
    ]
  }),
  created() {
    this.userTabCurrent = this.$route.path
    this.userTabList = this.userTabList.map(item => {
      if (this.userTabCurrent === item.userTabCheck) {
        item.active = true
      } else {
        item.active = false
      }
      return item
    })
  },
  methods: {
    go (url) {
      this.userTabList = this.userTabList.map(item => {
        if (url === item.userTabCheck) {
          item.active = true
        } else {
          item.active = false
        }
        return item
      })
      if (this.$route.path !== url) {
        this.$router.replace(url)
      }
    },
  }
}
</script>

<style scoped>
.active-tab {
  border-right: 5px solid black;
}
</style>
