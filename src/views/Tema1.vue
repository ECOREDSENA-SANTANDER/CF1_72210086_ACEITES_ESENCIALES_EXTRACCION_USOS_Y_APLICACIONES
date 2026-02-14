<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Aceites esenciales
        
      .row.justify-content-center(data-aos="fade-down").bg5.mb-4
        .col-lg-5.pe-lg-0.h-100.izq.d-none.d-lg-block
          img(src="@/assets/curso/Tema1/img02.png")
        .col-lg-7.ps-lg-0
          .bg5.p-4.p-lg-5.h-100
            .row.mb-2
              .col-lg-2.col-3.col-md-2
                img(src="@/assets/curso/Tema1/img01.svg")
            p.text-white Aunque algunos autores establecen una diferenciación entre los términos aceite esencial y esencia, en la actualidad existe una tendencia generalizada a emplearlos como sinónimos, utilizándolos de manera indistinta en la literatura científica y técnica (Montoya, 2010).
            p.text-white Bandoni (2000) define los aceites esenciales como una parte del metabolismo de los vegetales, compuesta generalmente por terpenos, los cuales pueden encontrarse asociados o no a otros componentes. La mayoría de estas sustancias son volátiles y, en conjunto, son responsables del aroma característico de cada especie vegetal.
      
      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left") 
        .col-lg-12
          .cajon.color-primario.p-4
            p.p-3.text-center Por su parte, Montoya (2000) los describe como compuestos naturales en estado líquido, altamente volátiles, de composición química compleja y aroma agradable, que se extraen de las plantas mediante diferentes técnicas, siendo la destilación el método más utilizado.

      .row.justify-content-center.align-items-center.mb-1(data-aos="fade-left") 
        .col-lg-7
          .cajon.color-secundario.p-4
            p.p-3.text-center En términos generales, los aceites esenciales (también conocidos como esencias, aceites volátiles o aceites etéreos) son sustancias aromáticas presentes en los tejidos de numerosas especies vegetales. Desde la antigüedad, han sido considerados como el “alma de las plantas”, debido a su elevada concentración de compuestos químicos bioactivos, los cuales han sido aprovechados por el ser humano con fines medicinales, cosméticos, alimentarios y terapéuticos. 
        .col-lg-5.d-none.d-lg-block
          img(src="@/assets/curso/Tema1/img03.png")

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema2/gota.svg")
            h3.bg2.py-2.w-card-text.text-white Composición química de los aceites esenciales

      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left") 
        .col-lg-12
          .bloque-texto-g.bloque-texto-g--inverso.bg1.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/Tema1/img04.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Los aceites esenciales están formados por diversas sustancias químicas, entre las cuales destacan los terpenos, compuestos orgánicos caracterizados por su olor intenso y su papel fundamental como constituyentes estructurales de los aceites esenciales. Estas sustancias son responsables, en gran medida, de las propiedades aromáticas y biológicas de los aceites.
                br
                br
          
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema2/gota.svg")
            h3.bg2.py-2.w-card-text.text-white Localización en la planta

      p.mb-3 Los aceites esenciales pueden encontrarse en diferentes partes de la planta, y su concentración varía según la especie vegetal. Entre las estructuras donde suelen acumularse se incluyen:
      
      .tarjeta.bg2.p-4.mb-4
        SlyderA(tipo="b")(data-aos="fade-left") 
          .row.justify-content-center.p-4
            .col-lg-6.mb-4.mb-md-0.col-md-12
              h4.text-white Hojas
              p.text-white Son una de las principales fuentes de aceites esenciales. Contienen glándulas secretoras que producen compuestos aromáticos, generalmente con notas frescas o herbáceas.
            .col-lg-5.col-md-8
              figure
                img(src='@/assets/curso/Tema1/01.png', alt='')
          .row.justify-content-center.p-4
            .col-lg-6.mb-4.mb-md-0.col-md-12
              h4.text-white Flores
              p.text-white Producen aceites esenciales de aromas intensos y delicados, utilizados principalmente en perfumería y aromaterapia.
            .col-lg-5.col-md-8
              figure
                img(src='@/assets/curso/Tema1/02.png', alt='Flores')


          .row.justify-content-center.p-4
            .col-lg-6.mb-4.mb-md-0.col-md-12
              h4.text-white Corteza
              p.text-white Contiene aceites esenciales con aromas cálidos y especiados, frecuentemente usados como saborizantes y en productos medicinales.
            .col-lg-5.col-md-8
              figure
                img(src='@/assets/curso/Tema1/03.png', alt='Corteza')


          .row.justify-content-center.p-4
            .col-lg-6.mb-4.mb-md-0.col-md-12
              h4.text-white Raíces
              p.text-white Acumulan aceites esenciales con aromas terrosos y profundos.
            .col-lg-5.col-md-8
              figure
                img(src='@/assets/curso/Tema1/04.png', alt='Raíces')


          .row.justify-content-center.p-4
            .col-lg-6.mb-4.mb-md-0.col-md-12
              h4.text-white Frutos
              p.text-white Pueden contener aceites esenciales tanto en la pulpa como en estructuras internas, aportando aromas frescos o dulces.
            .col-lg-5.col-md-8
              figure
                img(src='@/assets/curso/Tema1/05.png', alt='Frutos')

    
          .row.justify-content-center.p-4
            .col-lg-6.mb-4.mb-md-0.col-md-12
              h4.text-white Cáscaras
              p.text-white Especialmente en frutos cítricos, concentran aceites esenciales ricos en compuestos aromáticos volátiles.
            .col-lg-5.col-md-8
              figure
                img(src='@/assets/curso/Tema1/06.png', alt='Cáscaras')

       
          .row.justify-content-center.p-4
            .col-lg-6.mb-4.mb-md-0.col-md-12
              h4.text-white Madera
              p.text-white Produce aceites esenciales de aromas amaderados y persistentes, empleados en perfumería fina y productos terapéuticos.
            .col-lg-5.col-md-8
              figure
                img(src='@/assets/curso/Tema1/07.png', alt='Madera')

    
          .row.justify-content-center.p-4
            .col-lg-6.mb-4.mb-md-0.col-md-12
              h4.text-white Flores secas
              p.text-white Aún conservan compuestos aromáticos, que pueden ser extraídos tras procesos específicos de secado.
            .col-lg-5.col-md-8
              figure
                img(src='@/assets/curso/Tema1/08.png', alt='Flores secas')


          .row.justify-content-center.p-4
            .col-lg-6.mb-4.mb-md-0.col-md-12
              h4.text-white Semillas
              p.text-white Contienen aceites esenciales con aromas concentrados y potentes, usados como condimentos y en medicina natural.
            .col-lg-5.col-md-8
              figure
                img(src='@/assets/curso/Tema1/09.png', alt='Semillas')


      p.mb-4 Los aceites esenciales están formados por diversas sustancias químicas, entre las cuales destacan los terpenos, compuestos orgánicos caracterizados por su olor intenso y su papel fundamental como constituyentes estructurales de los aceites esenciales. Estas sustancias son responsables, en gran medida, de las propiedades aromáticas y biológicas de los aceites.


      .row.justify-content-center(data-aos="flip-up")  
        .col-lg-4.col-md-6.mb-4
          .overflow-hidden.h-100.cambiartarjeta.p-4(data-aos="fade-left")
            img.img-a.img-t.mb-3.icono-cambia1(src='@/assets/curso/Tema1/1.svg', alt='')
            .p-2.mb-4
              h4.text-center.text-white Perfumeras.
        
        .col-lg-4.col-md-6.mb-4
          .overflow-hidden.h-100.cambiartarjeta.p-4(data-aos="fade-left")
            img.img-a.img-t.mb-3.icono-cambia1(src='@/assets/curso/Tema1/2.svg', alt='')
            .p-2.mb-4
              h4.text-center.text-white Condimentarias.
    
        
        .col-lg-4.col-md-6.mb-4
          .overflow-hidden.h-100.cambiartarjeta.p-4(data-aos="fade-left")
            img.img-a.img-t.mb-3.icono-cambia1(src='@/assets/curso/Tema1/3.svg', alt='')
            .p-2.mb-4
              h4.text-center.text-white Terapéuticas.


      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema2/gota.svg")
            h3.bg2.py-2.w-card-text.text-white Función de los aceites esenciales en las plantas

      p.mb-4 Además de su aprovechamiento por parte del ser humano, los aceites esenciales cumplen funciones esenciales para la supervivencia y adaptación de las plantas, entre las que se destacan:

      p.mb-4 Los compuestos químicos de las plantas se dividen en dos grandes grupos:

      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left") 
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 1.
            span Clasificación de los compuestos químicos de las plantas
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th Grupo de compuestos
                th Tipo de producto
                th Ejemplos
                th Características principales
                th Función en la planta
            tbody
              tr
                th Metabolitos primarios
                td.text-left Productos químicamente puros.
                td.text-left Flavonoides, alcaloides, azúcares.
                td.text-left Compuestos definidos químicamente, esenciales para el metabolismo básico.
                td.text-left Crecimiento, desarrollo, respiración y funciones vitales.
              tr
                th Metabolitos secundarios
                td.text-left Mezcla de productos.
                td.text-left Aceites, resinoides, esencias.
                td.text-left Mezclas complejas de compuestos aromáticos y volátiles.
                td.text-left Defensa, protección ambiental, atracción de polinizadores y aroma.


      p Como se presenta en el esquema anterior, una esencia o un aceite esencial no está compuesto por un único metabolito, sino por una mezcla compleja de diversos metabolitos secundarios. Entre estos se destacan aquellos de uso frecuente en la industria, la medicina y en múltiples aplicaciones de la vida cotidiana, debido a sus propiedades aromáticas, terapéuticas y funcionales.
      p.mb-4 Los aceites esenciales están conformados principalmente por las siguientes clases de sustancias volátiles:

      SlyderF(columnas="col-lg-6 col-xl-4").mb-5
        .tarjeta.bg4.p-4
          .row.justify-content-center.mb-3
            .col-6.col-md-4.col-lg-7
              img(src='@/assets/curso/Tema1/001.svg' alt='')
          h2.text-center.text-white Terpenos o terpenoides
          p.text-center.text-white Son compuestos orgánicos naturales derivados del isopreno. Constituyen el grupo más abundante en los aceites esenciales y son responsables de gran parte de sus aromas característicos. Presentan propiedades antimicrobianas, antiinflamatorias y antioxidantes.

        .tarjeta.bg4.p-4
          .row.justify-content-center.mb-3
            .col-6.col-md-4.col-lg-7
              img(src='@/assets/curso/Tema1/002.svg' alt='')
          h2.text-center.text-white Compuestos fenólicos y sus derivados
          p.text-center.text-white Son sustancias químicas que poseen uno o más grupos hidroxilo unidos a un anillo aromático. Se caracterizan por aromas intensos y una alta actividad biológica, destacándose por sus propiedades antioxidantes y antimicrobianas.

        .tarjeta.bg4.p-4
          .row.justify-content-center.mb-3
            .col-6.col-md-4.col-lg-7
              img(src='@/assets/curso/Tema1/003.svg' alt='')
          h2.text-center.text-white Alcoholes, ésteres, ácidos y otros compuestos orgánicos
          p.text-center.text-white Incluyen diversos compuestos oxigenados que aportan aromas suaves, florales o frutales. Los alcoholes tienen efectos antisépticos, los ésteres aportan aromas dulces y relajantes, y los ácidos aportan notas aromáticas más intensas.

        .tarjeta.bg4.p-4
          .row.justify-content-center.mb-3
            .col-6.col-md-4.col-lg-7
              img(src='@/assets/curso/Tema1/004.svg' alt='')
          h2.text-center.text-white Compuestos con átomos de nitrógeno y azufre (poco frecuentes)
          p.text-center.text-white Son compuestos presentes en baja proporción dentro de los aceites esenciales. Producen aromas fuertes y penetrantes y poseen propiedades biológicas específicas.

      .row.justify-content-center.align-items-center.mb-3(data-aos="fade-left") 
        .col-lg-5.mb-3.col-11.col-md-9
          img(src='@/assets/curso/Tema1/img05.png' alt='')
        .col-lg-7
          .row
            .col-lg-2.col-3.mb-2.col-md-2
              img(src='@/assets/curso/Tema1/img06.svg' alt='')
            .col-lg-10
              p Stashenko (2009) señala que estas sustancias reciben el nombre de aceites debido a su naturaleza física y a la sensación grasosa que presentan al tacto. No obstante, a diferencia de los aceites vegetales comunes, cuando los aceites esenciales se evaporan no dejan residuos ni manchas grasosas, sino únicamente una fragancia tenue y un recuerdo sensorial agradable.
            .col-lg-12 
              p Este comportamiento contrasta notablemente con el de los aceites vegetales o de cocina, como los de soya, oliva o girasol, los cuales son sustancias pesadas, poco volátiles, fácilmente oxidables y que dejan una mancha grasosa persistente sobre cualquier superficie con la que entran en contacto.
      p Otro aspecto relevante de los aceites esenciales es que una misma planta puede presentar variaciones en la composición química de sus aceites, dependiendo de la parte vegetal utilizada en el proceso de extracción. Un ejemplo representativo de este fenómeno se observa en el árbol de naranja, del cual se obtienen tres aceites esenciales distintos:

      AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul").mb-4(data-aos="fade-left") 
        .row.justify-content-center(titulo="Aceite de <i>petitgrain</i> - Hojas del naranjo")
          .col-md-12.mb-4.mb-md-0.col-lg-6
            p Aceite esencial con aroma fresco, herbáceo y ligeramente amaderado. Se utiliza ampliamente en perfumería y aromaterapia por sus propiedades calmantes y equilibrantes.
          .col-md-8.col-lg-6.col-11
            figure
              img(src='@/assets/curso/Tema1/img06.png', alt='')
  
        .row.justify-content-center(titulo="Aceite de naranja - Cáscara del fruto")
          .col-md-12.mb-4.mb-md-0.col-lg-6
            p Presenta un aroma cítrico, dulce y refrescante. Es uno de los aceites esenciales más utilizados en la industria alimentaria, cosmética y de limpieza.
          .col-md-8.col-lg-6.col-11
            figure
              img(src='@/assets/curso/Tema1/img07.png', alt='')
        
        .row.justify-content-center(titulo="Aceite de neroli - Flores del naranjo")
          .col-md-12.mb-4.mb-md-0.col-lg-6
            p Aceite esencial de aroma floral, intenso y delicado. Es altamente valorado en perfumería fina y aromaterapia por sus efectos relajantes y armonizantes.
          .col-md-8.col-lg-6.col-11
            figure
              img(src='@/assets/curso/Tema1/img08.png', alt='')

      p Un ejemplo representativo de la variación en la composición de los aceites esenciales se observa en la planta de canela, cuyas diferentes partes contienen compuestos predominantes distintos, como el eugenol en hojas y raíces y el aldehído cinámico en la corteza, cada uno con aplicaciones específicas en la industria y la medicina.
      p No todas las plantas productoras de aceites esenciales presentan características organolépticas agradables en su estado natural; sin embargo, mediante procesos adecuados de extracción, es posible obtener esencias con aromas definidos y valor comercial, aun cuando algunos de sus compuestos individuales resulten poco agradables al olfato.
        

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left") 
        .col-lg-7
          .cajon.color-secundario.p-5
            p.px-3.mb-4 Los aceites esenciales se producen en cantidades que oscilan entre el 0,5 % y el 6 % en plantas aromáticas, las cuales suelen ser hierbas o arbustos con olores intensos. Algunas especies como la canela, limonaria, geranio y pachulí han sido introducidas y cultivadas en Colombia con fines ornamentales e industriales.
            p.px-3 Finalmente, ciertas plantas aromáticas solo desarrollan su fragancia característica tras procesos específicos de extracción, como ocurre con el pachulí (Pogostemon patchouli), cuyas hojas requieren una fermentación previa para la obtención de su aceite esencial.
        .col-lg-5.d-none.d-lg-block
          img(src="@/assets/curso/Tema1/img09.png")

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 2.
            span Tipos de células donde se concentran los aceites esenciales

      .tabla-a.color-acento-botones.mb-4(data-aos="fade-left") 
        table
          thead
            tr
              th.bg7.negro Niveles del lenguaje
              th.bg7.negro Niveles del lenguaje
              th.bg7.negro Niveles del lenguaje
        table
          tr.bg8
            th.h4.w-25 Células oleíferas
            td.w-25.text-left Son células especializadas en la producción y almacenamiento de aceites esenciales en su interior. Se localizan generalmente en el parénquima de la planta y concentran el aceite en vacuolas o inclusiones celulares.
            th.w-25.text-left.h5 Cúrcuma, vainilla, jengibre, laurel.
          tr
            th.h4 Canales secretores
            td.text-left Son conductos alargados formados por varias células, donde los aceites esenciales se producen y se acumulan a lo largo del canal. Permiten la movilización de la sustancia.
            th.h5.text-left Pino, artemisia, anís, angélica.
          tr.bg8
            th.h4 Tricomas
            td.text-left Son estructuras pilosas ubicadas principalmente en la superficie de hojas y flores. Secretan aceites esenciales hacia el exterior y cumplen funciones de defensa y atracción de polinizadores.
            th.h5.text-left Romero, cilantro, menta, geranios, jazmín.
          tr
            th.h4 Glándulas
            td.text-left Son estructuras secretoras especializadas que concentran grandes cantidades de aceites esenciales, especialmente en frutos y hojas. Son características de varias especies aromáticas.
            th.h5.text-left Cítricos, eucaliptos.


      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left") 
        .col-lg-12
          .bloque-texto-g.bloque-texto-g--inverso.bg1.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/Tema1/img10.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Cuando una planta aromática es sometida a un proceso de vapor de agua, libera una mezcla líquida odorífera, conocida como aceite esencial. Esta mezcla contiene una gran variedad de sustancias volátiles que reproducen de manera concentrada el aroma característico de la planta de origen.
                br
                br
              | Un aceite esencial puede estar compuesto por entre cincuenta y más de trescientas sustancias químicas, cuya composición depende de la especie vegetal y de la parte de la planta utilizada. Estas sustancias incluyen principalmente hidrocarburos terpénicos y sus derivados oxigenados, así como alcoholes, aldehídos y cetonas. Además, pueden encontrarse éteres, ésteres, compuestos fenólicos, fenilpropanoides y otros compuestos derivados.

      p.mb-4 Estas sustancias se producen y se concentran en estructuras celulares especializadas de las plantas, entre las que se destacan las células oleíferas, los canales secretores, los tricomas y las glándulas. Dependiendo del tipo de estructura y de la especie vegetal, los aceites esenciales pueden encontrarse en distintas partes de la planta, como hojas, flores, corteza, raíces, frutos o cáscaras. Por ejemplo, las células oleíferas son comunes en plantas como el jengibre, la cúrcuma, la vainilla y el laurel; los canales secretores se encuentran en especies como pino, artemisia, anís y angélica; los tricomas son característicos de plantas como menta, romero, cilantro, geranio y jazmín; y las glándulas predominan en cítricos y eucaliptos.

      separador
      #t_1_1.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.1  Caracterización de los aceites esenciales

      .row.justify-content-center(data-aos="fade-down").bg9.mb-4
        .col-lg-5.pe-lg-0.h-100.izq.d-none.d-lg-block
          img(src="@/assets/curso/Tema1/img11.png")
        .col-lg-7.bg9.p-4
            .row.mb-2
              .col-lg-2.col-3.col-md-2
                img(src="@/assets/curso/Tema1/img01.svg").mb-0
            p.text-white El primer paso para caracterizar un aceite esencial consiste en identificar la especie vegetal de la cual fue extraído, así como la parte de la planta utilizada en el proceso de aislamiento. Estos compuestos pueden encontrarse en diversas estructuras vegetales, como frutos, flores, hojas, corteza y raíces, entre otras.
            p.text-white.mb-0 Para una correcta identificación de la especie, se recomienda utilizar no solo el nombre común de la planta, sino también su nombre científico, conformado por el género y la especie. Esto permite evitar ambigüedades, ya que un mismo nombre común puede emplearse para distintas especies según la región. En contraste, el nombre científico o botánico es universal y se mantiene constante en todo el mundo, independientemente del idioma o la ubicación geográfica.














































































  </template>

<script>
export default {
  name: 'Tema1',
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
