<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Fundamentos, obtención y control de calidad de los aceites esenciales.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión de los conceptos fundamentales relacionados con la obtención y control de calidad de los aceites esenciales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Los aceites esenciales se consideran productos de alto valor debido a que?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Son mezclas complejas de compuestos volátiles que concentran el aroma y propiedades funcionales de las plantas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Son aceites grasos similares a los de origen animal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se obtienen únicamente a partir de semillas oleaginosas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Son sustancias sintéticas diseñadas para la industria perfumera.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos, obtención y control de calidad de los aceites esenciales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Fundamentos, obtención y control de calidad de los aceites esenciales.',
        },

        {
          id: 2,
          texto:
            '¿Una diferencia clave entre un aceite esencial y un aceite vegetal es qué?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ambos tienen la misma volatilidad y comportamiento químico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El aceite esencial es más denso y deja manchas grasas permanentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El aceite esencial es volátil y no deja residuo graso tras evaporarse.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El aceite vegetal se obtiene solo por destilación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos, obtención y control de calidad de los aceites esenciales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Fundamentos, obtención y control de calidad de los aceites esenciales.',
        },

        {
          id: 3,
          texto:
            '¿Los terpenos son importantes en los aceites esenciales por qué?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentan el contenido graso del producto final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Constituyen una de las principales clases de compuestos responsables del aroma.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Disminuyen la volatilidad del aceite.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo aparecen en aceites esenciales sintéticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos, obtención y control de calidad de los aceites esenciales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Fundamentos, obtención y control de calidad de los aceites esenciales.',
        },

        {
          id: 4,
          texto:
            '¿La composición de un aceite esencial puede variar principalmente por?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El tipo de envase utilizado para su almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El color natural de la planta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La edad del consumidor final.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La parte de la planta utilizada y el momento de cosecha.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos, obtención y control de calidad de los aceites esenciales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Fundamentos, obtención y control de calidad de los aceites esenciales.',
        },

        {
          id: 5,
          texto:
            '¿Una función biológica de los aceites esenciales en las plantas es?',
          imagen: require('@/assets/actividad/imagen05.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Almacenar energía en forma de lípidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Actuar como mecanismo de defensa frente a insectos y microorganismos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Regular el crecimiento de las raíces.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir el proceso de fotosíntesis.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos, obtención y control de calidad de los aceites esenciales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Fundamentos, obtención y control de calidad de los aceites esenciales.',
        },
        {
          id: 6,
          texto:
            '¿El método de extracción más adecuado para obtener aceites esenciales verdaderos para aromaterapia es?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Destilación y expresión.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Extracción con solventes volátiles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Maceración en grasas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Extracción con alcoholes industriales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos, obtención y control de calidad de los aceites esenciales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Fundamentos, obtención y control de calidad de los aceites esenciales.',
        },

        {
          id: 7,
          texto: '¿La hidrodestilación se caracteriza por?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Utilizar solventes orgánicos a baja temperatura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aplicarse únicamente a cítricos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Hervir el material vegetal en agua para liberar los compuestos volátiles.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'No requerir separación posterior del aceite.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos, obtención y control de calidad de los aceites esenciales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Fundamentos, obtención y control de calidad de los aceites esenciales.',
        },

        {
          id: 8,
          texto:
            '¿En la destilación por arrastre de vapor, el vapor cumple la función de?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disolver completamente los aceites esenciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Oxidar los compuestos aromáticos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir la presión atmosférica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Transportar los compuestos volátiles sin degradarlos térmicamente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos, obtención y control de calidad de los aceites esenciales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Fundamentos, obtención y control de calidad de los aceites esenciales.',
        },

        {
          id: 9,
          texto: '¿La destilación al vacío se utiliza por qué?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementa el color del aceite.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permite destilar compuestos sensibles al calor a menores temperaturas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Es más económica que la destilación tradicional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elimina completamente el agua del proceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos, obtención y control de calidad de los aceites esenciales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Fundamentos, obtención y control de calidad de los aceites esenciales.',
        },

        {
          id: 10,
          texto: '¿La extracción por fluidos supercríticos se destaca por?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Obtener aceites de alta pureza sin residuos de solventes tóxicos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ser el método más antiguo de extracción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Usar exclusivamente agua como fluido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No requerir equipos especializados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos, obtención y control de calidad de los aceites esenciales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Fundamentos, obtención y control de calidad de los aceites esenciales.',
        },

        {
          id: 11,
          texto: '¿Una propiedad organoléptica de los aceites esenciales es?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Índice de refracción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Densidad relativa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Olor característico e intenso.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Índice de saponificación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos, obtención y control de calidad de los aceites esenciales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Fundamentos, obtención y control de calidad de los aceites esenciales.',
        },

        {
          id: 12,
          texto: '¿El índice de acidez en un aceite esencial permite?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Determinar su color natural.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Medir su volatilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Identificar su origen botánico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluar degradación o presencia de ácidos libres.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos, obtención y control de calidad de los aceites esenciales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Fundamentos, obtención y control de calidad de los aceites esenciales.',
        },

        {
          id: 13,
          texto: '¿La cromatografía de gases es importante por qué?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Define el color del aceite.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permite separar e identificar los componentes del aceite esencial.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Elimina impurezas del producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituye todos los demás métodos analíticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos, obtención y control de calidad de los aceites esenciales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Fundamentos, obtención y control de calidad de los aceites esenciales.',
        },

        {
          id: 14,
          texto: '¿Cuándo se recomienda utilizar la técnica de la entrevista?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Obtener información cualitativa y cuantitativa de los compuestos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Medir únicamente la densidad del aceite.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evaluar el olor del producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Determinar la solubilidad en agua.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos, obtención y control de calidad de los aceites esenciales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Fundamentos, obtención y control de calidad de los aceites esenciales.',
        },

        {
          id: 15,
          texto: '¿La resonancia magnética nuclear se caracteriza por?',
          imagen: require('@/assets/actividad/imagen05.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tener baja precisión estructural.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Analizar solo compuestos volátiles simples.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Proporcionar información detallada sobre la estructura molecular.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reemplazar la cromatografía de gases.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos, obtención y control de calidad de los aceites esenciales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Fundamentos, obtención y control de calidad de los aceites esenciales.',
        },

        {
          id: 16,
          texto: '¿La espectroscopía infrarroja permite?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Separar mezclas complejas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuantificar cada componente del aceite.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Determinar la densidad del producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Identificar grupos funcionales presentes en la mezcla.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos, obtención y control de calidad de los aceites esenciales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Fundamentos, obtención y control de calidad de los aceites esenciales.',
        },

        {
          id: 17,
          texto:
            '¿El uso del nombre científico de una planta es importante por qué?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evita confusiones derivadas de nombres comunes regionales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Mejora el aroma del aceite.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumenta el rendimiento del proceso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituye los análisis de laboratorio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos, obtención y control de calidad de los aceites esenciales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Fundamentos, obtención y control de calidad de los aceites esenciales.',
        },

        {
          id: 18,
          texto:
            '¿El rendimiento de un aceite esencial depende en gran medida de?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El color de la planta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La calidad de la materia prima y el momento de cosecha.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El tipo de envase final.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El tiempo de almacenamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos, obtención y control de calidad de los aceites esenciales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Fundamentos, obtención y control de calidad de los aceites esenciales.',
        },

        {
          id: 19,
          texto: '¿En aromaterapia, los aceites esenciales deben ser?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mezclados con solventes sintéticos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Oxidados previamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diluidos en alcohol industrial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Naturales, puros y obtenidos por métodos adecuados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos, obtención y control de calidad de los aceites esenciales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Fundamentos, obtención y control de calidad de los aceites esenciales.',
        },

        {
          id: 20,
          texto:
            '¿La normativa sobre aceites esenciales varía entre países por qué?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Todos los aceites se usan de la misma forma.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No existe regulación internacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Depende únicamente del clima.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Está relacionada con la aplicación final del aceite en cada industria.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con los Fundamentos, obtención y control de calidad de los aceites esenciales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Fundamentos, obtención y control de calidad de los aceites esenciales.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre los Fundamentos, obtención y control de calidad de los aceites esenciales.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
