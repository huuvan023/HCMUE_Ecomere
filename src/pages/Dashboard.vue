<template>
  <div class="row q-mt-sm col-12">
    <div class="col-11 q-mx-auto q-mb-xl">
      <div class="banner items-center flex">
        <div class="q-ml-xl">
          <vue-typed-js class="text-h4 text-negative" :strings="['Discount up to 30% !!!']">
            <span class="typing"></span>
          </vue-typed-js>
          <vue-typed-js  class="text-h1 text-weight-bold" :strings="['Rosebud Collection']" :startDelay="1000">
            <div class="typing"></div>
          </vue-typed-js>
          <vue-typed-js @onComplete="showShopButton()" class="text-h6 q-mt-md" :strings="['Best Cloth Collection By 2020']" :startDelay="2500">
            <div class="typing"></div>
          </vue-typed-js>
          <q-btn class="q-mt-md text-weight-bold shadow-4 text-subtitle1" label="Show now" style="opacity: 0" v-if="!showShopBtn"/>
          <transition name="slide-fade">
            <q-btn style="font-family: Actor" class="q-mt-md text-weight-bold shadow-4 text-subtitle1" label="Show now" v-if="showShopBtn"/>
          </transition>
        </div>
      </div>
    </div>
    <div class="col-11 q-mx-auto q-my-xl">
        <div class="row">
          <div class="col-12 text-h4 text-center q-mb-md text-weight-bold">
            Shop by Categories
          </div>
          <div class="col-12 row">
            <div class="col-lg-4 col-md-6 col-xs-12 q-pa-sm"
                 data-aos="fade-down"
                 data-aos-duration="500"
                 data-aos-easing="ease-in-out"
                 data-aos-anchor-placement="top-center">
              <div style="background-image: url('/cat1.jpg');"
                   class="justify-end items-center flex cateOpt col-12">
                  <div class="q-mr-lg" >
                    <div class="text-h5 text-weight-bold">
                      Women`s Cloth
                    </div>
                    <div class="col-12 row">
                      <q-btn class="q-ml-auto text-black no-shadow q-mt-sm"
                             rounded outline>
                        <div class="text-weight-bold">Show detail</div>
                      </q-btn>
                    </div>
                  </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-xs-12 q-pa-sm"
                 data-aos="fade-up"
                 data-aos-duration="500"
                 data-aos-easing="ease-in-out"
                 data-aos-anchor-placement="top-center">
              <div style="background-image: url('/cat2.jpg');"
                   class="justify-end items-center flex cateOpt col-12">
                <div class="q-mr-lg" >
                  <div class="text-h5 text-weight-bold">
                    Men`s Cloth
                  </div>
                  <div class="col-12 row">
                    <q-btn class="q-ml-auto text-black no-shadow q-mt-sm"
                           rounded outline>
                      <div class="text-weight-bold">Show detail</div>
                    </q-btn>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-xs-12 q-pa-sm"
                 data-aos="fade-down"
                 data-aos-duration="500"
                 data-aos-easing="ease-in-out"
                 data-aos-anchor-placement="top-center">
              <div style="background-image: url('/cat3.jpg');"
                   class="justify-end items-center flex cateOpt col-12">
                <div class="q-mr-lg" >
                  <div class="text-h5 text-weight-bold">
                    Accessories
                  </div>
                  <div class="col-12 row">
                    <q-btn class="q-ml-auto text-black no-shadow q-mt-sm"
                           rounded outline>
                      <div class="text-weight-bold">Show detail</div>
                    </q-btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

    <div style="background-color: #F0F0F0"
      class="col-12 row q-py-xl">
      <div class="q-py-xl col-8 q-mx-auto row">
        <div class="col-4"
             data-aos="fade-right"
             data-aos-duration="500"
             data-aos-easing="ease-in-out"
             data-aos-anchor-placement="top-center">
          <q-img src="/collections/product-sale1.png" class="relative-position" alt=""/>
        </div>
        <div class="col-8 q-px-md"
             data-aos="fade-left"
             data-aos-duration="500"
             data-aos-easing="ease-in-out"
             data-aos-anchor-placement="top-center">
            <div class="col-12">
              <div class="text-h6 q-mb-md">Sale off 35% !!!</div>
              <div class="text-h5" style="font-family: Actor">
                New price:
                <span style="font-family: MuseoModerno" class="text-h4 text-weight-bold text-red">
                  $29.00
                </span>
              </div>
            </div>
          <div class="col-12 q-my-xl">
            <Timer deadline="11/01/2020"/>
          </div>
          <div>
            <q-btn label="Buy now!!!"/>
          </div>
        </div>
      </div>
    </div>

    <div class="col-11 q-mx-auto q-my-xl">
      <div class="row">
        <div class="col-8 q-mx-auto items-center flex justify-between">
          <div class="col-12 text-h4 text-center q-mb-md text-weight-bold">
            Products
          </div>
          <div class="flex text-subtitle1" style="font-family: Actor">
            <div :class=" (productsTab === 'all') ? 'q-mx-md link-rt tabActive' : 'q-mx-md link-rt'"
                 @click="productsTab = 'all'">All</div>
            <q-separator vertical/>
            <div :class=" (productsTab === 'latest') ? 'q-mx-md link-rt tabActive' : 'q-mx-md link-rt'"
                 @click="productsTab = 'latest'">Latest</div>
            <q-separator vertical/>
            <div :class=" (productsTab === 'mostFavourite') ? 'q-mx-md link-rt tabActive' : 'q-mx-md link-rt'"
                 @click="productsTab = 'mostFavourite'">Most favourite</div>
          </div>
          <q-separator/>
          <q-tab-panels
            v-model="productsTab"
            animated
            swipeable
            vertical
            class="full-width col-12"
            transition-prev="jump-down"
            transition-next="jump-down"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-center"
          >
            <q-tab-panel class="col-12 row" name="all">
              <div class="row col-12">
                <CardProductDashboard :isNew="false" :favourite="true" :ratingModel="2" :linkURLImage="'/products/product4.png'"/>
                <CardProductDashboard :isNew="true" :favourite="true" :ratingModel="1" :linkURLImage="'/products/product5.png'"/>
                <CardProductDashboard :isNew="false" :favourite="false" :ratingModel="5" :linkURLImage="'/products/product6.png'"/>
                <CardProductDashboard :isNew="false" :favourite="true" :ratingModel="4" :linkURLImage="'/products/product3.png'"/>
                <CardProductDashboard :isNew="false" :favourite="true" :ratingModel="4" :linkURLImage="'/products/product2.png'"/>
                <CardProductDashboard :isNew="true" :favourite="false" :ratingModel="2" :linkURLImage="'/products/product1.png'"/>
              </div>
              <div class="col-12 flex justify-end">
                <q-btn round outline color="dark" class="q-mr-sm" icon="forward">
                  <q-tooltip>
                    Show all
                  </q-tooltip>
                </q-btn>
              </div>
            </q-tab-panel>

            <q-tab-panel class="col-12 row" name="latest">
              <div class="row col-12">
                <CardProductDashboard :isNew="true" :favourite="false" :ratingModel="5" :linkURLImage="'/products/product5.png'"/>
                <CardProductDashboard :isNew="true" :favourite="false" :ratingModel="3" :linkURLImage="'/products/product6.png'"/>
                <CardProductDashboard :isNew="false" :favourite="false" :ratingModel="2" :linkURLImage="'/products/product4.png'"/>
                <CardProductDashboard :isNew="true" :favourite="true" :ratingModel="4" :linkURLImage="'/products/product2.png'"/>
                <CardProductDashboard :isNew="false" :favourite="false" :ratingModel="1" :linkURLImage="'/products/product3.png'"/>
                <CardProductDashboard :isNew="true" :favourite="false" :ratingModel="2" :linkURLImage="'/products/product1.png'"/>
              </div>
              <div class="col-12 flex justify-end">
                <q-btn round outline color="dark" class="q-mr-sm" icon="forward">
                  <q-tooltip>
                    Show all
                  </q-tooltip>
                </q-btn>
              </div>
            </q-tab-panel>

            <q-tab-panel class="col-12 row" name="mostFavourite">
              <div class="row col-12">
                <CardProductDashboard :isNew="false" :favourite="true" :ratingModel="1" :linkURLImage="'/products/product1.png'"/>
                <CardProductDashboard :isNew="false" :favourite="true" :ratingModel="4" :linkURLImage="'/products/product2.png'"/>
                <CardProductDashboard :isNew="false" :favourite="false" :ratingModel="3" :linkURLImage="'/products/product3.png'"/>
                <CardProductDashboard :isNew="false" :favourite="true" :ratingModel="2" :linkURLImage="'/products/product4.png'"/>
                <CardProductDashboard :isNew="false" :favourite="false" :ratingModel="4" :linkURLImage="'/products/product5.png'"/>
                <CardProductDashboard :isNew="true" :favourite="true" :ratingModel="2" :linkURLImage="'/products/product6.png'"/>
              </div>
              <div class="col-12 flex justify-end">
                <q-btn round outline color="dark" class="q-mr-sm" icon="forward">
                  <q-tooltip>
                    Show all
                  </q-tooltip>
                </q-btn>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </div>
    </div>

    <div class="col-11 q-mx-auto q-my-xl">
      <div class="row">
        <div class="col-8 q-mx-auto items-center flex justify-between">
          <div class="col-12 text-h4 text-center q-mb-md text-weight-bold">
            Offer for you
          </div>
          <q-separator/>
          <div class="q-my-md col-12 row"
               data-aos="fade-up"
               data-aos-duration="500"
               data-aos-easing="ease-in-out"
               data-aos-anchor-placement="top-center">
            <CardProductDashboard :isNew="false" :favourite="true" :ratingModel="1" :linkURLImage="'/products/product1.png'"/>
            <CardProductDashboard :isNew="false" :favourite="true" :ratingModel="4" :linkURLImage="'/products/product2.png'"/>
            <CardProductDashboard :isNew="false" :favourite="false" :ratingModel="3" :linkURLImage="'/products/product3.png'"/>
            <CardProductDashboard :isNew="false" :favourite="true" :ratingModel="2" :linkURLImage="'/products/product4.png'"/>
            <CardProductDashboard :isNew="false" :favourite="false" :ratingModel="4" :linkURLImage="'/products/product5.png'"/>
            <CardProductDashboard :isNew="true" :favourite="true" :ratingModel="2" :linkURLImage="'/products/product6.png'"/>
          </div>
        </div>
      </div>
    </div>


    <div style="background-image: url('/categories/card.png');background-size: cover; height: 500px"
         class="q-mt-xl col-11 row q-mx-auto">
       <div class="relative-position col-12 row">
         <div class="row q-ml-auto relative-position flex justify-center items-center col-md-10 col-sm-12 row">
           <q-img src="/categories/card-man.png"
                  class="absolute-bottom man-img"
                  alt="man"/>
           <div class="absolute-bottom-right animate-shelf-cloth q-px-xl q-py-lg q-mb-xl q-mr-xl">
             <q-img src="/categories/card-shape.png" alt="shape" width="150px"
                    class="vert-move" />
           </div>
           <div>
             <div class="text-h3 text-weight-bold">Find your favourite product</div>
             <div class="text-h3 text-weight-bold">from Our shop</div>
             <div class="text-h6 q-my-lg">Serving customers is our pleasure</div>
             <div
               data-aos="fade-up"
               data-aos-offset="700"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-anchor-placement="top-center">
               <q-btn class="text-weight-bold shadow-6" label="Shop now" />
             </div>
           </div>
         </div>
       </div>
    </div>

    <div class="col-12 row q-py-xl">
      <div class="col-8 row q-mx-auto">
          <div class="flex col-3 justify-center">
            <div class="flex items-center">
              <q-icon color="red" name="directions_car" size="xl"/>
            </div>
            <div class="q-ml-md">
              <div class="text-subtitle1 text-weight-bold">Free Shipping</div>
              <div class="text-blue-grey-5">
                For all oder over $99
              </div>
            </div>
          </div>
        <div class="flex col-3 justify-center">
          <div class="flex items-center">
            <q-icon color="red" name="local_atm" size="xl"/>
          </div>
          <div class="q-ml-md">
            <div class="text-subtitle1 text-weight-bold">Money Back Guarantee</div>
            <div class="text-blue-grey-5">
              If good have Problems
            </div>
          </div>
        </div>
        <div class="flex col-3 justify-center">
          <div class="flex items-center">
            <q-icon color="red" name="support" size="xl"/>
          </div>
          <div class="q-ml-md">
            <div class="text-subtitle1 text-weight-bold">Online Support 24/7</div>
            <div class="text-blue-grey-5">
              100% secure payment
            </div>
          </div>
        </div>
        <div class="flex col-3 justify-center">
          <div class="flex items-center">
            <q-icon color="red" name="headset" size="xl"/>
          </div>
          <div class="q-ml-md">
            <div class="text-subtitle1 text-weight-bold">Free Shipping</div>
            <div class="text-blue-grey-5">
              For all oder over $99
            </div>
          </div>
        </div>
      </div>
    </div>
    <back-to-top>
      <q-btn round size="lg" color="blue-grey-9"
             class="shadow-6" icon="navigation">
        <q-tooltip>
          Scroll to top
        </q-tooltip>
      </q-btn>
    </back-to-top>
</div>

</template>

<script>
import CardProductDashboard from "components/CardProductDashboard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Vue from "vue";
import BackToTop from 'vue-backtotop'
import Timer from "components/Timer";

Vue.use(BackToTop)
export default {
  name: "Dashboard",
  components: {Timer, CardProductDashboard, BackToTop},
  data () {
    return {
      subscribe:"",
      showShopBtn: false,
      productsTab: 'all',
      innerTab: 'inner1',
      splitterModel: 20
    }
  },
  created() {
    AOS.init({
      duration: 400,
      once: true
    })
  },
  methods: {
    showShopButton() {
      this.showShopBtn = true
    }
  }
}
</script>

<style scoped>
.banner {
  height: 75vh;
  background-image: url('/banner_img.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-10px);
  opacity: 0;
}
.cateOpt {
  height: 30vh;
  background-repeat: no-repeat;
  background-size: cover;
}
.link-rt {
  cursor: pointer;
  user-select: none;
}
.link-rt:hover {
  color: red;
}
.tabActive {
  color: red !important;
}
.animateShape {
  width: 150px;
  position: absolute;
  bottom: 5%;
  right: 5%;
}
.man-img {
  vertical-align: middle;
  width: 180px
}
@media only screen and (max-width: 768px) {
  .man-img {
    display: none;
  }
}
@media only screen and (max-width: 590px) {
  .animate-shelf-cloth {
    display: none;
  }
}
.vert-move {
  -webkit-animation: mover 1s infinite  alternate;
  animation: mover 1s infinite  alternate;
}
@-webkit-keyframes mover {
  0% { transform: translateY(0); }
  100% { transform: translateY(-20px); }
}
@keyframes mover {
  0% { transform: translateY(0); }
  100% { transform: translateY(-20px); }
}

</style>
