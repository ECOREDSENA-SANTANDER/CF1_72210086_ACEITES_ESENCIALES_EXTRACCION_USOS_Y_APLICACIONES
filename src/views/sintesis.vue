<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Los aceites esenciales son mezclas complejas de compuestos volátiles de origen vegetal, cuya calidad y composición dependen tanto de la materia prima como del método de extracción empleado. A lo largo del proceso de obtención se utilizan métodos directos, como la expresión, extrusión, raspado y exudación, así como métodos indirectos, entre los que destacan la destilación en sus diferentes modalidades y la extracción con solventes, cada uno seleccionado según las características físico-químicas del material vegetal y la aplicación final del producto. La evaluación de la calidad de los aceites esenciales se fundamenta en el análisis de sus propiedades organolépticas, físicas, químicas y cromatográficas, apoyadas por técnicas analíticas avanzadas como la cromatografía de gases, la espectrometría de masas y la resonancia magnética nuclear. Finalmente, la producción y comercialización de los aceites esenciales se rige por normativas específicas que varían según su uso medicinal, cosmético, alimenticio, aromático o terapéutico, garantizando su seguridad, autenticidad y eficacia, lo que resalta su importancia en diversas industrias y en el bienestar humano.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Presenta los fundamentos, la obtención y el control de calidad de los aceites esenciales. Se organiza en tres ejes: definición, características, propiedades y clasificación; métodos de extracción directos e indirectos; y análisis físico-químico, control de calidad y normativa sanitaria que garantizan su pureza y seguridad.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
