<template>
  <div
    class="flex flex-col min-h-screen bg-gray-900 mx-auto text-gray-100"
    style="max-width: 960px;"
  >
    <div class="px-4">
      <div class="flex items-start justify-between pt-8">
        <NuxtLink to="/">
          <div
            class="logo w-24"
            style="width: 8rem !important;     margin-top: -25px;"
            v-html="require(`~/assets/icons/logo.svg?include`)"
            title="Reviews Zip - Online Business"
          ></div
        ></NuxtLink>
        <a
          href="/hosting-upgrade"
          class="font-extrabold tracking-wide leading-none flex-shrink-0 p-3 border-2 text-white border-gray-700 rounded hover:bg-gray-700 focus:bg-gray-700 transition-colors duration-200"
          >Host with Us</a
        >
      </div>

      <div id="guide" class="max-w-screen-sm">
        <h1 class="text-3xl md:text-5xl font-extrabold mt-24 md:leading-tight">
          Contact Customer Support
        </h1>
      </div>

      <iframe
        src="https://msgsndr.com/widget/form/H9frZQarNCKetmp2eYZb"
        style="border: none; width: 100%;"
        scrolling="no"
        id="H9frZQarNCKetmp2eYZb"
      ></iframe>
      <script src="https://msgsndr.com/js/form_embed.js"></script>
      
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from '@/components/Footer'
import Help from '@/components/Help'

export default {
  components: {
    Footer,
    Help,
  },
  head: {
    titleTemplate: 'Customer Support  - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Do you need customer support for our review link generator?  Click here for customer support.',
      },
    ],
  },
}
</script>

<style>
#guide {
  margin-left: 20px !important;
}
</style>
