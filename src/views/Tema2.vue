<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Extracción de los aceites esenciales 


    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left") 
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.bg1.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/Tema2/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La extracción de aceites esenciales es una de las etapas más importantes dentro del proceso productivo, ya que de ella depende directamente la calidad, el rendimiento y la conservación de los compuestos aromáticos presentes en el material vegetal. Una extracción inadecuada puede provocar la pérdida de componentes volátiles, la degradación del aceite o la obtención de un producto de baja calidad.
              br
              br
            | Comprender los métodos de extracción permite al aprendiz seleccionar el procedimiento más adecuado según la especie vegetal, la parte de la planta utilizada y el uso final del aceite esencial.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema2/gota.svg")
            h3.bg2.py-2.w-card-text.text-white Principios generales de la extracción
      p.mb-4 La extracción de aceites esenciales se basa en la liberación de los compuestos aromáticos contenidos en las estructuras secretoras de la planta. Para lograrlo, se emplean procesos físicos que permiten separar el aceite del material vegetal sin alterar significativamente su composición.
      p.mb-5 Entre los factores que influyen en la extracción se encuentran:

      .row.align-items-center.justify-content-center.mb-0(data-aos="fade-left") 
        .col-md-6.col-lg-4.mb-5
          .tarjeta-avatar
            img(src='@/assets/curso/Tema2/1.svg' alt='')
            .tarjeta.bg3
              .p-4.text-white
                h4.text-center Tipo de planta y especie botánica
              

        .col-md-6.col-lg-4.mb-5
          .tarjeta-avatar
            img(src='@/assets/curso/Tema2/2.svg' alt='')
            .tarjeta.bg3
              .p-4.text-white
                h4.text-center Parte de la planta utilizada (hojas, flores, corteza, semillas, frutos)
               

        .col-md-6.col-lg-4.mb-5
          .tarjeta-avatar
            img(src='@/assets/curso/Tema2/3.svg' alt='')
            .tarjeta.bg3
              .p-4.text-white
                h4.text-center Estado del material vegetal (fresco o seco)
               
        .col-md-6.col-lg-4.mb-5
          .tarjeta-avatar
            img(src='@/assets/curso/Tema2/4.svg' alt='')
            .tarjeta.bg3
              .p-4.text-white
                h4.text-center Tamaño de partícula
               

        .col-md-6.col-lg-4.mb-5
          .tarjeta-avatar
            img(src='@/assets/curso/Tema2/5.svg' alt='')
            .tarjeta.bg3
              .p-4.text-white
                h4.text-center Temperatura y presión del proceso

      p.mb-4 El adecuado control de estos factores es fundamental para garantizar un producto homogéneo, estable y de buena calidad, así como para evitar pérdidas de aroma o alteraciones indeseadas del aceite esencial.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 7.
            span Métodos de extracción de aceites esenciales

          .tabla-a.color-acento-botones
            table
              thead
                tr
                  th Categoría principal
                  th Método
                  th Descripción general
              tbody
                tr
                  th(rowspan='4') Métodos directos
                  td Expresión
                  td.text-left Separación mecánica del aceite mediante presión, utilizada principalmente en cáscaras de cítricos.
                tr
                  td Raspado
                  td.text-left Liberación del aceite al raspar la superficie vegetal con glándulas oleííferas.
                tr
                  td Exudación
                  td.text-left Obtención del aceite a partir de resinas o secreciones naturales de la planta.
                tr
                  td Extrusión
                  td.text-left Método mecánico que aplica presión continua al material vegetal.

                tr
                  th(rowspan='7') Métodos indirectos
                  td Destilación molecular
                  td.text-left Separación por volatilidad a baja presión para preservar compuestos sensibles.
                tr
                  td Destilación al vacío
                  td.text-left Destilación a presión reducida para evitar degradación térmica.
                tr
                  td Destilación con agua
                  td.text-left El material vegetal se hierve directamente en agua.
                tr
                  td Destilación por arrastre con vapor de agua
                  td.text-left El vapor atraviesa la planta y arrastra los compuestos aromáticos.
                tr
                  td Destilación agua-vapor
                  td.text-left Combinación de vapor externo y agua en contacto con la planta.
                tr
                  td Destilación previa maceración
                  td.text-left Maceración previa del vegetal para facilitar la extracción.
                tr
                  td Maceración en grasa
                  td.text-left Uso de grasas para absorber compuestos aromáticos (técnica tradicional).

                tr
                  th(rowspan='2') Extracción con solventes
                  td Extracción con solventes volátiles
                  td.text-left Uso de solventes orgánicos para disolver aceites esenciales.
                tr
                  td Extracción por fluidos supercríticos
                  td.text-left Empleo de CO₂ supercrítico para obtener aceites de alta pureza.

                tr
                  th(rowspan='2') Otros métodos
                  td Extracción con microondas
                  td.text-left Uso de microondas para liberar compuestos volátiles de forma rápida.
                tr
                  td Enfloración (enfleurage)
                  td.text-left Técnica tradicional para flores delicadas mediante grasas sólidas.

      p.mb-5 Según el tipo de planta, se selecciona el método de extracción de sus aceites esenciales, que puede ser por medio de procesos químicos o físicos. No obstante, los siguientes factores también son determinantes para definir dicho procedimiento: 

      SlyderF(columnas="col-lg-6 col-xl-4").mb-4
        .tarjeta.bg4.p-4
          .row.justify-content-center.mb-3
            .col-6.col-md-4
              img(src='@/assets/curso/Tema2/01.svg' alt='')
          h2.text-center.text-white Condiciones de cultivo
          p.text-center.text-white Tipo de suelo, clima, altitud, disponibilidad de agua y exposición solar que influyen en la calidad y composición del aceite esencial.

        .tarjeta.bg4.p-4
          .row.justify-content-center.mb-3
            .col-6.col-md-4
              img(src='@/assets/curso/Tema2/02.svg' alt='')
          h2.text-center.text-white Época de recolección
          p.text-center.text-white Momento óptimo de cosecha que determina el rendimiento y la concentración de metabolitos activos.

        .tarjeta.bg4.p-4
          .row.justify-content-center.mb-3
            .col-6.col-md-4
              img(src='@/assets/curso/Tema2/03.svg' alt='')
          h2.text-center.text-white Partes de la planta
          p.text-center.text-white Estructuras vegetales utilizadas para la extracción (hojas, flores, corteza, raíces, frutos, etc.).

        .tarjeta.bg4.p-4
          .row.justify-content-center.mb-3
            .col-6.col-md-4
              img(src='@/assets/curso/Tema2/04.svg' alt='')
          h2.text-center.text-white Manejo del material vegetal
          p.text-center.text-white Procesos posteriores a la cosecha como limpieza, secado, selección y transporte del material vegetal.

        .tarjeta.bg4.p-4
          .row.justify-content-center.mb-3
            .col-6.col-md-4
              img(src='@/assets/curso/Tema2/05.svg' alt='')
          h2.text-center.text-white Métodos de obtención
          p.text-center.text-white Técnicas de extracción como destilación por arrastre de vapor, expresión o extracción con solventes.

        .tarjeta.bg4.p-4
          .row.justify-content-center.mb-3
            .col-6.col-md-4
              img(src='@/assets/curso/Tema2/06.svg' alt='')
          h2.text-center.text-white Almacenamiento
          p.text-center.text-white Condiciones adecuadas para conservar el aceite esencial y evitar su degradación.

        .tarjeta.bg4.p-4
          .row.justify-content-center.mb-3
            .col-6.col-md-4
              img(src='@/assets/curso/Tema2/07.svg' alt='')
          h2.text-center.text-white Actividad biológica
          p.text-center.text-white Propiedades funcionales como actividad antimicrobiana, insecticida, antioxidante o relajante.

        .tarjeta.bg4.p-4
          .row.justify-content-center.mb-3
            .col-6.col-md-4
              img(src='@/assets/curso/Tema2/08.svg' alt='')
          h2.text-center.text-white Propiedades organolépticas
          p.text-center.text-white Características sensoriales del aceite esencial: olor, color y sabor.

        .tarjeta.bg4.p-4
          .row.justify-content-center.mb-3
            .col-6.col-md-4
              img(src='@/assets/curso/Tema2/09.svg' alt='')
          h2.text-center.text-white Aplicación
          p.text-center.text-white Uso del aceite esencial en aromaterapia, cosmética, medicina, agricultura o industria alimentaria.

        .tarjeta.bg4.p-4
          .row.justify-content-center.mb-3
            .col-6.col-md-4
              img(src='@/assets/curso/Tema2/10.svg' alt='')
          h2.text-center.text-white Cantidad
          p.text-center.text-white Rendimiento del aceite esencial obtenido a partir del material vegetal procesado.

        .tarjeta.bg4.p-4
          .row.justify-content-center.mb-3
            .col-6.col-md-4
              img(src='@/assets/curso/Tema2/11.svg' alt='')
          h2.text-center.text-white Pureza
          p.text-center.text-white Grado de autenticidad y ausencia de adulteraciones en el aceite esencial.

        .tarjeta.bg4.p-4
          .row.justify-content-center.mb-3
            .col-6.col-md-4
              img(src='@/assets/curso/Tema2/12.svg' alt='')
          h2.text-center.text-white Estabilidad
          p.text-center.text-white Capacidad del aceite esencial para mantener sus propiedades en el tiempo.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-md-8.mb-4
        img(src='@/assets/curso/Tema2/img02.png' alt='')
      .col-lg-7
        .cajon.color-acento-contenido.p-4
          p.p-3 La selección adecuada del método de extracción es un factor determinante en la calidad final de los aceites esenciales, siempre que la materia prima presente condiciones óptimas. Ninguna tecnología, por avanzada que sea, puede compensar deficiencias en la calidad del material vegetal original. Por esta razón, es fundamental realizar pruebas químicas previas a la extracción, con el fin de evitar pérdidas económicas y de tiempo derivadas de la obtención de aceites que no cumplan con los estándares exigidos por el mercado.
    p.mb-4 Es importante destacar que solo los métodos de destilación y expresión permiten obtener aceites esenciales verdaderos, caracterizados por un alto grado de pureza, lo que los hace especialmente adecuados para su uso en aromaterapia. En contraste, otros métodos de extracción producen extractos aromáticos que contienen fracciones de aceites esenciales junto con residuos de solventes, los cuales se destinan principalmente a la industria de la perfumería, la medicina y el cuidado de la piel.

    separador
    #t_2_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.1  Métodos directos

    p.mb-4 Los métodos directos son los más usados para la extracción de aceites esenciales de los cítricos, ya que estas sustancias se encuentran en la corteza de las frutas, por lo tanto, el calor de los procesos de destilación puede alterar su composición.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-md-11.col-lg-12.col-12
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema2/gota.svg")
          h3.bg2.py-2.w-card-text.text-white Métodos directos de extracción de aceites esenciales


    .tarjeta.bg2.p-4
      SlyderA(tipo="b")
        .row.justify-content-center.p-4
          .col-lg-6.mb-4.mb-md-0.col-md-12
            h4.text-white Extrusión
            p.text-white #[b Descripción:] método mecánico en el que se aplica alta presión mediante un tornillo sinfín para romper las estructuras celulares de la cáscara seca, permitiendo la liberación del aceite esencial. Es un proceso continuo que no requiere solventes químicos, pero puede generar calor que afecte la calidad si no se controla adecuadamente. 
            p.text-white #[b Materia prima:] cáscaras secas de frutos. Producto obtenido: aceite esencial. 
            p.text-white #[b Ventajas principales:] no utiliza solventes, proceso continuo y mayor rendimiento frente a métodos manuales.
          .col-lg-6.col-md-8
            figure
              img(src='@/assets/curso/Tema2/img03.png', alt='')

        .row.justify-content-center.p-4
          .col-lg-6.mb-4.mb-md-0.col-md-12
            h4.text-white Raspado
            p.text-white #[b Descripción:] proceso mecanizado diseñado para raspar la superficie de frutos enteros, especialmente cítricos, rompiendo las glándulas oleíferas superficiales y liberando el aceite esencial. En algunos casos el aceite se obtiene directamente y en otros se generan raspaduras aromáticas que requieren prensado posterior.
            p.text-white #[b Materia prima:] frutos enteros. Producto obtenido: aceite esencial o material aromático.
            p.text-white #[b Ventajas principales:]  reduce la mano de obra, mejora la eficiencia del proceso y es aplicable a gran escala.
          .col-lg-6.col-md-8
            figure
              img(src='@/assets/curso/Tema2/img04.png', alt='')

        .row.justify-content-center.p-4
          .col-lg-6.mb-4.mb-md-0.col-md-12
            h4.text-white Exudación
            p.text-white #[b Descripción:] técnica tradicional en la que la planta libera resinas, gomas o bálsamos de forma natural o inducida mediante incisiones en la planta. No se obtiene el aceite esencial directamente, pero estas sustancias sirven como materia prima para procesos posteriores de extracción o destilación.
            p.text-white #[b Materia prima:] troncos, tallos o cortezas. Producto obtenido: gomas, resinas y bálsamos.
            p.text-white #[b Ventajas principales:] método natural, bajo costo tecnológico y alto valor comercial de las resinas.
          .col-lg-6.col-md-8
            figure
              img(src='@/assets/curso/Tema2/img05.png', alt='')

        .row.justify-content-center.p-4
          .col-lg-6.mb-4.mb-md-0.col-md-12
            h4.text-white Expresión (cítricos)
            p.text-white #[b Descripción:] método específico para cítricos que consiste en la compresión del epicarpio, estructura donde se localizan las glándulas oleíferas. Al romperse, se libera una emulsión de aceite y agua celular, la cual se separa mediante decantación, centrifugación o filtración. Se emplea agua para evitar la absorción del aceite por la cáscara.
            p.text-white #[b Materia prima:] cáscaras de naranja, limón, mandarina y lima. Producto obtenido: aceite esencial cítrico.
            p.text-white #[b Ventajas principales:] alta pureza, no utiliza calor ni solventes y es ideal para aromaterapia.
          .col-lg-6.col-md-8
            figure
              img(src='@/assets/curso/Tema2/img06.png', alt='')

    separador
    #t_2_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
      h2 2.2  Métodos indirectos 
    p.mb-4 Los métodos indirectos se emplean debido a la composición heterogénea de los aceites esenciales, los cuales están formados por una mezcla compleja de compuestos altamente volátiles. Estos métodos permiten separar dichas sustancias sin alterar significativamente sus propiedades químicas y aromáticas.

    .fondot2.p-3.mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7.col-md-10
          .row.justify-content-start.mb-4(data-aos="zoom-in-left")
            .col-md-10.col-lg-12.col-12
              .d-flex.align-items-center.mt-4
                img.w-card-icon(src="@/assets/curso/Tema2/gota2.svg")
                h3.bg2.py-2.w-card-text.text-white Destilación 
          p.text-white El término destilación hace referencia al proceso de aislamiento de una sustancia volátil mediante la aplicación de calor, separándola de otros compuestos más estables. Posteriormente, el vapor generado se enfría y se condensa, permitiendo su recuperación en estado líquido.
          p.text-white Este método de extracción consiste en el uso de un recipiente cilíndrico de capacidad variable, en cuya parte superior se dispone una bandeja o rejilla donde se coloca el material vegetal a destilar. En la parte inferior del equipo se localiza un sistema encargado de inyectar vapor de agua proveniente de una caldera, el cual atraviesa el material vegetal, arrastra los compuestos aromáticos y los conduce hacia el sistema de condensación para su posterior separación.
        .col-lg-4.col-md-7
          img(src='@/assets/curso/Tema2/img07.png', alt='')

    p.mb-4 Para determinar el tamaño del equipo, se deben tomar en cuenta los siguientes elementos: 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 1.
          span Factores para determinar el tamaño del destilador
      .col-lg-7.col-md-10 
        img(src='@/assets/curso/Tema2/fig1.svg', alt='Incluye la cantidad de material vegetal disponible para la destilación, las fuentes de energía y su disponibilidad, la disponibilidad de agua y mano de obra, y las condiciones de transporte e instalaciones para el almacenamiento de las materias primas y del aceite obtenido.')


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 8.
          span Métodos de destilación de aceites esenciales
      .tabla-a.color-acento-botones
        table
          thead
            tr
              th Método de destilación
              th Concepto principal
              th Ventajas
              th Desventajas
          tbody
            tr
              th Destilación por arrastre de vapor (vapor generado por caldera)
              td.text-left Método en el que el vapor de agua se produce en una caldera externa y se conduce hacia el material vegetal, provocando la ruptura de las glándulas oleíferas y el arrastre de los compuestos volátiles hacia el condensador.
              td.text-left Permite controlar la temperatura, evita el contacto directo del material con el agua, conserva mejor la calidad del aceite y es adecuado para producción a gran escala.
              td.text-left Requiere mayor inversión en equipos, consumo energético elevado y personal capacitado para su operación.
            tr
              th Destilación con agua (hidrodestilación)
              td.text-left Técnica en la que el material vegetal se sumerge directamente en agua que se calienta hasta ebullición, liberando los aceites esenciales junto con el vapor de agua.
              td.text-left Método sencillo y de bajo costo, no requiere equipos complejos y es adecuado para pequeñas producciones o uso artesanal.
              td.text-left Riesgo de degradación térmica, hidrólisis de compuestos sensibles y menor control del proceso, lo que puede afectar la calidad del aceite.
            tr
              th Destilación agua-vapor (vapor generado en el fondo del extractor)
              td.text-left El agua se calienta en la base del extractor y el vapor atraviesa el material vegetal dispuesto sobre una rejilla, arrastrando los aceites esenciales.
              td.text-left Mejor control que la hidrodestilación, menor contacto directo con el agua, buena eficiencia y adecuada para diferentes tipos de plantas.
              td.text-left Menor precisión térmica que el arrastre por caldera, posibilidad de sobrecalentamiento si no se regula correctamente.
            tr
              th Destilación al vacío
              td.text-left Método que reduce la presión dentro del sistema, permitiendo la evaporación de los compuestos volátiles a temperaturas más bajas.
              td.text-left Ideal para aceites termolábiles, reduce la degradación térmica y conserva mejor el aroma y las propiedades terapéuticas.
              td.text-left Equipos costosos, mayor complejidad técnica y limitado uso a nivel industrial convencional.
            tr
              th Destilación molecular
              td.text-left Técnica avanzada que opera a presiones extremadamente bajas, separando compuestos según su peso molecular y volatilidad, con tiempos de residencia muy cortos.
              td.text-left Alta pureza del producto, mínima degradación térmica y separación selectiva de compuestos específicos.
              td.text-left Muy alto costo, tecnología especializada y uso limitado principalmente a la industria farmacéutica y cosmética avanzada.
            tr
              th Destilación previa maceración
              td.text-left El material vegetal se somete previamente a maceración (en agua u otro medio) para facilitar la ruptura celular antes del proceso de destilación.
              td.text-left Aumenta el rendimiento del aceite, mejora la liberación de compuestos aromáticos y reduce el tiempo de destilación.
              td.text-left Riesgo de fermentación si no se controla, posible alteración del perfil químico y mayor tiempo total de proceso.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 9.
          span Métodos de extracción con solventes
      .tabla-a.color-acento-botones
        table
          thead
            tr
              th Método de extracción
              th Concepto principal
              th Ventajas
              th Desventajas
          tbody
            tr
              th Maceración en grasa (enfleurage)
              td.text-left Método tradicional en el que el material vegetal se coloca en contacto con grasas (animales o vegetales) que absorben los compuestos aromáticos. Posteriormente, la grasa aromatizada puede ser tratada con alcohol para recuperar la esencia.
              td.text-left Ideal para flores delicadas, no utiliza calor, conserva fielmente el aroma natural y es un método suave para compuestos termolábiles.
              td.text-left Proceso lento, bajo rendimiento, alto costo operativo y poco viable a gran escala industrial.
            tr
              th Extracción con microondas
              td.text-left Técnica que emplea radiación de microondas para calentar el agua intracelular del material vegetal, provocando la ruptura de las células y facilitando la liberación de los compuestos aromáticos, generalmente en combinación con solventes o vapor.
              td.text-left Reducción del tiempo de extracción, menor consumo energético, mayor rendimiento y mejor conservación de compuestos volátiles.
              td.text-left Equipos especializados, riesgo de sobrecalentamiento si no se controla adecuadamente y mayor inversión inicial.
            tr
              th Extracción con solventes volátiles
              td.text-left Método en el que se utilizan solventes orgánicos volátiles (como hexano o etanol) para disolver los compuestos aromáticos del material vegetal. Posteriormente, el solvente se evapora, obteniéndose un extracto concentrado.
              td.text-left Alta eficiencia, adecuado para materiales con bajo contenido de aceite esencial y permite obtener absolutos de alta concentración aromática.
              td.text-left Posibles residuos de solvente, pérdida de compuestos muy volátiles y uso restringido en productos terapéuticos si no se purifica adecuadamente.
            tr
              th Extracción por fluidos supercríticos (EFS)
              td.text-left Técnica avanzada que emplea dióxido de carbono en estado supercrítico como solvente, permitiendo extraer compuestos aromáticos sin altas temperaturas ni solventes orgánicos residuales.
              td.text-left Alta pureza del extracto, excelente conservación del perfil químico, proceso limpio y selectivo, sin residuos tóxicos.
              td.text-left Equipos de alto costo, operación compleja y limitada principalmente a la industria farmacéutica, alimentaria y cosmética avanzada.



























</template>

<script>
export default {
  name: 'Tema2',
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
