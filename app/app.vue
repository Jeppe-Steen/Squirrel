<script setup>
  useHead({
    titleTemplate: (title) => {
      return title
        ? `${title} | Klinik Egernbo Akupunktur`
        : 'Klinik Egernbo Akupunktur'
    },
    htmlAttrs: {
      lang: 'da'
    },
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png'
      }
    ],
    script: [
      {
        type: 'application/ld+json',
        textContent: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Klinik Egernbo Akupunktur",
          "url": "https://klinikegernboakupunktur.dk",
          "telephone": "+45 22 31 39 69",
          "email": "info@klinikegernboakupunktur.dk",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sandmosevej 11",
            "addressLocality": "Aabybro",
            "postalCode": "9440",
            "addressCountry": "DK"
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "57.161144",
            longitude: "9.699206"
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Thursday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              opens: "08:00",
              closes: "17:00"
            }
          ],
        })
      }
    ]
  })
  useSeoMeta({
    applicationName: 'Klinik Egernbo Akupunktur',
    author: 'Klinik Egernbo Akupunktur',
    creator: 'Klinik Egernbo Akupunktur',
    publisher: 'Klinik Egernbo Akupunktur',
    robots: 'index, follow',
    ogSiteName: 'Klinik Egernbo Akupunktur',
    ogType: 'website',
    ogImage: 'https://klinikegernboakupunktur.dk/images/og-image.png',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterCard: 'summary_large_image',
    twitterImage: 'https://klinikegernboakupunktur.dk/images/og-image.png'
  })
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
