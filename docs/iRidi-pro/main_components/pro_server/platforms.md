---
sidebar_position: 1
slug: /pro_server/platforms
sidebar_custom_props:
  icon: "img/icons/platforms.svg"
---

# Платформы iRidium server

Информация об iRidium server на различных платформах (указаны рекомендованные нагрузки).

- [iRidi HS Server](https://dev.iridi.com/IRidi_HS_Server) - программная реализация iRidium server, которая запускается как демон или консольное приложение на контроллерах HS Server.
  - 25 панелей управления.
  - более 3000 тегов iRidium server (рекомендуется не более 7000).
- [ProAV Control Processor Basic](https://dev.iridi.com/%D0%A1%D0%BB%D1%83%D0%B6%D0%B5%D0%B1%D0%BD%D0%B0%D1%8F:%D0%9C%D0%BE%D0%B9_%D1%8F%D0%B7%D1%8B%D0%BA/IRidi_ProAV_Basic) - аппаратная платформа для запуска iRidium Server как демон или консольное приложение.
  - 25 панелей управления.
  - до 7000 тегов iRidium Server.
- [ProAV Control Processor Advanced](https://dev.iridi.com/%D0%A1%D0%BB%D1%83%D0%B6%D0%B5%D0%B1%D0%BD%D0%B0%D1%8F:%D0%9C%D0%BE%D0%B9_%D1%8F%D0%B7%D1%8B%D0%BA/IRidi_ProAV_Advanced) - аппаратная платформа для запуска iRidium Server как демон или консольное приложение.
  - 25 панелей управления.
  - до 7000 тегов iRidium Server.
- [iRidium server UMC](https://dev.iridi.com/%D0%A1%D0%BB%D1%83%D0%B6%D0%B5%D0%B1%D0%BD%D0%B0%D1%8F:%D0%9C%D0%BE%D0%B9_%D1%8F%D0%B7%D1%8B%D0%BA/IRidium_Server_UMC) - программная реализация iRidium server, которая запускается как демон или консольное приложение на контроллерах UMC Technology.
  - 25 панелей управления.
  - более 3000 тегов iRidium server (рекомендуется не более 7000).
- [iRidium server RPI](https://dev.iridi.com/%D0%A1%D0%BB%D1%83%D0%B6%D0%B5%D0%B1%D0%BD%D0%B0%D1%8F:%D0%9C%D0%BE%D0%B9_%D1%8F%D0%B7%D1%8B%D0%BA/IRidium_Server_Raspberry) - программная реализация iRidium server, которая запускается как демон или консольное приложение на контроллерах Raspberry Pi 3 модель B.
  - 15 панелей управления.
  - более 3000 тегов iRidium server (рекомендуется не более 5000).
- [iRidium server NUC/Windows](https://dev.iridi.com/%D0%A1%D0%BB%D1%83%D0%B6%D0%B5%D0%B1%D0%BD%D0%B0%D1%8F:%D0%9C%D0%BE%D0%B9_%D1%8F%D0%B7%D1%8B%D0%BA/IRidium_Server_Windows) - программная реализация iRidium server, которая запускается как консольное приложение или сервис на устройствах под управлением Windows 7/8/10.
  - 50 панелей управления.
  - более 6000 тегов iRidium server (рекомендуется не более 12000).
- [iRidium Server NUC/Linux](https://dev.iridi.com/%D0%A1%D0%BB%D1%83%D0%B6%D0%B5%D0%B1%D0%BD%D0%B0%D1%8F:%D0%9C%D0%BE%D0%B9_%D1%8F%D0%B7%D1%8B%D0%BA/IRidium_Server_Linux) - сервер для запуска на Linux.
  - 50 панелей управления.
  - более 6000 тегов iRidium server (рекомендуется не более 12000).
- [iRidi Pro Server (Digibird UniManager)](https://dev.iridi.com/%D0%A1%D0%BB%D1%83%D0%B6%D0%B5%D0%B1%D0%BD%D0%B0%D1%8F:%D0%9C%D0%BE%D0%B9_%D1%8F%D0%B7%D1%8B%D0%BA/IRidi_Digibirid_UniManager) - программная реализация iRidi Pro Server, которая запускается как демон или консольное приложение на контроллерах “Digibird UniManager B Series (1.5U Fixed Chassis)”.

### Сравнительная таблица Hardware вариантов iRidium server

<details>
  <summary>Сравнительная таблица Hardware вариантов iRidium server</summary>
  <table>
    <thead>
      <tr>
        <th>Характеристика</th>
        <th>HS Server</th>
        <th>ProAV Control Processor Basic</th>
        <th>ProAV Control Processor Advanced</th>
        <th>Raspberry pi</th>
        <th>iRidium server UMC</th>
        <th>Intel NUC</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Процессор</td>
        <td>RK3399 Rockchip 2 x Cortex-A72 2000 МГц, 4 x Cortex-A53</td>
        <td>RK3399 Rockchip 2 x Cortex-A72 2000 МГц, 4 x Cortex-A53</td>
        <td>RK3399 Rockchip 2 x Cortex-A72 2000 МГц, 4 x Cortex-A53</td>
        <td>1.2GHz Broadcom BCM2837 64bit CPU</td>
        <td>1GHz CPU NXP imx6</td>
        <td>Intel Celeron, Core i3, Core i5, Core i7</td>
      </tr>
      <tr>
        <td>Оперативная память</td>
        <td>2 Gb, DDR4</td>
        <td>2 Gb, DDR4</td>
        <td>2 Gb, DDR4</td>
        <td>1 GB</td>
        <td>512 MB</td>
        <td>4 GB</td>
      </tr>
      <tr>
        <td>Энергонезависимая память</td>
        <td>16 Gb, eMMC Flash</td>
        <td>16 Gb, eMMC Flash</td>
        <td>16 Gb, eMMC Flash</td>
        <td>8 GB flash</td>
        <td>4 GB flash</td>
        <td>60 GB SSD</td>
      </tr>
      <tr>
        <td>Дополнительные слоты</td>
        <td>USB Type-A (F) (USB 2.0) RS-485 RS-232 KNX TP1-256 CAN (Bus77)</td>
        <td>USB Type-A (F) (USB 2.0) CAN (Bus77) KNX TP1-256 RS-485/232 2 RS-232 2 универсальных входа R и V 2 слаботочных реле 2 ИК выхода ИК вход</td>
        <td>USB Type-A (USB 3.0) 2 CAN (Bus77) KNX TP1-256 2 RS-485/232 6 RS-232 10 универсальных входа R и V 10 слаботочных реле 8 ИК выхода ИК вход</td>
        <td>40-контактный удлиненный GPIO Модернизированный коммутируемый источник питания Micro USB до 2,5 А</td>
        <td>HDL KNX RS-485 Z-wave(скоро) CAN</td>
        <td>USB</td>
      </tr>
      <tr>
        <td>Количество тегов*</td>
        <td>более 3000</td>
        <td>до 7000</td>
        <td>до 7000</td>
        <td>более 3000</td>
        <td>более 3000</td>
        <td>более 6000</td>
      </tr>
      <tr>
        <td>Дополнительная информация</td>
        <td>Не рекомендуется использовать встроенную базу данных**</td>
        <td>Не рекомендуется использовать встроенную базу данных**</td>
        <td>Не рекомендуется использовать встроенную базу данных**</td>
        <td>Не рекомендуется использовать встроенную базу данных**</td>
        <td>Не рекомендуется использовать встроенную базу данных**</td>
        <td>Подходит для больших баз данных</td>
      </tr>
    </tbody>  
  </table>
</details>