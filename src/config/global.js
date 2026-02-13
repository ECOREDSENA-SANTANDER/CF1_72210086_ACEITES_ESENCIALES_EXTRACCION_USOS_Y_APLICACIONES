export default {
  global: {
    Name:
      'Fundamentos, obtención y control de calidad de los aceites esenciales',
    Description:
      'Los aceites esenciales son compuestos volátiles de origen vegetal obtenidos mediante diversos métodos de extracción, cuya calidad depende de la materia prima y del proceso utilizado. Sus propiedades organolépticas, físicas y químicas determinan su pureza y aplicación. Son ampliamente empleados en las industrias medicinal, cosmética, alimenticia, aromática y terapéutica.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Aceites esenciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Caracterización de los aceites esenciales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Propiedades',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Clasificación de los aceites esenciales',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Extracción de los aceites esenciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Métodos directos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Métodos indirectos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Análisis y control de calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Normativa que rige los aceites esenciales',
            hash: 't_3_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [],
  glosario: [
    {
      termino: 'Aceite esencial',
      significado:
        'Mezcla compleja de compuestos volátiles de origen vegetal, con aroma característico y propiedades terapéuticas, cosméticas o alimenticias.',
    },
    {
      termino: 'Autenticidad',
      significado:
        'Garantía de que un aceite esencial es genuino y no adulterado, manteniendo su composición natural.',
    },
    {
      termino: 'Cromatografía',
      significado:
        'Técnica analítica utilizada para separar y analizar los componentes químicos de un aceite esencial.',
    },
    {
      termino: 'Destilación',
      significado:
        'Método de extracción de aceites esenciales mediante el calentamiento del material vegetal para separar los compuestos volátiles.',
    },
    {
      termino: 'Exudación',
      significado:
        'Liberación natural de aceites esenciales de un vegetal, generalmente a través de cortes o lesiones en la planta.',
    },
    {
      termino: 'Extracción con solventes',
      significado:
        'Proceso indirecto para obtener aceites esenciales utilizando disolventes que disuelven los compuestos aromáticos del vegetal.',
    },
    {
      termino: 'Expresión',
      significado:
        'Método directo de extracción que consiste en presionar partes del vegetal, generalmente frutas cítricas, para obtener su aceite esencial.',
    },
    {
      termino: 'Materia prima',
      significado:
        'Parte del vegetal utilizada para la producción de aceites esenciales, cuya calidad influye directamente en el producto final.',
    },
    {
      termino: 'Propiedades organolépticas',
      significado:
        'Características sensoriales de los aceites esenciales, como aroma, color y sabor.',
    },
    {
      termino: 'Propiedades físico-químicas',
      significado:
        'Rasgos medibles de los aceites esenciales, como densidad, viscosidad, solubilidad y composición química.',
    },
    {
      termino: 'Raspado',
      significado:
        'Técnica de extracción directa que consiste en frotar o raspar la superficie de la planta para obtener sus aceites.',
    },
    {
      termino: 'Resonancia Magnética Nuclear (RMN)',
      significado:
        'Técnica avanzada utilizada para analizar la estructura molecular de los componentes de un aceite esencial.',
    },
    {
      termino: 'Seguridad',
      significado:
        'Medida de protección que asegura que el aceite esencial puede ser usado sin riesgo para la salud humana o ambiental.',
    },
    {
      termino: 'Solvente',
      significado:
        'Sustancia química utilizada en la extracción de aceites esenciales para disolver los compuestos aromáticos del vegetal.',
    },
    {
      termino: 'Terapéutico',
      significado:
        'Relacionado con el uso de los aceites esenciales para tratamiento o alivio de síntomas de salud física o emocional.',
    },
  ],
  referencias: [
    {
      referencia:
        'Barotto, A. J. (2021). Extracción verde de aceites esenciales. Investigación Joven, 8.',
      link: '',
    },
    {
      referencia:
        'Bravo, E. M. G., Robalino, P. J. P., Durán, A. P. G., & Mancero, O. V. C. (2025). Métodos de extracción de aceites esenciales de cítricos y eucalipto: comparación de eficiencia, calidad y sostenibilidad: una revisión sistemática. RECIMUNDO, 9(2), 646–659.',
      link: '',
    },
    {
      referencia:
        'Colina-Márquez, J. Á., Contreras, E., Ruiz, J., & Monroy, L. (2022). Comparación de dos métodos de extracción para el aceite esencial de la cáscara de pomelo (Citrus maxima). Revista Ing-Nova, 1(1), 85–98.',
      link: '',
    },
    {
      referencia:
        'López Aguirre, G. E. (2024). Propiedades biológicas y farmacológicas en los aceites esenciales de semillas oleaginosas (Tesis de pregrado). Universidad Técnica de Babahoyo.',
      link: '',
    },
    {
      referencia:
        'Rojas, E. O., Rúales, F. H., Perdomo, D. A., & Mora, J. P. J. (2022). Evaluación del método de extracción SPME-GC-MS para el análisis de compuestos orgánicos volátiles en licor de cacao de Nariño-Colombia. Revista ION, 35(1), 103–116.',
      link: '',
    },
    {
      referencia:
        'Zúñiga Ulloa, A. G., & Rodas Luna, E. S. (2024). Revisión bibliográfica sobre la actividad farmacológica de los aceites esenciales en neuroprotección.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Eduardo Orozco Osorio',
          cargo: 'Desarrollador de contenidos ',
          centro: 'Centro para la Formación Cafetera - Regional Caldas',
        },
        {
          nombre: '',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
