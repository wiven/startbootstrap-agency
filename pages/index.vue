<template>
  <div>
    <CustomHeader
      leadText="EST MMXIV"
      headingText="The Web made affordable"
      buttonText="Tell me more"
      buttonLink="#services"
    />
    <Services
      title="Diensten"
      subTitle="Het hele websitegebeuren kan soms nogal chaotisch overkomen voor wie er niet in thuis is. Daarom begeleiden we onze klanten van A tot WWW bij de ontwikkeling van hun website. We adviseren en ontwikkelen, maar luisteren vooral naar de noden van onze klant. Een website is immers uw persoonlijke plaats op het web."
      :services="services"
    />
    <PortfolioGrid
      title="Portfolio"
      subTitle="Het hele websitegebeuren kan soms nogal chaotisch overkomen voor wie er niet in thuis is. Daarom begeleiden we onze klanten van A tot WWW bij de ontwikkeling van hun website. We adviseren en ontwikkelen, maar luisteren vooral naar de noden van onze klant. Een website is immers uw persoonlijke plaats op het web."
      :items="items"
    />
    <About /> <Team /> <Clients :clients="clients" />
    <Contact
      title="Contacteer mij"
      subTitle="U had graag een vrijblijvende offerte, of andere informatie? Aarzel dan niet om contact op te nemen."
      buttonText="Bericht versturen"
    />
    <!--
      <div>
        <logo />
        <h1 class="title">NUXT</h1>
        <h2 class="subtitle">Starter for CodeSandBox</h2>
        <div class="links">
          <a href="https://nuxtjs.org/" target="_blank" class="button--green"
            >Documentation <icon-link
          /></a>
          <nuxt-link to="/about" class="button--grey">About</nuxt-link>
        </div>

        <input v-model.lazy="msg" /> <span>{{ msg }}</span>
      </div>
    -->
  </div>
</template>

<script>
import axios from "axios";

import Logo from "~/components/Logo.vue";
import IconLink from "~/components/IconLink.vue";
import CustomHeader from "~/components/Header.vue";
import Services from "~/components/Services.vue";
import PortfolioGrid from "~/components/PortfolioGrid.vue";
import About from "~/components/About.vue";
import Team from "~/components/Team.vue";
import Clients from "~/components/Clients.vue";
import Contact from "~/components/Contact.vue";

export default {
  components: {
    Logo,
    IconLink,
    CustomHeader,
    Services,
    PortfolioGrid,
    About,
    Team,
    Clients,
    Contact
  },
  data() {
    return {
      services: [
        {
          name: "E-commerce",
          icon: "fa-shopping-cart",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
        },
        {
          name: "Responsive Design",
          icon: "fa-laptop",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
        },
        {
          name: "Web Security",
          icon: "fa-lock",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."
        }
      ],
      items: [
        {
          title: "Threads",
          subTitle: "test",
          imgUrl:
            "https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/01-thumbnail.jpg"
        },
        {
          title: "Threads",
          subTitle: "test",
          imgUrl:
            "https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/02-thumbnail.jpg"
        },
        {
          title: "Threads",
          subTitle: "test",
          imgUrl:
            "https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/03-thumbnail.jpg"
        },
        {
          title: "Threads",
          subTitle: "test",
          imgUrl:
            "https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/04-thumbnail.jpg"
        }
      ],
      clients: [
        {
          name: "Parket Idee",
          logo: "https://parketidee.be/wp-content/uploads/2017/12/favicon.png",
          url: "https://parketidee.be"
        },
        {
          name: "Jonas Van Laere",
          logo: "https://wiven.be/wp-content/uploads/2017/12/jvl.png",
          url: "http://jonasvanlaere.be"
        },
        {
          name: "Laadpaalshop.com",
          logo: "https://wiven.be/wp-content/uploads/2017/12/laadpaalshop.png",
          url: "https://laadpaalshop.com"
        },
        {
          name: "VOK Projects",
          logo: "https://wiven.be/wp-content/uploads/2017/12/vokprojects.png",
          url: "https://vokprojects.be"
        }
      ]
    };
  },
  mounted() {
    axios
      .get("https://query.displaypurposes.com/tag/fitness")
      .then(resp => {
        console.log(resp.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped></style>
