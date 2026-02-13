<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left") 
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.bg1.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/Tema1/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Desde la antigüedad, las plantas aromáticas han sido una fuente de conocimiento, bienestar y transformación para la humanidad. A través de los aceites esenciales, distintas culturas descubrieron formas de preservar alimentos, crear perfumes y apoyar prácticas de salud y cuidado personal.

              br
              br
            | Hoy, estos extractos naturales cobran un nuevo valor frente a la necesidad de producir y consumir de manera más consciente. Su versatilidad los ha posicionado como componentes clave en industrias que buscan innovación, sostenibilidad y bienestar.
    
    p.mb-3 En un país megadiverso como Colombia, los aceites esenciales se proyectan como una alternativa estratégica para fortalecer el desarrollo rural, generar valor agregado y aprovechar responsablemente la riqueza vegetal, impulsando economías locales y prácticas productivas sostenibles.

    .row.justify-content-center.align-items-center(data-aos="fade-left")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
