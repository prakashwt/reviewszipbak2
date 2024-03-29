<template>
  <div
    ref="container"
    class="container relative bg-gray-900 mx-auto text-gray-100"
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
        <h1 class="text-3xl md:text-5xl font-extrabold mt-24 md:leading-tight">
          <!--
            md:mt-48
            -->
          Self-Hosting Guide
        </h1>
        <h2 class="mt-8 text-lg md:text-xl w-full md:w-3/4 text-gray-200">
          Please follow the instructions as per your category to get your Review
          Zip online.
        </h2>

        <p class="mt-16 border px-4 py-3 rounded border-gray-700">
          Your Review Zip files are in the folder you just extracted from your
          downloaded ZIP file. This folder will be referred to as the "<span
            class="font-extrabold"
            >customerSupportEmailcard folder</span
          >" throughout this guide.
        </p>

        <div class="mt-16">
          <h3 class="font-extrabold text-2xl">
            I have a personal WordPress website
          </h3>
          <ul class="px-6 mt-6 list-outside list-disc">
            <li>
              Login to your cPanel account. Locate and open the file manager.
            </li>
            <li>
              In the file manager, locate the folder named "public_html" and
              create a new folder called "vcard" ( or whatever you like ) inside
              it.
            </li>
            <li>
              Upload your customerSupportEmailcard folder into the new folder
              that you just created in the previous step.
            </li>
            <li>
              Now your business card should be online at the address
              https://your-domain.com/vcard/customerSupportEmailcard-folder-name/
              and is ready to be shared.
            </li>
          </ul>
        </div>
        <div class="mt-16">
          <h3 class="font-extrabold text-2xl">
            My website is maintained by a developer
          </h3>
          <ul class="px-6 mt-6 list-outside list-disc">
            <li>
              Contact your developer to host the business card for you. Just
              send them the downloaded ZIP file.
            </li>
          </ul>
        </div>
        <div class="mt-16">
          <h3 class="font-extrabold text-2xl">
            We are a company. Our website is maintained by the IT team
          </h3>
          <ul class="px-6 mt-6 list-outside list-disc">
            <li>
              Just share the details with your IT team, let them create digital
              business cards for you using
              <a
                href="https://reviewszip.com"
                target="_blank"
                class="
                  underline
                  font-extrabold
                  text-green-500
                  hover:text-green-600
                  focus:text-green-600
                  transition-colors
                  duration-200
                "
                >Reviews Zip</a
              >.
            </li>
            <li>
              If you have generated a business card for yourself, share it with
              your IT team. Just send them the downloaded ZIP files and share
              the link to this
              <a
                class="
                  underline
                  font-extrabold
                  text-green-500
                  hover:text-green-600
                  focus:text-green-600
                  transition-colors
                  duration-200
                "
                href="/hosting-guide"
                >Self-Hosting Guide</a
              >.
            </li>
          </ul>
        </div>
        <div class="mt-16">
          <h3 class="font-extrabold text-2xl">
            I'm the developer / administrator of a website
          </h3>
          <ul class="px-6 mt-6 list-outside list-disc">
            <li>
              Create a folder called "vcard" ( or whatever you like ) in the
              project's static folder.
            </li>
            <li>
              Copy the customerSupportEmailcard folder inside the "vcard"
              folder.
            </li>
            <li>Commit changes and deploy.</li>
            <li>
              Now the business card should be online at the address
              https://your-domain/vcard/customerSupportEmailcard-folder/ and is
              ready to be shared.
            </li>
          </ul>
        </div>
        <div class="mt-16">
          <p class="mt-4">
            If you have doubt setting up your Review Zip on any of these
            platforms, You can always
            <a
              class="
                underline
                text-green-500
                font-extrabold
                hover:text-green-600
                focus:text-green-600
                transition-colors
                duration-200
              "
              href="/customer-support"
              rel="noopener noreferrer"
              >Contact Support</a
            >
            and ask it.
          </p>
        </div>
        <div class="mt-16">
          <h3 class="font-extrabold text-2xl">
            How do I update my business card details?
          </h3>
          <p class="mt-6">
            Reviews Zip does not store any data online for you to retrieve it
            for editing. So, every card has to be manually created from scratch.
          </p>
          <ul class="px-6 mt-6 list-outside list-disc">
            <li>
              Visit
              <NuxtLink
                to="/"
                class="
                  underline
                  font-extrabold
                  text-green-500
                  hover:text-green-600
                  focus:text-green-600
                  transition-colors
                  duration-200
                "
                >Reviews Zip</NuxtLink
              >
              and generate a new Review Zip.
            </li>
            <li>
              Extract the downloaded ZIP file and copy your
              customerSupportEmailcard folder containing your updated files.
            </li>
            <li>
              Follow the exact same steps as per your category listed above to
              update your Review Zip.
            </li>
          </ul>
        </div>
        <div class="mt-16">
          <h3 class="font-extrabold text-2xl">
            How do I add another business card to my website?
          </h3>
          <ul class="px-6 mt-6 list-outside list-disc">
            <li>
              Visit
              <NuxtLink
                to="/"
                class="
                  underline
                  font-extrabold
                  text-green-500
                  hover:text-green-600
                  focus:text-green-600
                  transition-colors
                  duration-200
                "
                >Reviews Zip</NuxtLink
              >
              and generate a Review Zip.
            </li>
            <li>
              Extract the downloaded ZIP file and copy the
              customerSupportEmailcard folder.
            </li>
            <li>
              Follow the exact same steps as per your category listed above to
              add the Review Zip.
            </li>
            <li>
              Place the copied folder inside the same folder where you already
              have your customerSupportEmailcard folders.
            </li>
          </ul>
        </div>

        <div class="mt-16">
          <h3 class="font-extrabold text-2xl">I don't have a website</h3>
          <ul class="px-6 mt-6 list-outside list-disc">
            <li>
              You can host your Review Zip on our premium and secure short URL ,
              vCard.fyi, for less than $10/year
            </li>
            <li>
              Your link will be branded to YOU! ie: https://vcard.fyi/yourname
            </li>
            <li>
              Hosting includes unlimited changs to your business card. To update
              and make changes, simply generate a new zip folder at
              <a
                class="
                  underline
                  font-extrabold
                  text-green-500
                  hover:text-green-600
                  focus:text-green-600
                  transition-colors
                  duration-200
                "
                href="/"
                rel="noopener noreferrer"
                >Reviews Zip</a
              >, and send your file to
              <NuxtLink
                class="
                  underline
                  font-extrabold
                  text-green-500
                  hover:text-green-600
                  focus:text-green-600
                  transition-colors
                  duration-200
                "
                to="/customer-support"
                rel="noopener noreferrer"
                >Customer Support</NuxtLink
              >
            </li>
            <li>
              Branded links are offered on first come, first served basics. To
              learn more Click on the link

              <NuxtLink
                to="/customer-support"
                class="
                  underline
                  font-extrabold
                  text-green-500
                  hover:text-green-600
                  focus:text-green-600
                  transition-colors
                  duration-200
                "
                >Customer Support</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from '@/components/Footer'

export default {
  components: {
    Footer
  },
  head: {
    titleTemplate: 'Hosting Guide - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Find instructions for how you can host your reviews zip folder on your domain.'
      }
    ]
  }
}
</script>
