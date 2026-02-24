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
      
      .tarjeta.bg2.p-4.mb-4(data-aos="fade-left") 
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
              p.text-white Raíces Acumulan aceites esenciales con aromas terrosos y profundos, utilizados en perfumería y medicina tradicional.
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


      p.mb-4 Estas partes vegetales liberan al exterior sustancias aromáticas que, de acuerdo con su uso, pueden tener aplicaciones:


      .row.justify-content-center(data-aos="flip-up")  
        .col-lg-4.col-md-6.mb-4
          .overflow-hidden.h-100.cambiartarjeta.p-4(data-aos="fade-left")
            img.img-a.img-t.mb-3.icono-cambia1(src='@/assets/curso/Tema1/1.svg', alt='')
            .p-2.mb-4
              h4.text-center.text-white Perfumeras
        
        .col-lg-4.col-md-6.mb-4
          .overflow-hidden.h-100.cambiartarjeta.p-4(data-aos="fade-left")
            img.img-a.img-t.mb-3.icono-cambia1(src='@/assets/curso/Tema1/2.svg', alt='')
            .p-2.mb-4
              h4.text-center.text-white Condimentarias
    
        
        .col-lg-4.col-md-6.mb-4
          .overflow-hidden.h-100.cambiartarjeta.p-4(data-aos="fade-left")
            img.img-a.img-t.mb-3.icono-cambia1(src='@/assets/curso/Tema1/3.svg', alt='')
            .p-2.mb-4
              h4.text-center.text-white Terapéuticas


      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema2/gota.svg")
            h3.bg2.py-2.w-card-text.text-white Función de los aceites esenciales en las plantas

      p.mb-4 Además de su aprovechamiento por parte del ser humano, los aceites esenciales cumplen funciones esenciales para la supervivencia y adaptación de las plantas, entre las que se destacan:
      
      SlyderB.mb-5(:datos="datosSlyder").bg10.p-4.text-white(data-aos="fade-left") 

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

      SlyderF(columnas="col-lg-6 col-xl-4").mb-5(data-aos="fade-left") 
        .tarjeta.bg4.p-4
          .row.justify-content-center.mb-3
            .col-6.col-md-4.col-lg-7
              img(src='@/assets/curso/Tema1/001.svg' alt='')
          h3.text-center.text-white Terpenos o terpenoides
          p.text-center.text-white Son compuestos orgánicos naturales derivados del isopreno. Constituyen el grupo más abundante en los aceites esenciales y son responsables de gran parte de sus aromas característicos. Presentan propiedades antimicrobianas, antiinflamatorias y antioxidantes.

        .tarjeta.bg4.p-4
          .row.justify-content-center.mb-3
            .col-6.col-md-4.col-lg-7
              img(src='@/assets/curso/Tema1/002.svg' alt='')
          h3.text-center.text-white Compuestos fenólicos y sus derivados
          p.text-center.text-white Son sustancias químicas que poseen uno o más grupos hidroxilo unidos a un anillo aromático. Se caracterizan por aromas intensos y una alta actividad biológica, destacándose por sus propiedades antioxidantes y antimicrobianas.

        .tarjeta.bg4.p-4
          .row.justify-content-center.mb-3
            .col-6.col-md-4.col-lg-7
              img(src='@/assets/curso/Tema1/003.svg' alt='')
          h3.text-center.text-white Alcoholes, ésteres, ácidos y otros compuestos orgánicos
          p.text-center.text-white Incluyen diversos compuestos oxigenados que aportan aromas suaves, florales o frutales. Los alcoholes tienen efectos antisépticos, los ésteres aportan aromas dulces y relajantes, y los ácidos aportan notas aromáticas más intensas.

        .tarjeta.bg4.p-4
          .row.justify-content-center.mb-3
            .col-6.col-md-4.col-lg-7
              img(src='@/assets/curso/Tema1/004.svg' alt='')
          h3.text-center.text-white Compuestos con átomos de nitrógeno y azufre (poco frecuentes)
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
            p.px-3 Finalmente, ciertas plantas aromáticas solo desarrollan su fragancia característica tras procesos específicos de extracción, como ocurre con el pachulí (#[em Pogostemon patchouli]), cuyas hojas requieren una fermentación previa para la obtención de su aceite esencial.
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
              th.bg7.negro Tipo de estructura celular
              th.bg7.negro Descripción
              th.bg7.negro Ejemplos de plantas
        table
          tr.bg8
            th.h4.w-25 Células oleíferas
            td.w-25.text-left Son células especializadas en la producción y almacenamiento de aceites esenciales en su interior. Se localizan generalmente en el parénquima de la planta y concentran el aceite en vacuolas o inclusiones celulares.
            td.w-25.text-left Cúrcuma, vainilla, jengibre, laurel.
          tr
            th.h4 Canales secretores
            td.text-left Son conductos alargados formados por varias células, donde los aceites esenciales se producen y se acumulan a lo largo del canal. Permiten la movilización de la sustancia dentro del tejido vegetal.
            td.text-left Pino, artemisia, anís, angélica.
          tr.bg8
            th.h4 Tricomas
            td.text-left Son estructuras pilosas ubicadas principalmente en la superficie de hojas y flores. Secretan aceites esenciales hacia el exterior y cumplen funciones de defensa y atracción de polinizadores.
            td.text-left Romero, cilantro, menta, geranios, jazmín.
          tr
            th.h4 Glándulas
            td.text-left Son estructuras secretoras especializadas que concentran grandes cantidades de aceites esenciales, especialmente en frutos y hojas. Son características de varias especies aromáticas.
            td.text-left Cítricos, eucaliptos.


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


      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left") 
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 3.
            span Parte de la planta donde se produce el aceite esencial según la especie vegetal
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th Nombre común
                th Nombre botánico
                th Parte de la planta utilizada
            tbody
              //- Grupo Ramas
              tr
                th Ciprés
                td #[em Cupressus sempervirens]
                td(rowspan="2") Ramas
              tr
                th Jara
                td #[em Cistus ladanifer]
              
              //- Grupo Sumidades floridas
              tr
                th Lavanda
                td #[em Lavandula angustifolia]
                td(rowspan="2") Sumidades floridas
              tr
                th Lavandín
                td #[em Híbrido de Lavandula angustifolia y Lavandula latifolia]
              
              //- Grupo Planta entera
              tr
                th Menta
                td #[em Mentha piperita]
                td(rowspan="3") Planta entera
              tr
                th Yerbabuena
                td #[em Mentha citrata]
              tr
                th Limoncillo
                td #[em Cymbopogon flexuosus]
              
              //- Grupo Hojas
              tr
                th Eneldo
                td #[em Anethum graveolens]
                td(rowspan="2") Hojas
              tr
                th Geranio
                td #[em Pelargonium odoratissimum]
              
              //- Grupo Flor
              tr
                th Rosa
                td #[em Rosa centifolia]
                td(rowspan="2") Flor
              tr
                th Ylang-ylang
                td #[em Cananga odorata]
              
              //- Grupo Flavedo
              tr
                th Limón
                td #[em Citrus x limon]
                td(rowspan="2") Flavedo (capa externa del fruto)
              tr
                th Mandarina
                td #[em Citrus reticulata]
              
              //- Naranja (Celda única)
              tr
                th Naranja
                td #[em Citrus x aurantium]
                td Flavedo, flores y hojas
              
              //- Grupo Planta entera con flor
              tr
                th Romero
                td #[em Rosmarinus officinalis]
                td(rowspan="4") Planta entera con flor
              tr
                th Tomillo
                td #[em Thymus vulgaris]
              tr
                th Ajedrea
                td #[em Satureja montana]
              tr
                th Mejorana
                td #[em Origanum majorana]
              
              //- Filas individuales restantes
              tr
                th Melisa o toronjil
                td #[em Melissa officinalis]
                td Planta fresca
              tr
                th Abeto de Siberia
                td #[em Abies sibirica]
                td Acículas
              tr
                th Manzanilla
                td #[em Matricaria recutita]
                td Flor seca
              tr
                th Canela
                td #[em Cinnamomum verum]
                td Corteza
              tr
                th Cedro
                td #[em Cedrus atlantica]
                td Madera
              tr
                th Lima
                td #[em Citrus maxima]
                td Fruto entero
              tr
                th Clavo
                td #[em Syzygium aromaticum]
                td Botones florales
              tr
                th Vetiver
                td #[em Chrysopogon zizanioides]
                td Raíz
              tr
                th Mostaza
                td #[em Brassica nigra]
                td Mostaza
      
      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left") 
        .col-lg-7
          .cajon.color-secundario.p-5
            p.px-3.mb-3 Otra característica fundamental de los aceites esenciales está relacionada con el momento de cosecha de la planta, ya que este factor influye directamente en el rendimiento del proceso de extracción y en la composición química del producto final.
            p.px-3.mb-0 Un ejemplo de ello es el aceite esencial de salvia (#[em alvia officinalis]), el cual contiene una cetona neurotóxica cuya concentración varía según la época de recolección: es más alta cuando la planta se cosecha después de la floración y más baja cuando se recolecta antes de florecer, siendo esta última la condición más adecuada.
        .col-lg-5.d-none.d-lg-block
          img(src="@/assets/curso/Tema1/img12.png")

      p.mb-4 Un comportamiento similar se observa en el jazmín (#[em Jasminum officinale]), cuyas flores deben cosecharse en horas de la mañana para obtener un aceite esencial con una composición óptima. Cuando la recolección se realiza en horas de la tarde, el aceite presenta compuestos responsables de notas odoríferas poco agradables, lo que disminuye su valor para la industria de la perfumería y la aromaterapia.


      separador
      #t_1_2.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.2  Propiedades 

      p Las #[b propiedades físicas] de los aceites esenciales se refieren a aquellas características que pueden percibirse o medirse sin alterar su composición química. Estas propiedades son fundamentales para su identificación, control de calidad y aplicación industrial.
      p.mb-4 #[b Las propiedades químicas] están directamente relacionadas con la estructura molecular de los compuestos que conforman los aceites esenciales y con su comportamiento frente a diferentes agentes químicos. Estas propiedades son determinantes para evaluar la pureza, estabilidad y calidad del producto.

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left") 
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 4.
            span Propiedades de los aceites esenciales 
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th Tipo de propiedad
                th Característica
                th Importancia
            tbody
              //- Propiedades Físicas
              tr
                th(rowspan="5") Física
                td Color
                td.text-left Varía según la especie y el proceso de extracción; ayuda a la identificación visual del aceite.
              tr
                td Olor
                td.text-left Aroma intenso y característico, clave para la identificación sensorial y el uso comercial.
              tr
                td Densidad
                td.text-left Generalmente menor que la del agua; facilita la separación en procesos de destilación.
              tr
                td Índice de refracción
                td.text-left Parámetro óptico que indica pureza y composición del aceite.
              tr
                td Solubilidad
                td.text-left Insolubles en agua y solubles en alcoholes y solventes orgánicos.
              
              //- Propiedades Químicas
              tr
                th(rowspan="5") Química
                td Índice de acidez
                td.text-left Indica la presencia de ácidos libres y posibles procesos de degradación.
              tr
                td Índice de éster
                td.text-left Relacionado con el contenido de ésteres, importantes en aromas suaves y agradables.
              tr
                td Índice de saponificación
                td.text-left Permite estimar la masa molecular promedio de los compuestos presentes.
              tr
                td Índice de acetilo
                td.text-left Indica la presencia de grupos acetilo y contribuye al control de calidad.
              tr
                td pH
                td.text-left Coeficiente que indica el grado de acidez o basicidad.


      separador
      #t_1_3.titulo-segundo.mb-5(data-aos="zoom-in-left")
        h2 1.3  Clasificación de los aceites esenciales 

      p.mb-0 Los aceites esenciales se pueden clasificar de acuerdo con los siguientes tres parámetros:

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema2/gota.svg")
            h3.bg2.py-2.w-card-text.text-white Consistencia

      TabsA.color-acento-botones.mb-4(data-aos="fade-left") 
        .tarjeta.color-acento-botones--borde.p-4(titulo="Esencias")
          .row.justify-content-center.align-items-center.p-4
            .col-lg-7
              p Líquidos volátiles a temperatura ambiente, de textura ligera y fácil evaporación.
            .col-lg-5.col-11.col-md-9
              img(src="@/assets/curso/Tema1/img13.png")
        
        .tarjeta.color-acento-botones--borde.p-4(titulo="Bálsamos")
          .row.justify-content-center.align-items-center.p-4
            .col-lg-7
              p Presentan una consistencia espesa, poco volátil, con tendencia a la polimerización.
            .col-lg-5.col-11.col-md-9
              img(src="@/assets/curso/Tema1/img14.png")
        
        .tarjeta.color-acento-botones--borde.p-4(titulo="Oleorresinas")
          .row.justify-content-center.align-items-center.p-4
            .col-lg-7
              p Contienen el aroma de la planta de forma concentrada; son muy viscosas.
            .col-lg-5.col-11.col-md-9
              img(src="@/assets/curso/Tema1/img15.png")

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema2/gota.svg")
            h3.bg2.py-2.w-card-text.text-white Origen

      TabsA.color-acento-botones.mb-4(data-aos="fade-left") 
        .tarjeta.color-acento-botones--borde.p-4(titulo="Naturales")
          .row.justify-content-center.align-items-center.p-4
            .col-lg-7
              p Se obtienen directamente de la planta y no sufren modificaciones físicas ni químicas; corresponden a aceites esenciales puros.
            .col-lg-5.col-11.col-md-9
              img(src="@/assets/curso/Tema1/img16.png")

        .tarjeta.color-acento-botones--borde.p-4(titulo="Artificiales")
          .row.justify-content-center.align-items-center.p-4
            .col-lg-7
              p Se obtienen por enriquecimiento o modificación de la esencia; no poseen los mismos beneficios que los aceites naturales.
            .col-lg-5.col-11.col-md-9
              img(src="@/assets/curso/Tema1/img17.png")

        .tarjeta.color-acento-botones--borde.p-4(titulo="Sintéticos")
          .row.justify-content-center.align-items-center.p-4
            .col-lg-7
              p Son producidos químicamente mediante la combinación de componentes; imitan aromas naturales.
            .col-lg-5.col-11.col-md-9
              img(src="@/assets/curso/Tema1/img18.png")


      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-md-11.col-lg-12.col-12
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema2/gota.svg")
            h3.bg2.py-2.w-card-text.text-white Naturaleza química del compuesto predominante

      TabsA.color-acento-botones.mb-4(data-aos="fade-left") 
        .tarjeta.color-acento-botones--borde.p-4(titulo="Monoterpenoides")
          .row.justify-content-center.align-items-center.p-4
            .col-lg-7
              p Compuestos volátiles constituidos por dos moléculas de isopreno; frecuentes en aceites cítricos y frescos.
            .col-lg-5.col-11.col-md-9
              img(src="@/assets/curso/Tema1/img19.png")

        .tarjeta.color-acento-botones--borde.p-4(titulo="Sesquiterpenoides")
          .row.justify-content-center.align-items-center.p-4
            .col-lg-7
              p Compuestos formados por tres moléculas de isopreno; presentan aromas más intensos y persistentes.
            .col-lg-5.col-11.col-md-9
              img(src="@/assets/curso/Tema1/img20.png")

        .tarjeta.color-acento-botones--borde.p-4(titulo="No terpénicos")
          .row.justify-content-center.align-items-center.p-4
            .col-lg-7
              p Compuestos constituidos por fenoles y fenilpropanoides, con aromas fuertes y alta actividad biológica.
            .col-lg-5.col-11.col-md-9
              img(src="@/assets/curso/Tema1/img21.png")

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left") 
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 5.
            span Clasificación química de los aceites esenciales según la especie vegetal

        .tabla-a.color-acento-botones
          table
            thead
              tr
                th Monoterpenoides
                th Sesquiterpenoides
                th No terpénicos
            tbody
              tr
                td Romero
                td Pachulí
                td Eneldo
              tr
                td Salvia
                td Cúrcuma
                td Anís
              tr
                td Geranio
                td Jengibre
                td Hinojo
              tr
                td Citronela
                td Vetiver
                td Tomillo
              tr
                td Palmarrosa
                td Copaiba
                td Orégano
              tr
                td Albahaca
                td Cedro
                td Ylang-Ylang
              tr
                td Rosa
                td Clavo
                td Canela
              tr
                td Pino
                td Mirra
                td Ajedrea
              tr
                td Eucalipto
                td Manzanilla
                td Narciso
              tr
                td Cítricos
                td.text-center —
                td Tarragón
              tr
                td Ciprés
                td.text-center —
                td.text-center —
              tr
                td Lavanda
                td.text-center —
                td.text-center —
              tr
                td Menta
                td.text-center —
                td.text-center —
      
      .fondot2.p-3.mb-4(data-aos="fade-left") 
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-7.col-md-10
            .row.justify-content-start.mb-4(data-aos="zoom-in-left")
              .col-md-10.col-lg-12.col-12
                .d-flex.align-items-center.mt-4
                  img.w-card-icon(src="@/assets/curso/Tema2/gota2.svg")
                  h3.bg2.py-2.w-card-text.text-white Importancia de los aceites esenciales
            p.text-white Los aceites esenciales tienen una gran relevancia para el ser humano debido a su amplio uso en áreas como la medicina, la cosmética, la aromaterapia, la culinaria y otras industrias afines. Su creciente aceptación se relaciona con la búsqueda actual de estilos de vida más saludables y el interés por productos de origen natural, valorados por sus propiedades terapéuticas, sensoriales y funcionales.
            p.text-white Uno de los campos con mayor auge en la actualidad es la aromaterapia, la cual se define como una práctica terapéutica natural orientada a promover el equilibrio entre cuerpo, mente y espíritu mediante el uso de aceites esenciales extraídos de plantas. Su aplicación más común se realiza a través de masajes, donde se combinan los efectos del aceite a nivel cutáneo y olfativo, generando beneficios físicos y psicológicos. Diversos estudios han demostrado que los aromas influyen directamente en las emociones, el estado de ánimo y los procesos mentales, contribuyendo a la reducción del estrés y la relajación general del organismo. Para estos tratamientos es indispensable el uso de aceites esenciales naturales y puros, ya que garantizan una mayor efectividad terapéutica.
          .col-lg-4.col-md-7
            img(src='@/assets/curso/Tema1/img22.png', alt='')

      p Por otra parte, en el ámbito de la agricultura, los aceites esenciales y extractos vegetales han cobrado importancia como alternativas sostenibles para el control de plagas, enfermedades y malezas, con el fin de reducir el impacto negativo sobre la salud humana y el medio ambiente. Los metabolitos secundarios producidos por las plantas actúan como mecanismos naturales de defensa frente a insectos, hongos y bacterias, lo que ha incentivado su uso en diversos países latinoamericanos.
      p.mb-4 Entre las principales ventajas de estos extractos naturales se destacan:


      .row.justify-content-center(data-aos="flip-up")  
        .col-lg-3.col-md-6.mb-4
          .overflow-hidden.h-100.cambiartarjeta1.p-4(data-aos="fade-left")
            img.img-a.img-t.mb-3(src='@/assets/curso/Tema1/18.svg', alt='')
            .p-2.mb-4
              h4.text-center.text-white Alta efectividad
        
        .col-lg-3.col-md-6.mb-4
          .overflow-hidden.h-100.cambiartarjeta1.p-4(data-aos="fade-left")
            img.img-a.img-t.mb-3(src='@/assets/curso/Tema1/19.svg', alt='')
            .p-2.mb-4
              h4.text-center.text-white Bajo costo de preparación
    
        
        .col-lg-3.col-md-6.mb-4
          .overflow-hidden.h-100.cambiartarjeta1.p-4(data-aos="fade-left")
            img.img-a.img-t.mb-3(src='@/assets/curso/Tema1/20.svg', alt='')
            .p-2.mb-4
              h4.text-center.text-white Fácil obtención
        
        .col-lg-3.col-md-6.mb-4
          .overflow-hidden.h-100.cambiartarjeta1.p-4(data-aos="fade-left")
            img.img-a.img-t.mb-3(src='@/assets/curso/Tema1/21.svg', alt='')
            .p-1.mb-4
              h4.text-center.text-white Ausencia de efecto residual
      p.mb-4  En conjunto, estas características posicionan a los aceites esenciales como una opción valiosa y sostenible en diferentes sectores productivos y terapéuticos.
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 6.
            span Extractos utilizados en la agricultura

        .tabla-a.color-acento-botones
          table
            thead
              tr
                th Extracto
                th Acción
                th Organismo que combate
            tbody
              tr
                td Extracto de ajenjo
                td Repelente
                td Controla babosas
              tr
                td Extracto de ajo
                td Insecticida / acaricida
                td Diferentes insectos de las hortalizas
              tr
                td Extracto de albahaca
                td Repelente
                td Mosca blanca
              tr
                td Extracto de canela
                td Herbicida
                td Gramíneas
              tr
                td Extracto de clavo
                td Herbicida
                td #[em Amaranthus sp] / #[em Ipomoea sp]
              tr
                td Extracto de crisantemo
                td Insecticida / acaricida
                td #[em Eriophyta japonica] / #[em Sacadodes pyrelis]
              tr
                td Extracto de fríjol
                td Fungicida
                td #[em Pseudoperonospora cubensis] / #[em Botrytis cinerea]/ #[em Sphaeroteca pannosa]

              tr
                td Extracto de dioscorea
                td Insecticida / acaricida
                td #[em Alabama argillacea] / #[em Liriomyza quadrata]

              tr
                td Extracto de lavanda
                td Repelente
                td Controla babosas y moscas
              tr
                td Extracto de eucalipto
                td Herbicida
                td #[em Eleusine indica] / #[em Portulaca oleracea]















































  </template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Defensa química',
        texto:
          'Los aceites esenciales contienen compuestos que actúan como mecanismos de defensa natural, capaces de repeler insectos y herbívoros o inhibir el crecimiento de microorganismos patógenos.',
        imagen: require('@/assets/curso/Tema1/sli1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Atracción de polinizadores',
        texto:
          'Los aromas intensos y específicos emitidos por los aceites esenciales atraen insectos polinizadores, facilitando los procesos de polinización y reproducción vegetal.',
        imagen: require('@/assets/curso/Tema1/sli2.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Adaptación al estrés ambiental',
        texto:
          'Estas sustancias ayudan a las plantas a tolerar condiciones ambientales adversas, como altas temperaturas, radiación solar intensa o periodos de sequía.',
        imagen: require('@/assets/curso/Tema1/sli3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Comunicación química',
        texto:
          'Los compuestos aromáticos permiten la interacción entre plantas y otros organismos del ecosistema, favoreciendo relaciones ecológicas complejas.',
        imagen: require('@/assets/curso/Tema1/sli4.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
