const TEXTS_GOLDEN_CIRCLE = {
  porQue: [
    'La empresa necesita trabajar significativamente en la definición y comunicación de su propósito. La falta de claridad y entendimiento en la misión y valores afecta la toma de decisiones y la capacidad de la empresa para diferenciarse en el mercado. Es esencial que los empleados estén más alineados con la visión de la empresa.',
    'La empresa está en el proceso de definir su propósito, pero aún enfrenta desafíos en la comunicación y comprensión de su misión. Hay esfuerzos para alinear las decisiones con los valores de la empresa, pero se requiere una mayor coherencia y compromiso por parte de todos los empleados. La diferenciación en el mercado es limitada.',
    'La empresa tiene un propósito definido y en su mayoría bien comprendido por los empleados. Las decisiones se toman considerando los valores y la misión, lo que ayuda a la empresa a destacarse en el mercado. No obstante, hay oportunidades para mejorar la alineación y comunicación del propósito a todos los niveles.',
    'La empresa posee un propósito claro y bien comunicado que impacta positivamente tanto en sus empleados como en la comunidad. Las decisiones se alinean consistentemente con la misión y valores, lo que permite a la empresa diferenciarse claramente de la competencia. Los empleados están comprometidos y comprenden plenamente la visión de la empresa.',
  ],
  como: [
    'La empresa enfrenta serias dificultades en la implementación y mejora de sus procesos internos. La calidad de los productos o servicios es inconsistente y la capacitación de los empleados es insuficiente. La falta de elementos diferenciadores y la necesidad de revisión continua de los procesos internos son áreas críticas a abordar.',
    'La empresa tiene algunos procesos establecidos, pero aún hay margen significativo para mejorar la calidad de sus productos o servicios. La capacitación de los empleados es adecuada en algunas áreas, pero no en todas. Aunque hay algunos elementos diferenciadores, estos no son suficientes para destacarse claramente en el mercado.',
    'La empresa cuenta con procesos sólidos para asegurar la calidad y una capacitación adecuada para los empleados. Ofrece elementos que la diferencian de la competencia y revisa sus procesos internos regularmente. Sin embargo, siempre hay espacio para mejorar y alcanzar niveles de excelencia.',
    'La empresa tiene procesos efectivos y bien establecidos que garantizan la calidad de sus productos o servicios. Los empleados están altamente capacitados y la empresa se destaca claramente de la competencia con ofertas únicas. Los procesos internos se revisan y mejoran constantemente, manteniendo un alto estándar de calidad.',
  ],
  que: [
    'La empresa tiene dificultades para entender y satisfacer las necesidades de su público objetivo. La innovación es limitada y la empresa no mide regularmente la satisfacción del cliente. Los canales de distribución también presentan deficiencias que afectan la entrega de productos o servicios.',
    'La empresa está comenzando a identificar a su público objetivo, pero aún enfrenta desafíos para satisfacer plenamente sus necesidades. Hay esfuerzos moderados de innovación y se realizan algunas encuestas de satisfacción del cliente. Los canales de distribución son funcionales pero pueden ser optimizados.',
    'La empresa tiene una buena comprensión de su público objetivo y sus productos o servicios satisfacen adecuadamente sus necesidades. La innovación es notable y se realizan encuestas de satisfacción regularmente. Los canales de distribución son efectivos y bien gestionados.',
    'La empresa entiende claramente a su público objetivo y sus productos o servicios satisfacen plenamente sus necesidades. La empresa es altamente innovadora y mide frecuentemente la satisfacción del cliente. Los canales de distribución son eficientes y garantizan un excelente servicio al cliente.',
  ],
};

const TEXTS_RADAR = {
  conocimientoCliente: [
    'Se le dificulta describir quién es su cliente.',
    'Solo describe al cliente desde una segmentación tradicional de mercado (estrato, edad, etc.).',
    'Conoce su cliente, lo describe desde su estilo de vida, hábitos de consumo, comportamient, tareas por hace, dolores, alegrías.',
    'Identifica, además, si su negoci atiende solo uno o varios tipos de clientes. Diferencia en su negocio al cosumidor, el comprador y/o el cliente.',
  ],
  conocimientoNegocio: [
    'Se le dificulta definir el negocio en el que está (quién es el clientem que tarea resuelve y cuáles son los productos o servicios que ofrece).',
    'Identifica en qué negocio está pero no cómo se diferencia de sus competidores.',
    'Identifica los recursos, actividades y aliados claves de su negocio.',
    'Identifica el negocio en el que está y lo que sabe hacer mejor que sus competidores (capacidades distintivas). Además mantiene relaciones sanas con sus aliados claves.',
  ],
  coherenciaModeloNegocio: [
    'La propuesta de valor no es clara y se limita a la descripción del producto.',
    'Existe una propuesta de valor definida y clara, pero ésta no es plenamente coherente con el perfil del cliente.',
    'Existe coherencia entre la propuesta de valor y el perfil del cliente, pero no con los demás elementos del modelo de negocio.',
    'Existe coherencia entre la definición del cliente, la propuesta de valor y los demás elementos del modelo de negocio.',
  ],
  alineacionComunicacionInterna: [
    'Lo que comunica la administración es diferente a lo que comunica el nivel operativo.',
    'Solo la administración conoce el propósito común.',
    'Las personas entrevistadas entán alineadas en los objetivos de su área funcional, pero no con el propósito común.',
    'El área administrativa y operativa le apuntan a un propósito común.',
  ],
  saludFinanciera: [
    'No se lleva información financiera de manera sistemática.',
    'Los resultados financieros no son positivos; la empresa presenta dificultades, principalmente de liquidez.',
    'Si bien los resultados financieros no son positivos, se llevan a cabo acciones deliberadas para mitigar los impactos y se tiene claridad de la ruta financiera por seguir.',
    'Los ingresos de operación son muy superiores a los costos de operación, quedando un margen operacional que permitirá crecer en el futuro.',
  ],
};

const TEXTS_CLOCK: any = {
  diferenciacion: {
    title: 'Diferenciación',
    text: 'Su empresa se encuentra en la categoría de Diferenciación. Esto significa que se destaca por ofrecer productos o servicios únicos y de alta calidad que justifican un precio más elevado. Sus clientes valoran las características innovadoras y distintivas que los diferencian de la competencia. Al enfocarse en la diferenciación, su empresa no solo satisface las necesidades básicas de los clientes, sino que también supera sus expectativas al proporcionar características, diseño y calidad superiores. Esta estrategia le permite crear una fuerte lealtad del cliente y justificar precios premium, lo que puede resultar en márgenes de beneficio más altos. Es esencial seguir invirtiendo en investigación y desarrollo, así como en marketing, para mantener esta ventaja competitiva y continuar destacándose en el mercado.',
  },
  diferenciacionSegmentada: {
    title: 'Diferenciación segmentada',
    text: 'Su empresa se encuentra en la categoría de Diferenciación Segmentada. Esto implica que se enfoca en un segmento específico del mercado, adaptando sus productos o servicios para satisfacer las necesidades particulares de un grupo de clientes. Al dirigirse a un nicho particular, su empresa puede ofrecer soluciones altamente personalizadas que resuelven problemas específicos o satisfacen deseos únicos de ese segmento. Esta estrategia permite capturar una cuota de mercado dedicada y construir relaciones sólidas con los clientes. Al continuar especializándose y comprendiendo profundamente las necesidades de su segmento objetivo, su empresa puede mantener una ventaja competitiva significativa y fomentar una lealtad duradera entre los clientes.',
  },
  estrategiasDestinadaFracaso: {
    title: 'Estrategias destinadas al fracaso',
    text: 'Su empresa se encuentra en la categoría de Estrategias Destinadas al Fracaso. Esto indica que actualmente enfrenta desafíos significativos en el mercado, posiblemente debido a una falta de valor percibido por los clientes en relación con el precio. Es crucial reevaluar su propuesta de valor y estrategias de mercado para mejorar su posición. Los productos o servicios ofrecidos pueden no estar cumpliendo con las expectativas de los clientes en términos de calidad, innovación o costo, lo que resulta en una percepción negativa y una baja demanda. Para revertir esta situación, es necesario realizar un análisis profundo del mercado y de los competidores, recoger retroalimentación de los clientes y considerar cambios estratégicos importantes en su oferta de productos, estructura de precios y estrategias de marketing.',
  },
  bajoPrecioValorAnadido: {
    title: 'Bajo precio/Valor añadido',
    text: 'Su empresa se encuentra en la categoría de Bajo Precio/Valor Añadido. Esto sugiere que compite principalmente en precio, ofreciendo productos o servicios a costos más bajos con un valor añadido limitado. Si bien esta estrategia puede atraer a clientes sensibles al precio, es importante considerar maneras de incrementar el valor percibido sin elevar significativamente los costos. Mantener precios bajos puede ser efectivo a corto plazo, pero para asegurar la sostenibilidad a largo plazo, su empresa debe buscar formas de diferenciarse ligeramente a través de mejoras en la calidad del producto, la atención al cliente o servicios adicionales que no aumenten considerablemente los costos. Esto puede ayudar a construir una base de clientes leales y protegerse contra las fluctuaciones del mercado y la competencia de precios.',
  },
  bajoPrecio: {
    title: 'Bajo precio',
    text: 'Su empresa se encuentra en la categoría de Bajo Precio. Esto significa que se esfuerza por ser el proveedor de menor costo en el mercado, atrayendo a clientes que buscan precios bajos. Esta estrategia requiere mantener costos operativos mínimos y encontrar formas eficientes de producción y distribución. La clave del éxito en esta categoría radica en optimizar continuamente la cadena de suministro, reducir los gastos generales y maximizar la eficiencia operativa. Si bien esta estrategia puede resultar en márgenes de beneficio reducidos, el volumen de ventas puede compensar esta desventaja. Además, es esencial mantener una vigilancia constante sobre los costos y buscar continuamente nuevas formas de mejorar la eficiencia para mantener la competitividad en el mercado.',
  },
  hibrida: {
    title: 'Híbrida',
    text: 'Su empresa se encuentra en la categoría de Estrategia Híbrida. Esto indica que ha logrado una combinación equilibrada entre ofrecer productos o servicios de buena calidad y mantener precios competitivos. Esta estrategia permite atraer a una amplia base de clientes al proporcionar una buena relación calidad-precio. Al adoptar un enfoque híbrido, su empresa puede beneficiarse tanto de la diferenciación como del bajo costo, creando una oferta que satisface las necesidades de los clientes que buscan tanto calidad como asequibilidad. Para mantener esta posición, es crucial seguir innovando y mejorando la eficiencia operativa, así como mantenerse atentos a las tendencias del mercado y las preferencias de los consumidores. Esta estrategia flexible le permite adaptarse rápidamente a los cambios en el mercado y mantener una ventaja competitiva.',
  },
};

export { TEXTS_GOLDEN_CIRCLE, TEXTS_RADAR, TEXTS_CLOCK };
