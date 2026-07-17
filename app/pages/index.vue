<script lang="ts" setup>
import reviewData from '../../content/reviews.json';
import faqData from '../../content/faq.json';

useSeoMeta({
  title: 'Akupunktur i Aabybro',
  description:
    'Professionel akupunktur i Aabybro og Nordjylland. Behandling mod smerter, stress, migræne og meget mere.',
  ogTitle: 'Klinik Egernbo Akupunktur',
  ogDescription:
    'Professionel akupunktur i Aabybro.',
  ogUrl: 'https://klinikegernboakupunktur.dk/',
  ogType: 'website',

  twitterCard: 'summary_large_image',
  twitterTitle: 'Klinik Egernbo Akupunktur',
  twitterDescription: 'Professionel akupunktur i Aabybro.',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      textContent: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",

        mainEntity: faqData.faqs.map(item => ({
          "@type": "Question",

          name: item.title,

          acceptedAnswer: {
            "@type": "Answer",
            text: item.text
          }
        }))
      })
    }
  ]
})

const featuredReviews = reviewData.reviews.filter(review => review.featured === true)
const featuredFaq = faqData.faqs.filter(faq => faq.featured)


const expanded = ref<Record<number, boolean>>({})

const toggleExpanded = (index: number) => {
  expanded.value[index] = !expanded.value[index]
}

const isExpanded = (index: number) => {
  return !!expanded.value[index]
}

const visibleText = (review: any, index: number) => {
    if (isExpanded(index)) {
        return review.text
    }

    return review.text
    .slice(0, 1)
    .map((text: string) =>
        text.length > 200
        ? text.slice(0, 200) + '...'
        : text
    );
}

const canExpand = (review: any) => {
  return review.text.length > 1 ||
         review.text[0]?.length > 200
}
</script>

<template>
    <section class="hero">
        <UiHeader centered>
            <template #subtitle>
                <strong>Velkommen til Klinik Egernbo Akupunktur</strong>
            </template>
            <template #title>
                <h1>Din lokale akupunktør i Aabybro.</h1>
            </template>
        </UiHeader>

        <article class="hero--content">
            <div class="hero--content__text">
                <p>Hos mig får du professionel, individuel behandling gennem klassisk kinesisk medicin (CCM), hvor vi arbejder med kroppen som en helhed for at skabe balance og lindring.</p>
                <p>Akupunktur hjælper mod en lang række ubalancer og symptomer – fra stress og uro til muskelsmerter, spændinger og søvnproblemer. Min tilgang er holistisk, og hver behandling tilpasses dine behov, så du både oplever øjeblikkelig afspænding og langvarig forbedring.</p>
                <p>Jeg tilbyder akupunktur, moxa, auriculoterapi, TENS og cupping, alle med fokus på professionalisme, tryghed og resultater</p>
            </div>

            <NuxtImg class="hero--content__img" src="/images/fireCupping_1.webp" alt="cupping" width="1800" height="1200" preload fetchpriority="high" loading="eager" />
        </article>

        <span class="hero--btns">
            <UiButton to="/behandlinger" label="Se hvilke behandlinger jeg tilbyder" size="large" type="cta" />
            <UiButton to="/priser" label="Se priser" size="large" type="cta" />
        </span>
    </section>

    <section class="reviews">
        <UiHeader description="Hvad siger mine kunder?">
            <template #subtitle>
                <strong>Hvad siger mine kunder?</strong>
            </template>
            <template #title>
                <h2>Anbefalinger</h2>
            </template>
        </UiHeader>

        <article class="reviews--content">
            <div class="reviews--content__cards">
                <UiCard v-for="(review, index) in featuredReviews" :key="index" shadow rounded>
                    <UiHeader description="trustpilot" :icon="{name: 'star', count: review.stars, size: 20, color: '#FFD700'}">
                        <template #subtitle>
                            <strong>{{review.from}}</strong>
                        </template>
                        <template #title>
                            <h3>{{review.name}}</h3>
                        </template>
                    </UiHeader>

                    <p v-for="(text, i) in visibleText(review, index)" :key="i">
                        {{ text }}
                    </p>
                    <UiButton v-if="canExpand(review)" :label="isExpanded(index) ? 'Vis mindre' : 'Læs mere'" @click="toggleExpanded(index)"/>
                </UiCard>
            </div>

            <iframe class="reviews--content__video" src="https://www.youtube.com/embed/ZsqNsdmy29c?controls=1" title="youtube_video"></iframe>

            <UiButton to="/anbefalinger" label="Læs flere anbefalinger" type="cta" size="large"/>
        </article>
    </section>

    <section class="description">
        <UiHeader>
            <template #subtitle>
                <p>Klassisk Kinesisk Medicin</p>
            </template>
            <template #title>
                <h2>Hvad er akupunktur?</h2>
            </template>
        </UiHeader>

        <p>Akupunktur er en af verdens ældste behandlingsformer og anvendes i dag bredt som en effektiv, naturlig og holistisk tilgang til både fysiske og mentale udfordringer. I klinikken arbejder jeg ud fra et helhedsorienteret perspektiv, hvor vi ser kroppen som en samlet enhed. Når der opstår ubalance – fysisk, følelsesmæssigt eller mentalt – viser det sig ofte i form af smerter, uro, stress eller andre symptomer.</p>
        <p>Med akupunktur stimuleres kroppens energisystem via udvalgte punkter, hvilket fremmer blodcirkulation, dæmper inflammation, reducerer spændinger og hjælper nervesystemet tilbage i en mere rolig og reguleret tilstand. For mange giver behandlingen både øjeblikkelig afspænding og langsigtet forandring.</p>
        <p>I klinikken tilbydes trygge, professionelle og individuelt tilpassede behandlingsforløb, hvor vi sammen arbejder på at skabe balance i både krop og sind — uanset om du søger smertelindring, mental ro eller støtte til kroppens hormonelle og indre funktioner.</p>
    </section>

    <section class="treatments">
        <UiHeader>
            <template #subtitle>
                <strong>Hvad kan jeg behandle?</strong>
            </template>
            <template #title>
                <h2>Behandlinger</h2>
            </template>
        </UiHeader>

        <article class="treatments--content">
            <ul class="treatments--content__text">
                <li>Stress, tankemylder og overtænkning</li>
                <li>Vrede og irritabilitet</li>
                <li>Depression og lavt energiniveau</li>
                <li>Symptomer i forbindelse med overgangsalderen</li>
                <li>Uro i sind og krop</li>
                <li>Smerter i nakke, skuldre og ryg (både kroniske og akutte)</li>
                <li>Iskiassmerter og lændesmerter</li>
                <li>Ledsmerter, herunder tennisalbue</li>
                <li>Dystonier og kropslige skævheder</li>
                <li>Forstoppelse og diarré</li>
                <li>Infertilitet og hormonelle ubalancer</li>
                <li>Og meget mere…</li>
            </ul>

            <NuxtImg class="treatments--content__img" src="/images/hand.webp" alt="akupunktur i hånden" width="1800" height="1200" loading="lazy"/>
        </article>
    </section>

    <section class="clinik">
        <UiHeader>
            <template #subtitle>
                <strong>En behandling der tager udgangspunkt i dig</strong>
            </template>
            <template #title>
                <h2>Klienten i centrum</h2>
            </template>
        </UiHeader>

        <p>I klinikken sættes der god tid af til hver session. Før første behandling gennemgår vi dine symptomer, din hverdag og din generelle sundhedstilstand, så forløbet kan målrettes netop dig. Selve behandlingen foregår i rolige omgivelser, hvor du kan slappe af og give kroppen plads til at arbejde.</p>
        <p>Uanset om du kommer for at få hjælp til smerter, stress, hormonelle forandringer eller kroniske ubalancer, er målet altid det samme: at skabe varig forbedring, øget velvære og en stærkere indre balance.</p>
        <UiButton to="/kontakt" label="Kontakt mig idag" size="large" type="cta" />
    </section>

    <section class="gallery">
        <NuxtImg src="/images/ear.webp" alt="Akupunktur i øret" width="1800" height="1200" loading="lazy" />
        <NuxtImg src="/images/foot.webp" alt="Akuprasur på foden" width="1800" height="1200" loading="lazy" />
        <NuxtImg src="/images/fireCupping_1.webp" alt="Fire cupping" width="1800" height="1200" loading="lazy" />
        <NuxtImg src="/images/head.webp" alt="Aupunktur i hovedet" width="1800" height="1200" loading="lazy" />
        <NuxtImg src="/images/hand.webp" alt="Akupunktur i hånden" width="1800" height="1200" loading="lazy" />
        <NuxtImg src="/images/stomach_1.webp" alt="Akupunktur i maven" width="1800" height="1200" loading="lazy" />
        <NuxtImg src="/images/Pulse.webp" alt="Pulsdiagnose" width="1800" height="1200" loading="lazy" />
        <NuxtImg src="/images/klinic_1.webp" alt="Billede af klinikken" width="1800" height="1200" loading="lazy" />
        <NuxtImg src="/images/klinic_2.webp" alt="Billede af klinikken" width="1800" height="1200" loading="lazy" />
        <NuxtImg src="/images/klinic_3.webp" alt="Billede af klinikken" width="1800" height="1200" loading="lazy" />
    </section>

    <section class="faq">
        <UiHeader description="Ofte stillede spørgsmål">
            <template #subtitle><strong>Ofte stillede spørgsmål</strong></template>
            <template #title><h2>FAQ</h2></template>
        </UiHeader>

        <article class="faq--content">
            <UiCard shadow rounded v-for="(faq, index) in featuredFaq" :key="index">
                <UiHeader>
                    <template #title><h3>{{faq.title}}</h3></template>
                </UiHeader>
                <p v-for="text in faq.text">{{ text }}</p>
                <UiButton :label="faq.link_text" :to="faq.to" />
            </UiCard>
        </article>

        <UiButton to="/kontakt" label="Flere sprøgsmål - kontakt mig her" type="cta" size="large"/>
    </section>
</template>

<style lang="scss" scoped>
    .hero {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        &--content {
            width: 100%;
            height: fit-content;
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;

            @media (min-width: 1200px) {
                grid-template-columns: 1fr 1fr;
            }

            &__text {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            &__img {
                width: 100%;
                height: auto;
            }
        }

        &--btns {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }

    .reviews {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        &--content {
            width: 100%;
            height: fit-content;
            display: flex;
            flex-direction: column;
            gap: 1rem;

            &__cards {
                display: grid;
                grid-template-columns: 1fr;
                gap: 2rem;

                @media (min-width: 1200px) {
                    grid-template-columns: 1fr 1fr;
                }


                &--card {
                    width: 100%;
                    height: fit-content;
                    padding: 1rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;

                    box-shadow: 0px 0px 20px #00000050;
                }
            }

            &__video {
                height: 450px;
            }
        }
    }

    .description {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .treatments {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        &--content {
            width: 100%;
            height: fit-content;
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;

            @media (min-width: 1200px) {
                grid-template-columns: 1fr .8fr;
            }

            &__text {
                display: flex;
                flex-direction: column;
                list-style-position: inside;
            }

            &__img {
                width: 100%;
                height: auto;
            }
        }
    }

    .clinik {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .gallery {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;

        @media (min-width: 1200px) {
            grid-template-columns: 1fr 1fr 1fr;
        }

        img {
            width: 100%;
            height: auto;
        }
    }

    .faq {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        &--content {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;

            @media (min-width: 1200px) {
                grid-template-columns: 1fr 1fr;
            }

            &__card {
                width: 100%;
                height: fit-content;
                padding: 1rem;
                display: flex;
                flex-direction: column;
                gap: 1rem;

                box-shadow: 0px 0px 20px #00000050;
            }
        }
    }
</style>