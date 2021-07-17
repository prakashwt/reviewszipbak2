<template>
  <div>
    <div
      class="h-30 bg-gray-900 mx-auto text-gray-100"
      style="max-width: 960px"
    >
      <div class="px-4">
        <div class="flex items-start justify-between pt-8">
          <NuxtLink to="/">
            <div
              class="logo w-24"
              style="width: 8rem !important;     margin-top: -25px;"
              v-html="require(`~/assets/icons/logo.svg?include`)"
              title="Reviews Zip - Another Software Solution By Get BAER"
            ></div
          ></NuxtLink>
          <a
            href="/hosting-upgrade"
            class="
              font-extrabold
              tracking-wide
              leading-none
              flex-shrink-0
              p-3
              border-2
              text-white
              border-gray-700
              rounded
              hover:bg-gray-700
              focus:bg-gray-700
              transition-colors
              duration-200
            "
            >Host with Us</a
          >
        </div>
        <div class="max-w-screen-sm">
          <h1
            class="text-3xl md:text-5xl font-extrabold mt-24 md:leading-tight"
          >
            Training Videos
          </h1>
          <!--
            md:mt-48
            -->

          <div class="mt-16">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/tac55PdUmf8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <!-- </div> -->
        </div>
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>
<script>
import Footer from '@/components/Footer'

export default {
  components: {
    Footer
  },
  head: {
    titleTemplate: 'Training - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'View video tutorials on how to get the most from our review link generator.'
      }
    ]
  }
}
</script>
