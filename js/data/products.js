export const categories = [
  { id: "panels",      name: "Панели управления" },
  { id: "detectors",   name: "Извещатели" },
  { id: "accessories", name: "Аксессуары" },
];

export const products = [

  {
    id: "ajax-hub-2",
    category: "panels",
    brand: "Ajax",
    title: "Ajax Hub 2",
    description: "Радиоканальная панель с поддержкой фото-верификации тревог и работы без интернета.",
    image: "resources/images/catalog/panels/ajax-hub-2.jpg",
    basePrice: 320,
    currency: "$",
    params: [
      {
        id: "connection",
        label: "Тип связи",
        default: "gsm",
        options: [
          { value: "gsm",      label: "GSM",      priceModifier: 0,  descNote: "Связь через SIM-карту" },
          { value: "wifi",     label: "Wi-Fi",    priceModifier: 15, descNote: "Связь через Wi-Fi сеть" },
          { value: "ethernet", label: "Ethernet", priceModifier: 25, descNote: "Проводное подключение" },
        ],
      },
      {
        id: "kit",
        label: "Комплектация",
        default: "base",
        options: [
          { value: "base", label: "Базовая",         priceModifier: 0,   descNote: "Только панель" },
          { value: "plus", label: "+2 извещателя",   priceModifier: 80,  descNote: "Панель и 2 датчика движения" },
          { value: "pro",  label: "Pro-набор",       priceModifier: 200, descNote: "Панель, датчики движения и открытия" },
        ],
      },
    ],
    compatibleWith: ["ajax-motionprotect", "ajax-doorprotect", "ajax-combiprotect"],
    specs: {
      zones: 100,
      radioRange: "2000 м",
      power: "110–240 В",
      protocol: "Jeweller",
    },
  },

  {
    id: "ajax-hub-2-plus",
    category: "panels",
    brand: "Ajax",
    title: "Ajax Hub 2 Plus",
    description: "Флагманская панель с 4 каналами связи и поддержкой до 200 устройств.",
    image: "resources/images/catalog/panels/ajax-hub-2-plus.jpg",
    basePrice: 460,
    currency: "$",
    params: [
      {
        id: "connection",
        label: "Тип связи",
        default: "gsm-wifi",
        options: [
          { value: "gsm",       label: "GSM",           priceModifier: 0,  descNote: "SIM-карта" },
          { value: "gsm-wifi",  label: "GSM + Wi-Fi",   priceModifier: 20, descNote: "Два канала связи" },
          { value: "all",       label: "GSM + Wi-Fi + Ethernet", priceModifier: 45, descNote: "Три канала связи" },
        ],
      },
      {
        id: "kit",
        label: "Комплектация",
        default: "base",
        options: [
          { value: "base", label: "Базовая",   priceModifier: 0,   descNote: "Только панель" },
          { value: "plus", label: "+4 датчика", priceModifier: 160, descNote: "Движения и открытия" },
          { value: "pro",  label: "Pro-набор",  priceModifier: 320, descNote: "Полный стартовый набор" },
        ],
      },
    ],
    compatibleWith: ["ajax-motionprotect", "ajax-doorprotect", "ajax-combiprotect", "ajax-glassprotect"],
    specs: {
      zones: 200,
      radioRange: "2000 м",
      power: "110–240 В",
      protocol: "Jeweller",
    },
  },

  {
    id: "bolid-s2000m",
    category: "panels",
    brand: "Bolid",
    title: "С2000М",
    description: "Проводной пульт контроля и управления для построения систем любой сложности.",
    image: "resources/images/catalog/panels/bolid-s2000m.jpg",
    basePrice: 280,
    currency: "$",
    params: [
      {
        id: "interface",
        label: "Интерфейс",
        default: "rs485",
        options: [
          { value: "rs485", label: "RS-485", priceModifier: 0,  descNote: "Проводной интерфейс" },
          { value: "eth",   label: "Ethernet", priceModifier: 60, descNote: "Сетевой модуль" },
        ],
      },
      {
        id: "kit",
        label: "Комплектация",
        default: "base",
        options: [
          { value: "base", label: "Пульт",              priceModifier: 0,   descNote: "Базовое исполнение" },
          { value: "ip",   label: "Пульт + ИП модуль",  priceModifier: 90,  descNote: "С сетевым модулем" },
          { value: "pro",  label: "Комплект с БП",      priceModifier: 150, descNote: "С резервным питанием" },
        ],
      },
    ],
    compatibleWith: ["bolid-s2000-4", "bolid-s2000-2", "bolid-sirius"],
    specs: {
      zones: 2048,
      radioRange: "—",
      power: "12 В",
      protocol: "RS-485",
    },
  },

  {
    id: "bolid-s2000-4",
    category: "panels",
    brand: "Bolid",
    title: "С2000-4",
    description: "Прибор приёмно-контрольный на 4 шлейфа с контролем вскрытия корпуса.",
    image: "resources/images/catalog/panels/bolid-s2000-4.jpg",
    basePrice: 140,
    currency: "$",
    params: [
      {
        id: "loops",
        label: "Шлейфы",
        default: "4",
        options: [
          { value: "4",  label: "4 шлейфа", priceModifier: 0,   descNote: "Базовая конфигурация" },
          { value: "8",  label: "8 шлейфов (модуль)", priceModifier: 70, descNote: "Расширение" },
        ],
      },
      {
        id: "power",
        label: "Питание",
        default: "12v",
        options: [
          { value: "12v", label: "12 В", priceModifier: 0,  descNote: "Стандарт" },
          { value: "24v", label: "24 В", priceModifier: 20, descNote: "Повышенное" },
        ],
      },
    ],
    compatibleWith: ["bolid-s2000m", "bolid-sirius", "bolid-astron"],
    specs: {
      zones: 4,
      radioRange: "—",
      power: "12–24 В",
      protocol: "RS-485",
    },
  },

  {
    id: "hikvision-ax-pro",
    category: "panels",
    brand: "Hikvision",
    title: "AX PRO DS-PWA96",
    description: "Гибридная панель с поддержкой проводных и радиоканальных устройств.",
    image: "resources/images/catalog/panels/hikvision-ax-pro.jpg",
    basePrice: 390,
    currency: "$",
    params: [
      {
        id: "connection",
        label: "Связь",
        default: "wifi",
        options: [
          { value: "wifi",     label: "Wi-Fi",     priceModifier: 0,  descNote: "Беспроводная связь" },
          { value: "ethernet", label: "Ethernet",  priceModifier: 0,  descNote: "Проводная связь" },
          { value: "gsm",      label: "GSM (модуль)", priceModifier: 55, descNote: "Резервный канал" },
        ],
      },
      {
        id: "kit",
        label: "Комплектация",
        default: "base",
        options: [
          { value: "base", label: "Базовая",   priceModifier: 0,   descNote: "Только панель" },
          { value: "plus", label: "+3 датчика", priceModifier: 120, descNote: "Стартовый набор" },
          { value: "pro",  label: "Pro-набор",  priceModifier: 260, descNote: "Полный набор" },
        ],
      },
    ],
    compatibleWith: ["hikvision-pir", "hikvision-magnet", "hikvision-remote"],
    specs: {
      zones: 96,
      radioRange: "1200 м",
      power: "110–240 В",
      protocol: "Tri-X / CAM-X",
    },
  },

  {
    id: "dsc-powerseries",
    category: "panels",
    brand: "DSC",
    title: "PowerSeries Neo HS2016",
    description: "Проводная панель с поддержкой беспроводных зон и интеграцией с IP-модулями.",
    image: "resources/images/catalog/panels/dsc-powerseries.jpg",
    basePrice: 340,
    currency: "$",
    params: [
      {
        id: "zones",
        label: "Зоны",
        default: "16",
        options: [
          { value: "16", label: "16 зон", priceModifier: 0,   descNote: "Базовое расширение" },
          { value: "32", label: "32 зоны", priceModifier: 80, descNote: "Расширение платой" },
          { value: "64", label: "64 зоны", priceModifier: 160, descNote: "Максимум" },
        ],
      },
      {
        id: "ip",
        label: "IP-модуль",
        default: "none",
        options: [
          { value: "none", label: "Без модуля", priceModifier: 0,   descNote: "Локальная система" },
          { value: "yes",  label: "С IP-модулем", priceModifier: 90, descNote: "Удалённый доступ" },
        ],
      },
    ],
    compatibleWith: ["dsc-pir", "dsc-magnet", "dsc-keypad"],
    specs: {
      zones: 64,
      radioRange: "—",
      power: "16.5 В",
      protocol: "Coribus",
    },
  },

  {
    id: "rielta-signal-20",
    category: "panels",
    brand: "Rielta",
    title: "Сигнал-20М",
    description: "Прибор приёмно-контрольный на 20 шлейфов для средних и крупных объектов.",
    image: "resources/images/catalog/panels/rielta-signal-20.jpg",
    basePrice: 190,
    currency: "$",
    params: [
      {
        id: "loops",
        label: "Шлейфы",
        default: "20",
        options: [
          { value: "20", label: "20 шлейфов", priceModifier: 0,   descNote: "Стандарт" },
          { value: "40", label: "40 шлейфов", priceModifier: 120, descNote: "Два прибора" },
        ],
      },
      {
        id: "backup",
        label: "Резервное питание",
        default: "none",
        options: [
          { value: "none", label: "Без АКБ",    priceModifier: 0,  descNote: "Только сеть" },
          { value: "yes",  label: "С АКБ 7 Ач", priceModifier: 45, descNote: "Резерв до 24 ч" },
        ],
      },
    ],
    compatibleWith: ["rielta-astra-5", "rielta-astra-7", "rielta-siren"],
    specs: {
      zones: 20,
      radioRange: "—",
      power: "12 В",
      protocol: "RS-485",
    },
  },

  {
    id: "texecom-premier",
    category: "panels",
    brand: "Texecom",
    title: "Premier Elite 48",
    description: "Профессиональная проводная панель с расширяемой архитектурой.",
    image: "resources/images/catalog/panels/texecom-premier.jpg",
    basePrice: 420,
    currency: "$",
    params: [
      {
        id: "zones",
        label: "Зоны",
        default: "48",
        options: [
          { value: "48", label: "48 зон", priceModifier: 0,   descNote: "Базовая конфигурация" },
          { value: "96", label: "96 зон", priceModifier: 120, descNote: "Расширение" },
          { value: "168", label: "168 зон", priceModifier: 260, descNote: "Максимум" },
        ],
      },
      {
        id: "comms",
        label: "Модуль связи",
        default: "none",
        options: [
          { value: "none", label: "Без модуля",   priceModifier: 0,  descNote: "Локально" },
          { value: "gsm",  label: "GSM-модуль",   priceModifier: 95, descNote: "Мобильная связь" },
          { value: "ip",   label: "IP-модуль",    priceModifier: 85, descNote: "Через интернет" },
        ],
      },
    ],
    compatibleWith: ["texecom-pir", "texecom-magnet", "texecom-keypad"],
    specs: {
      zones: 168,
      radioRange: "—",
      power: "12 В",
      protocol: "Premier",
    },
  },



  {
    id: "ajax-motionprotect",
    category: "detectors",
    brand: "Ajax",
    title: "MotionProtect",
    description: "Беспроводной инфракрасный извещатель движения с дальностью до 12 м.",
    image: "resources/images/catalog/detectors/ajax-motionprotect.jpg",
    basePrice: 65,
    currency: "$",
    params: [
      {
        id: "detection",
        label: "Дальность",
        default: "12",
        options: [
          { value: "7",  label: "7 м",  priceModifier: -10, descNote: "Компактное помещение" },
          { value: "12", label: "12 м", priceModifier: 0,   descNote: "Стандартная" },
        ],
      },
      {
        id: "pet",
        label: "Защита от животных",
        default: "no",
        options: [
          { value: "no", label: "Нет",   priceModifier: 0,  descNote: "Без игнора" },
          { value: "yes", label: "До 20 кг", priceModifier: 15, descNote: "Игнорирует питомцев" },
        ],
      },
    ],
    compatibleWith: ["ajax-hub-2", "ajax-hub-2-plus"],
    specs: {
      type: "ИК",
      range: "12 м",
      angle: "88°",
      power: "Батарея CR123A",
    },
  },

  {
    id: "ajax-doorprotect",
    category: "detectors",
    brand: "Ajax",
    title: "DoorProtect",
    description: "Магнитоконтактный извещатель для дверей, окон и витрин.",
    image: "resources/images/catalog/detectors/ajax-doorprotect.jpg",
    basePrice: 45,
    currency: "$",
    params: [
      {
        id: "gap",
        label: "Зазор",
        default: "20",
        options: [
          { value: "10", label: "до 10 мм", priceModifier: 0,   descNote: "Стандарт" },
          { value: "20", label: "до 20 мм", priceModifier: 10,  descNote: "Увеличенный" },
        ],
      },
      {
        id: "mount",
        label: "Монтаж",
        default: "standard",
        options: [
          { value: "standard", label: "Накладной", priceModifier: 0,  descNote: "Открытый монтаж" },
          { value: "hidden",   label: "Скрытый",   priceModifier: 20, descNote: "Врезной" },
        ],
      },
    ],
    compatibleWith: ["ajax-hub-2", "ajax-hub-2-plus"],
    specs: {
      type: "Магнитоконтактный",
      gap: "20 мм",
      power: "Батарея CR2032",
      protocol: "Jeweller",
    },
  },

  {
    id: "ajax-combiprotect",
    category: "detectors",
    brand: "Ajax",
    title: "CombiProtect",
    description: "Комбинированный извещатель движения и разбития стекла.",
    image: "resources/images/catalog/detectors/ajax-combiprotect.jpg",
    basePrice: 95,
    currency: "$",
    params: [
      {
        id: "sensitivity",
        label: "Чувствительность стекла",
        default: "normal",
        options: [
          { value: "low",    label: "Низкая",     priceModifier: 0,  descNote: "Меньше ложных" },
          { value: "normal", label: "Нормальная", priceModifier: 0,  descNote: "Баланс" },
          { value: "high",   label: "Высокая",    priceModifier: 15, descNote: "До 2 мм стекла" },
        ],
      },
      {
        id: "pet",
        label: "Защита от животных",
        default: "no",
        options: [
          { value: "no",  label: "Нет",       priceModifier: 0,  descNote: "Стандарт" },
          { value: "yes", label: "До 20 кг",  priceModifier: 20, descNote: "С игнором питомцев" },
        ],
      },
    ],
    compatibleWith: ["ajax-hub-2", "ajax-hub-2-plus"],
    specs: {
      type: "ИК + акустический",
      range: "12 м",
      angle: "90°",
      power: "Батарея CR123A",
    },
  },

  {
    id: "ajax-glassprotect",
    category: "detectors",
    brand: "Ajax",
    title: "GlassProtect",
    description: "Акустический извещатель разбития стекла с микрофоном.",
    image: "resources/images/catalog/detectors/ajax-glassprotect.jpg",
    basePrice: 70,
    currency: "$",
    params: [
      {
        id: "range",
        label: "Дальность",
        default: "9",
        options: [
          { value: "6", label: "6 м", priceModifier: -10, descNote: "Небольшая комната" },
          { value: "9", label: "9 м", priceModifier: 0,   descNote: "Стандарт" },
        ],
      },
      {
        id: "mount",
        label: "Монтаж",
        default: "wall",
        options: [
          { value: "wall",    label: "На стену",     priceModifier: 0,  descNote: "Стандарт" },
          { value: "ceiling", label: "На потолок",   priceModifier: 15, descNote: "Для больших окон" },
        ],
      },
    ],
    compatibleWith: ["ajax-hub-2", "ajax-hub-2-plus"],
    specs: {
      type: "Акустический",
      range: "9 м",
      angle: "180°",
      power: "Батарея CR123A",
    },
  },

  {
    id: "bolid-sirius",
    category: "detectors",
    brand: "Bolid",
    title: "Сирена-ПРО",
    description: "Проводной ИК-извещатель движения для внутренней установки.",
    image: "resources/images/catalog/detectors/bolid-sirius.jpg",
    basePrice: 35,
    currency: "$",
    params: [
      {
        id: "range",
        label: "Дальность",
        default: "12",
        options: [
          { value: "10", label: "10 м", priceModifier: 0,  descNote: "Стандарт" },
          { value: "20", label: "20 м", priceModifier: 20, descNote: "Увеличенная" },
        ],
      },
      {
        id: "power",
        label: "Питание",
        default: "12v",
        options: [
          { value: "12v",  label: "12 В",   priceModifier: 0,  descNote: "Проводное" },
          { value: "batt", label: "Батарея", priceModifier: 15, descNote: "Автономное" },
        ],
      },
    ],
    compatibleWith: ["bolid-s2000-4", "bolid-s2000m"],
    specs: {
      type: "ИК",
      range: "12 м",
      angle: "90°",
      power: "12 В",
    },
  },

  {
    id: "bolid-astron",
    category: "detectors",
    brand: "Bolid",
    title: "Астра-5",
    description: "Объёмный ИК-извещатель с помехозащищённостью от ложных срабатываний.",
    image: "resources/images/catalog/detectors/bolid-astron.jpg",
    basePrice: 28,
    currency: "$",
    params: [
      {
        id: "range",
        label: "Дальность",
        default: "10",
        options: [
          { value: "10", label: "10 м", priceModifier: 0,  descNote: "Стандарт" },
          { value: "15", label: "15 м", priceModifier: 10, descNote: "Большие комнаты" },
        ],
      },
      {
        id: "immunity",
        label: "Помехозащита",
        default: "standard",
        options: [
          { value: "standard", label: "Стандарт",    priceModifier: 0,  descNote: "Базовый уровень" },
          { value: "high",     label: "Усиленная",   priceModifier: 15, descNote: "Для сложных условий" },
        ],
      },
    ],
    compatibleWith: ["bolid-s2000-4", "bolid-s2000m"],
    specs: {
      type: "ИК",
      range: "10 м",
      angle: "90°",
      power: "8–15 В",
    },
  },

  {
    id: "hikvision-pir",
    category: "detectors",
    brand: "Hikvision",
    title: "AX PRO PIR",
    description: "Радиоканальный ИК-извещатель с тройной технологией детекции.",
    image: "resources/images/catalog/detectors/hikvision-pir.jpg",
    basePrice: 55,
    currency: "$",
    params: [
      {
        id: "range",
        label: "Дальность",
        default: "12",
        options: [
          { value: "12", label: "12 м", priceModifier: 0,  descNote: "Стандарт" },
          { value: "15", label: "15 м", priceModifier: 12, descNote: "Повышенная" },
        ],
      },
      {
        id: "pet",
        label: "Защита от животных",
        default: "no",
        options: [
          { value: "no",  label: "Нет",      priceModifier: 0,  descNote: "Стандарт" },
          { value: "yes", label: "До 25 кг", priceModifier: 20, descNote: "С игнором питомцев" },
        ],
      },
    ],
    compatibleWith: ["hikvision-ax-pro"],
    specs: {
      type: "ИК, тройная детекция",
      range: "12 м",
      angle: "90°",
      power: "Батарея CR123A",
    },
  },

  {
    id: "hikvision-magnet",
    category: "detectors",
    brand: "Hikvision",
    title: "AX PRO Magnet",
    description: "Магнитоконтактный извещатель для дверей и окон.",
    image: "resources/images/catalog/detectors/hikvision-magnet.jpg",
    basePrice: 38,
    currency: "$",
    params: [
      {
        id: "gap",
        label: "Зазор",
        default: "25",
        options: [
          { value: "15", label: "до 15 мм", priceModifier: 0,  descNote: "Стандарт" },
          { value: "25", label: "до 25 мм", priceModifier: 8,  descNote: "Увеличенный" },
        ],
      },
      {
        id: "contact",
        label: "Тип контакта",
        default: "nc",
        options: [
          { value: "nc", label: "НЗ", priceModifier: 0,  descNote: "Нормально замкнутый" },
          { value: "no", label: "НР", priceModifier: 5,  descNote: "Нормально разомкнутый" },
        ],
      },
    ],
    compatibleWith: ["hikvision-ax-pro"],
    specs: {
      type: "Магнитоконтактный",
      gap: "25 мм",
      power: "Батарея CR2032",
      protocol: "Tri-X",
    },
  },

  {
    id: "rielta-astra-5",
    category: "detectors",
    brand: "Rielta",
    title: "Астра-5",
    description: "Объёмный ИК-извещатель с регулировкой чувствительности.",
    image: "resources/images/catalog/detectors/rielta-astra-5.jpg",
    basePrice: 30,
    currency: "$",
    params: [
      {
        id: "range",
        label: "Дальность",
        default: "12",
        options: [
          { value: "12", label: "12 м", priceModifier: 0,  descNote: "Стандарт" },
          { value: "18", label: "18 м", priceModifier: 15, descNote: "Повышенная" },
        ],
      },
      {
        id: "mount",
        label: "Монтаж",
        default: "wall",
        options: [
          { value: "wall",    label: "На стену",   priceModifier: 0,  descNote: "Стандарт" },
          { value: "ceiling", label: "На потолок", priceModifier: 10, descNote: "Потолочный кронштейн" },
        ],
      },
    ],
    compatibleWith: ["rielta-signal-20"],
    specs: {
      type: "ИК",
      range: "12 м",
      angle: "90°",
      power: "12 В",
    },
  },

  {
    id: "rielta-astra-7",
    category: "detectors",
    brand: "Rielta",
    title: "Астра-7",
    description: "Совмещённый извещатель движения и разбития стекла.",
    image: "resources/images/catalog/detectors/rielta-astra-7.jpg",
    basePrice: 65,
    currency: "$",
    params: [
      {
        id: "range",
        label: "Дальность ИК",
        default: "10",
        options: [
          { value: "10", label: "10 м", priceModifier: 0,  descNote: "Стандарт" },
          { value: "15", label: "15 м", priceModifier: 15, descNote: "Повышенная" },
        ],
      },
      {
        id: "glass",
        label: "Детекция стекла",
        default: "yes",
        options: [
          { value: "no",  label: "Отключена", priceModifier: -10, descNote: "Только ИК" },
          { value: "yes", label: "Включена",  priceModifier: 0,   descNote: "ИК + стекло" },
        ],
      },
    ],
    compatibleWith: ["rielta-signal-20"],
    specs: {
      type: "ИК + акустический",
      range: "10 м",
      angle: "90°",
      power: "12 В",
    },
  },

  {
    id: "dsc-pir",
    category: "detectors",
    brand: "DSC",
    title: "DSC LC-100PI",
    description: "Проводной ИК-извещатель движения с цифровой обработкой сигнала.",
    image: "resources/images/catalog/detectors/dsc-pir.jpg",
    basePrice: 42,
    currency: "$",
    params: [
      {
        id: "range",
        label: "Дальность",
        default: "11",
        options: [
          { value: "11", label: "11 м", priceModifier: 0,  descNote: "Стандарт" },
          { value: "15", label: "15 м", priceModifier: 12, descNote: "Повышенная" },
        ],
      },
      {
        id: "pet",
        label: "Защита от животных",
        default: "no",
        options: [
          { value: "no",  label: "Нет",      priceModifier: 0,  descNote: "Стандарт" },
          { value: "yes", label: "До 20 кг", priceModifier: 15, descNote: "Игнор питомцев" },
        ],
      },
    ],
    compatibleWith: ["dsc-powerseries"],
    specs: {
      type: "ИК",
      range: "11 м",
      angle: "90°",
      power: "12 В",
    },
  },

  {
    id: "dsc-magnet",
    category: "detectors",
    brand: "DSC",
    title: "DSC EV-DW4975",
    description: "Радиоканальный магнитоконтактный извещатель для дверей и окон.",
    image: "resources/images/catalog/detectors/dsc-magnet.jpg",
    basePrice: 50,
    currency: "$",
    params: [
      {
        id: "gap",
        label: "Зазор",
        default: "20",
        options: [
          { value: "12", label: "до 12 мм", priceModifier: 0,  descNote: "Стандарт" },
          { value: "20", label: "до 20 мм", priceModifier: 8,  descNote: "Увеличенный" },
        ],
      },
      {
        id: "tamper",
        label: "Тампер",
        default: "yes",
        options: [
          { value: "no",  label: "Нет",  priceModifier: -5, descNote: "Без защиты корпуса" },
          { value: "yes", label: "Есть", priceModifier: 0,  descNote: "Контроль вскрытия" },
        ],
      },
    ],
    compatibleWith: ["dsc-powerseries"],
    specs: {
      type: "Магнитоконтактный",
      gap: "20 мм",
      power: "Батарея CR2032",
      protocol: "PowerG",
    },
  },


  {
    id: "ajax-keypad",
    category: "accessories",
    brand: "Ajax",
    title: "KeyPad",
    description: "Беспроводная клавиатура с защитой от подбора кода и тампером.",
    image: "resources/images/catalog/accessories/ajax-keypad.jpg",
    basePrice: 85,
    currency: "$",
    params: [
      {
        id: "type",
        label: "Тип",
        default: "wireless",
        options: [
          { value: "wireless", label: "Радиоканал", priceModifier: 0,  descNote: "Без проводов" },
          { value: "wired",    label: "Проводная",  priceModifier: -15, descNote: "Проводное подключение" },
        ],
      },
      {
        id: "backlight",
        label: "Подсветка",
        default: "yes",
        options: [
          { value: "no",  label: "Нет",  priceModifier: -10, descNote: "Базовая версия" },
          { value: "yes", label: "Есть", priceModifier: 0,   descNote: "Подсветка клавиш" },
        ],
      },
    ],
    compatibleWith: ["ajax-hub-2", "ajax-hub-2-plus"],
    specs: {
      type: "Клавиатура",
      power: "Батарея AA ×4",
      protocol: "Jeweller",
    },
  },

  {
    id: "ajax-siren",
    category: "accessories",
    brand: "Ajax",
    title: "HomeSiren",
    description: "Внутренняя сирена с регулировкой громкости и LED-индикацией.",
    image: "resources/images/catalog/accessories/ajax-siren.jpg",
    basePrice: 55,
    currency: "$",
    params: [
      {
        id: "volume",
        label: "Громкость",
        default: "81",
        options: [
          { value: "81",  label: "81 дБ", priceModifier: 0,  descNote: "Внутренняя" },
          { value: "105", label: "105 дБ", priceModifier: 20, descNote: "Повышенная" },
        ],
      },
      {
        id: "battery",
        label: "Резервная батарея",
        default: "no",
        options: [
          { value: "no",  label: "Без АКБ", priceModifier: 0,  descNote: "От сети" },
          { value: "yes", label: "С АКБ",   priceModifier: 15, descNote: "Автономность" },
        ],
      },
    ],
    compatibleWith: ["ajax-hub-2", "ajax-hub-2-plus"],
    specs: {
      type: "Сирена",
      volume: "81–105 дБ",
      power: "Батарея CR123A ×2",
    },
  },

  {
    id: "bolid-siren",
    category: "accessories",
    brand: "Bolid",
    title: "Сирена-24",
    description: "Наружная сирена со вспышкой для уличной установки.",
    image: "resources/images/catalog/accessories/bolid-siren.jpg",
    basePrice: 70,
    currency: "$",
    params: [
      {
        id: "volume",
        label: "Громкость",
        default: "105",
        options: [
          { value: "105", label: "105 дБ", priceModifier: 0,  descNote: "Стандарт" },
          { value: "115", label: "115 дБ", priceModifier: 20, descNote: "Повышенная" },
        ],
      },
      {
        id: "mount",
        label: "Монтаж",
        default: "wall",
        options: [
          { value: "wall", label: "На стену", priceModifier: 0,  descNote: "Стандарт" },
          { value: "pole", label: "На столб", priceModifier: 15, descNote: "Кронштейн в комплекте" },
        ],
      },
    ],
    compatibleWith: ["bolid-s2000m", "bolid-s2000-4"],
    specs: {
      type: "Сирена наружная",
      volume: "105–115 дБ",
      power: "12 В",
    },
  },

  {
    id: "hikvision-remote",
    category: "accessories",
    brand: "Hikvision",
    title: "AX PRO Remote",
    description: "Радиобрелок с четырьмя кнопками и тревожной кнопкой.",
    image: "resources/images/catalog/accessories/hikvision-remote.jpg",
    basePrice: 30,
    currency: "$",
    params: [
      {
        id: "buttons",
        label: "Кнопки",
        default: "4",
        options: [
          { value: "2", label: "2 кнопки", priceModifier: -8, descNote: "Базовый" },
          { value: "4", label: "4 кнопки", priceModifier: 0,  descNote: "Стандарт" },
        ],
      },
      {
        id: "panic",
        label: "Тревожная кнопка",
        default: "yes",
        options: [
          { value: "no",  label: "Нет",  priceModifier: -5, descNote: "Без тревоги" },
          { value: "yes", label: "Есть", priceModifier: 0,  descNote: "SOS-режим" },
        ],
      },
    ],
    compatibleWith: ["hikvision-ax-pro"],
    specs: {
      type: "Брелок",
      power: "Батарея CR2032",
      protocol: "Tri-X",
    },
  },

  {
    id: "dsc-keypad",
    category: "accessories",
    brand: "DSC",
    title: "DSC HS2LCD",
    description: "Проводная ЖК-клавиатура с индикацией состояния зон.",
    image: "resources/images/catalog/accessories/dsc-keypad.jpg",
    basePrice: 95,
    currency: "$",
    params: [
      {
        id: "display",
        label: "Дисплей",
        default: "lcd",
        options: [
          { value: "lcd",  label: "ЖК",       priceModifier: 0,  descNote: "Символьный" },
          { value: "touch", label: "Сенсорный", priceModifier: 60, descNote: "Тач-панель" },
        ],
      },
      {
        id: "zones",
        label: "Индикация зон",
        default: "yes",
        options: [
          { value: "no",  label: "Нет",  priceModifier: -10, descNote: "Только статус" },
          { value: "yes", label: "Есть", priceModifier: 0,   descNote: "По зонам" },
        ],
      },
    ],
    compatibleWith: ["dsc-powerseries"],
    specs: {
      type: "Клавиатура",
      power: "12 В",
      protocol: "Coribus",
    },
  },

  {
    id: "rielta-siren",
    category: "accessories",
    brand: "Rielta",
    title: "Сирена-ПРО",
    description: "Внутренняя сирена с регулировкой тона и громкости.",
    image: "resources/images/catalog/accessories/rielta-siren.jpg",
    basePrice: 45,
    currency: "$",
    params: [
      {
        id: "volume",
        label: "Громкость",
        default: "95",
        options: [
          { value: "95",  label: "95 дБ", priceModifier: 0,  descNote: "Стандарт" },
          { value: "110", label: "110 дБ", priceModifier: 15, descNote: "Повышенная" },
        ],
      },
      {
        id: "tone",
        label: "Тон",
        default: "single",
        options: [
          { value: "single", label: "Один тон", priceModifier: 0,  descNote: "Стандарт" },
          { value: "multi",  label: "4 тона",   priceModifier: 10, descNote: "Настраиваемый" },
        ],
      },
    ],
    compatibleWith: ["rielta-signal-20"],
    specs: {
      type: "Сирена",
      volume: "95–110 дБ",
      power: "12 В",
    },
  },

  {
    id: "bolid-remote",
    category: "accessories",
    brand: "Bolid",
    title: "Брелок-2",
    description: "Радиобрелок для постановки и снятия с охраны.",
    image: "resources/images/catalog/accessories/bolid-remote.jpg",
    basePrice: 25,
    currency: "$",
    params: [
      {
        id: "buttons",
        label: "Кнопки",
        default: "4",
        options: [
          { value: "2", label: "2 кнопки", priceModifier: -5, descNote: "Базовый" },
          { value: "4", label: "4 кнопки", priceModifier: 0,  descNote: "Расширенный" },
        ],
      },
      {
        id: "case",
        label: "Корпус",
        default: "plastic",
        options: [
          { value: "plastic", label: "Пластик", priceModifier: 0,  descNote: "Стандарт" },
          { value: "metal",   label: "Металл",  priceModifier: 12, descNote: "Повышенная прочность" },
        ],
      },
    ],
    compatibleWith: ["bolid-s2000m", "bolid-s2000-4"],
    specs: {
      type: "Брелок",
      power: "Батарея CR2032",
    },
  },

  {
    id: "ajax-rele",
    category: "accessories",
    brand: "Ajax",
    title: "Relay",
    description: "Радиоканальное реле для управления внешними устройствами.",
    image: "resources/images/catalog/accessories/ajax-rele.jpg",
    basePrice: 50,
    currency: "$",
    params: [
      {
        id: "contacts",
        label: "Контакты",
        default: "no-nc",
        options: [
          { value: "no",    label: "НР",       priceModifier: 0,  descNote: "Нормально разомкнутый" },
          { value: "no-nc", label: "НР + НЗ",  priceModifier: 10, descNote: "Переключающий" },
        ],
      },
      {
        id: "load",
        label: "Нагрузка",
        default: "3",
        options: [
          { value: "3",  label: "до 3 кВт",  priceModifier: 0,  descNote: "Бытовая" },
          { value: "7",  label: "до 7 кВт",  priceModifier: 25, descNote: "Повышенная" },
        ],
      },
    ],
    compatibleWith: ["ajax-hub-2", "ajax-hub-2-plus"],
    specs: {
      type: "Реле",
      power: "110–240 В",
      protocol: "Jeweller",
    },
  },

];