---
slug: /transfer/synchronization
sidebar_custom_props:
  icon: "img/icons/synchronization.svg"
---

# Синхронизация с панелью управления
Быстрая синхронизация проекта с i3 pro производится через [iRidium Transfer](https://dev.iridi.com/%D0%A1%D0%BB%D1%83%D0%B6%D0%B5%D0%B1%D0%BD%D0%B0%D1%8F:%D0%9C%D0%BE%D0%B9_%D1%8F%D0%B7%D1%8B%D0%BA/iRidium_Transfer). Для работы с iRidium Transfer авторизуйтесь в i3 pro используя логи и пароль интегратора с сайта iRidium Mobile.

Использование Transfer доступно только для интегратора, как отладочный инструмент. Для передачи проектов конечному пользователю используйте сервис [iRidium Cloud](https://dev.iridi.com/%D0%A1%D0%BB%D1%83%D0%B6%D0%B5%D0%B1%D0%BD%D0%B0%D1%8F:%D0%9C%D0%BE%D0%B9_%D1%8F%D0%B7%D1%8B%D0%BA/IRidium_Cloud).

Шаги для загрузки интерфейса визуализации на панель управления. Панель управления и ваш ПК должны находиться в одной IP сети.
<img src="/img/screenshots/synchronization_1.png" alt="synchronization_1" width="100%" />

## Добавление панели управления в Transfer {#adding_control_panel}
<img src="/img/screenshots/synchronization_2.png" alt="synchronization_2" width="300 px" />

1. Запустите приложение i3 pro на панели управления и iRidium Transfer на ПК
2. Нажмите клавишу  поиск панели в Transfer - появится полоса сканирования сети

:::info Внимание
Если поиск не работает, изучите инструкцию "Устранение проблем"
:::

## Добавление проекта в Transfer {#adding_project}
Перенесите файл проекта (*.irpz) в iRidium Transfer. Быстро отправить файл проекта из iRidium Studio в Transfer можно, нажав кнопку "Send To Panel" на панели инструментов

## Подготовка проекта {#preparing_project}
Панель управления имеет два красных поля:
- Выберите проект, который хотите загрузить на панель управления
- Настройте его параметры, если это необходимо
- Выберите панель управления, на которую хотите загрузить проект
<img src="/img/screenshots/synchronization_3.png" alt="synchronization_3" width="100%" />

## Синхронизация Transfer и панели {#transfer_dashboard}

**Нажмите Reload в Transfer**
- приложение i3 pro запущено и развернуто на панели управления
- индикатор панели в Transfer - зеленый

**Нажмите "Send To Transfer" в Studio**
- приложение i3 pro запущено и развернуто на панели управления
- укажите, на какую панель управления отправить проект
<img src="/img/screenshots/synchronization_4.png" alt="synchronization_4" width="100%" />
:::info Внимание
 Если проект не обновляется, индикатор панели не становится зеленым, изучите инструкцию "Устранение проблем"
:::