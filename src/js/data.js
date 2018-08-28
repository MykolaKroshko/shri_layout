var devices = [
  {
    name: 'Xiaomi Yeelight LED Smart Bulb',
    zone: 'kitchen',
    state: 1,
    type: 'lamp',
    description: 'Включено',
    icon: 'svg/icon_sun_yellow.svg',
    value: {
      max: 1000,
      min: 1,
      current: 300
    },
    presets: [
      {
        name: '1',
        value: 300
      }
    ]
  },
  {
    name: 'D-Link Omna 180 Cam',
    zone: 'kitchen',
    state: 2,
    type: 'cam',
    icon: 'svg/icon_sun.svg',
    description: 'Включится в 17:00'
  },
  {
    name: 'Elgato Eve Degree Connected',
    zone: 'room',
    state: 2,
    type: 'temp',
    icon: 'svg/icon_temperature.svg',
    description: 'Выключено до 17:00',
    value: {
      max: 30,
      min: -10,
      current: 23
    },
    presets: [
      {
        name: 'Холодно',
        value: 0
      },
      {
        name: 'Тепло',
        value: 24
      },
      {
        name: 'Жарко',
        value: 30
      }
    ]
  },
  {
    name: 'Xiaomi Warm Floor',
    zone: 'room',
    state: 1,
    type: 'floor',
    icon: 'svg/icon_sun.svg',
    description: 'Включено',
    value: {
      max: 40,
      min: 20,
      current: 23,
    },
  },
  {
    name: 'LIFX Mini Day & Dusk A60 E27',
    zone: 'room',
    state: 2,
    type: 'lamp',
    icon: 'svg/icon_sun_yellow.svg',
    description: 'Включится в 17:00'
  },
  {
    name: 'Philips Zhirui',
    state: 0,
    type: 'lamp',
    icon: 'svg/icon_sun.svg',
    description: 'Выключено'
  },
  {
    name: 'Xiaomi Mi Air Purifier 2S',
    state: 1,
    type: 'lamp',
    description: 'Включено',
    icon: 'svg/icon_sun_yellow.svg',
  },
];

var scenarios = [
  {
    icon: 'icon_sun_yellow',
    title: 'Выключить весь свет в доме и во дворе',
    description: '',
  },
  {
    icon: 'icon_scheduled',
    title: 'Я ухожу',
    description: '',
  },
  {
    icon: 'icon_sun_yellow',
    title: 'Включить свет<br/>в коридоре',
    description: '',
  },
  {
    icon: 'icon_temperature_yellow',
    title: 'Набрать горячую ванну',
    description: 'Начнётся в 18:00',
  },
  {
    icon: 'icon_temperature_yellow',
    title: 'Сделать пол тёплым во всей квартире',
    description: '',
  }
];

var closest_scenarios = [
  {
    icon: 'icon_temperature',
    device: 'Philips Cooler',
    description: 'Начнет охлаждать в 16:30',
  },
  {
    icon: 'icon_sun',
    device: 'Xiaomi Yeelight LED Smart Bulb',
    description: 'Включится в 17:00',
  },
  {
    icon: 'icon_temperature',
    device: 'Philips Cooler',
    description: 'Начнет охлаждать в 16:30',
  },
  {
    icon: 'icon_sun',
    device: 'Xiaomi Yeelight LED Smart Bulb',
    description: 'Включится в 17:00',
  },
  {
    icon: 'icon_temperature',
    device: 'Philips Cooler',
    description: 'Начнет охлаждать в 16:30',
  },
  {
    icon: 'icon_sun',
    device: 'Xiaomi Yeelight LED Smart Bulb',
    description: 'Включится в 17:00',
  },
];