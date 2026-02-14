<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Análisis y control de calidad

    p.mb-4 Las normas de calidad de los aceites esenciales buscan mantener constantes las  siguientes características de cada esencia:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left") 
      .col-lg-8.col-md-9
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 2.
          span Características de los aceites esenciales que determinan su calidad
        img(src='@/assets/curso/Tema3/fig2.svg', alt='Los aceites esenciales se evalúan por sus propiedades organolépticas (aroma y color), físicas (densidad y refracción), químicas (composición y estabilidad) y cromatográficas y espectroscópicas, que confirman su pureza y calidad.')
    p.mb-4 A continuación, se detallan las principales propiedades que se evalúan:  
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left") 
      .col-lg-8.col-md-9
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 3.
          span Propiedades que determinan la calidad de un aceite esencial
        img(src='@/assets/curso/Tema3/fig3.svg', alt='Las propiedades organolépticas, físicas y químicas permiten evaluar la calidad de un aceite esencial, ya que reflejan su aroma, apariencia, composición, pureza y estabilidad, facilitando la identificación de adulteraciones y garantizando su adecuado uso.')


    p.mb-4 Actualmente, el análisis de la calidad y composición de los aceites esenciales se realiza mediante tecnologías analíticas avanzadas. Entre los métodos más utilizados se encuentran:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex
            .lista-ol--cuadro__vineta
              span •
            p.mb-0 #[b Cromatografía de Gases (CG):] permite separar y analizar los componentes volátiles de los aceites esenciales, siendo una técnica fundamental para evaluar su composición y calidad.
          li.d-flex
            .lista-ol--cuadro__vineta
              span •
            p.mb-0 #[b Cromatografía de Gases acoplada a Espectrometría de Masas (CG-EM):] combina la separación de compuestos con su identificación cualitativa y cuantitativa, constituyéndose como el método más completo y preciso para el estudio de aceites esenciales.    
          li.d-flex
            .lista-ol--cuadro__vineta
              span •
            p.mb-0 #[b Resonancia Magnética Nuclear (RMN):] proporciona información estructural detallada de los compuestos, basada en su comportamiento dentro de un campo magnético, lo que facilita la elucidación de su composición química.
          li.d-flex
            .lista-ol--cuadro__vineta
              span •
            p.mb-0 #[b Espectroscopía Infrarroja (IR):] permite identificar los principales grupos funcionales presentes en la mezcla mediante la interacción de la radiación infrarroja con la materia, aunque presenta menor resolución para compuestos químicamente similares.
          li.d-flex
            .lista-ol--cuadro__vineta
              span •
            p.mb-0 #[b Bibliotecas de espectros:] herramientas digitales actualizadas que facilitan la identificación de los componentes de los aceites esenciales mediante la comparación automática de espectros.
      .col-lg-4.col-md-6.col-9
        img(src='@/assets/curso/Tema3/img01.png', alt='')

      separador
      #t_3_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 3.1  Normativa que rige los aceites esenciales

      p.mb-4 La regulación de los aceites esenciales depende de la legislación vigente en cada país, la cual establece los criterios de calidad, seguridad y comercialización aplicables a los productos que se producen o distribuyen en su territorio. Aunque estas normativas presentan similitudes a nivel general, existen diferencias significativas relacionadas con el uso final del aceite esencial, ya sea cosmético, farmacéutico, alimentario o aromaterapéutico.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 10.
          span Normativa aplicable a los aceites esenciales
      .tabla-a.color-acento-botones
        table
          thead
            tr
              th Uso del aceite esencial
              th Definición
              th Normativa y regulación principal
          tbody
            tr
              th Aceites esenciales de uso medicinal
              td.text-left Son aceites esenciales destinados a la prevención, alivio o tratamiento de afecciones de salud, utilizados como principios activos o coadyuvantes terapéuticos. Deben presentar una composición química constante, pureza elevada y eficacia comprobada, ya que su uso implica contacto directo con el organismo.
              td.text-left Farmacopeas nacionales e internacionales (USP, Farmacopea Europea), autoridades sanitarias como INVIMA, EMA y FDA.
            tr
              th Aceites esenciales de uso cosmético y alimenticio
              td.text-left Corresponden a aceites esenciales empleados como ingredientes funcionales o aromáticos en productos cosméticos y alimentos. Su función principal es aportar fragancia, sabor o propiedades sensoriales, garantizando siempre la inocuidad para el consumidor.
              td.text-left Normas ISO, Codex Alimentarius, reglamentos cosméticos y sanitarios nacionales e internacionales.
            tr
              th Aceites esenciales usados como sabores y fragancias
              td.text-left Son aceites esenciales utilizados para modificar o potenciar características sensoriales, como el aroma y el sabor, en alimentos, bebidas, perfumes y productos de higiene. Su uso se enfoca en la calidad aromática y aceptación sensorial, más que en efectos terapéuticos.
              td.text-left IFRA, FEMA, normas ISO y regulaciones alimentarias y cosméticas vigentes.
            tr
              th Esencias usadas en aromaterapia
              td.text-left Son aceites esenciales empleados con fines de bienestar físico y emocional, mediante inhalación, aplicación tópica o difusión ambiental. Aunque no se consideran medicamentos, requieren alta pureza, autenticidad y trazabilidad, ya que actúan a través del sistema olfativo.
              td.text-left Normas ISO, guías de buenas prácticas y regulaciones sanitarias generales.






</template>

<script>
export default {
  name: 'Tema3',
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
