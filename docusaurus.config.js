// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'iRidi Wiki',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // URL work sites
  url: 'http://172.17.130.38/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'iRidi', // Usually your GitHub org/user name.
  projectName: 'iRidi.Wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          admonitions: {
            keywords: [
              'info',
              'success',
              'danger',
              'note',
              'tip',
              'warning',
              'important',
              'information',
            ],
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // метаданные
      metadata: [
        { name: 'keywords', content: 'iridi, documentation, iRidi Wiki,' },
      ],
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'Logo iRidi wiki',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: 'Основные компоненты',
            position: 'left',
            to: '/main_components',
            type: 'dropdown',
            items: [
              {
                label: 'Приложение i3 pro',
                href: '/i3pro'
              },
              {
                label: 'iRidi pro server',
                href: '/pro_server'
              },
              {
                label: 'iRidi Studio',
                href: '/studio'
              },
              {
                label: 'iRidi Studio (v. 1.3.8)',
                href: '/studio_v-1-3-8'
              }
            ]
          },
          {
            label: 'Другие',
            position: 'left',
            to: '/others',
            type: 'dropdown',
            items: [
              {
                label: 'Личный кабинет',
                href: '/personal_account'
              },
              {
                label: 'iRidium Cloud',
                href: '/cloud'
              },
              {
                label: 'iRidium Transfer',
                href: '/transfer'
              },
              {
                label: 'Push-уведомления',
                href: '/push_notifications'
              },
              {
                label: 'Лучшая практика',
                href: '/best_practice'
              }
            ]
          },
          {
            href: 'https://iridi.com/ru/',
            label: 'Оф. сайт',
            position: 'right',
          },
        ],
      },

      // Подвал сайта
      footer: {
        style: 'dark',
        links: [
          {
            title: 'О нас',
            items: [
              {
                label: 'Компания',
                to: 'https://iridi.com/ru/about_us/#profile',
              },
              {
                label: 'Команда',
                to: 'https://iridi.com/ru/about_us/#partners',
              },
              {
                label: 'История',
                to: 'https://iridi.com/ru/about_us/#history',
              },
              {
                label: 'Философия',
                to: 'https://iridi.com/ru/about_us/#scope',
              },
            ],
          },
          {
            title: 'Продукты',
            items: [
              {
                label: 'iRidium pro',
                to: 'https://iridi.com/ru/pro/',
              },
              {
                label: 'iRidium lite',
                to: 'https://iridi.com/ru/lite/',
              },
              {
                label: 'iRidium gate',
                to: 'https://iridi.com/ru/gate/',
              },
              {
                label: 'iRidium server',
                to: 'https://iridi.com/ru/server/',
              },
            ],
          },
          {
            title: 'Загрузки',
            items: [
              {
                label: 'iRidium pro',
                to: 'https://iridi.com/ru/download/software/v3/',
              },
              {
                label: 'iRidium lite',
                to: 'https://iridi.com/ru/download/software/v3_lite/',
              },
              {
                label: 'Другие версии',
                to: 'https://iridi.com/ru/download/software/v2/',
              },
              {
                label: 'Маркетинговые материалы',
                to: 'https://iridi.com/ru/download/software/v2/#tab4',
              },
            ],
          },
          {
            title: 'Партнёрство',
            items: [
              {
                label: 'Наши партнеры',
                to: 'https://iridi.com/ru/partners/#tab3',
              },
              {
                label: 'Партнерские программы',
                to: 'https://iridi.com/ru/partners/',
              },
              {
                label: 'Подать заявку на партнерство',
                to: 'https://iridi.com/ru/partners/become-a-partner.php?type=0',
              }
            ],
          },
          {
            title: 'Проекты',
            items: [
              {
                label: 'Умные дома',
                to: 'https://iridi.com/ru/projects/smart-homes/',
              },
              {
                label: 'Домашний кинотеатр',
                to: 'https://iridi.com/ru/projects/home_cinema/',
              },
              {
                label: 'Умные здания/Офисы',
                to: 'https://iridi.com/ru/projects/smart-buildings/',
              },
              {
                label: 'Больницы',
                to: 'https://iridi.com/ru/projects/hospital/',
              },
              {
                label: 'Отели',
                to: 'https://iridi.com/ru/projects/hotel/',
              },
              {
                label: 'Многоквартирные дома',
                to: 'https://iridi.com/ru/projects/apartment_building/',
              },
              {
                label: 'Специальные решения',
                to: 'https://iridi.com/ru/projects/industrial-systems/',
              },
              {
                label: 'Пользовательские случаи',
                to: 'https://iridi.com/ru/projects/ready-solutions/',
              }
            ],
          },
          {
            title: 'iRidium pro',
            items: [
              {
                label: 'Документация',
                to: 'https://dev.iridi.com/Main_page',
              },
              {
                label: 'FAQ',
                to: 'https://support.iridiummobile.net/knowledge-bases/6-archive-i3-pro-server-docs?lang=en',
              },
              {
                label: 'Форум',
                to: 'https://support.iridiummobile.net/communities/19-ru-russian?lang=ru',
              }
            ],
          },
          {
            title: 'iRidium lite',
            items: [
              {
                label: 'Документация',
                to: 'https://lite.iridiummobile.net/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0/en',
              },
              {
                label: 'Форум',
                to: 'https://support.iridiummobile.net/communities/19-ru-russian?lang=ru',
              }
            ],
          },
          {
            title: 'Поддержка',
            items: [
              {
                label: 'Онлайн курсы/Видео',
                to: 'https://iridi.com/ru/academy/',
              },
              {
                label: 'Рекомендуемое оборудование',
                to: 'https://iridi.com/ru/recommended/panels/',
              },
              {
                label: 'Другие версии',
                to: 'https://iridi.com/ru/support/#iridium2',
              }
            ],
          },
          {
            items: [
              {
                label: 'Политика конфиденциальности',
                to: 'https://s3.amazonaws.com/licensetext/registration_privacy_policy_may_2018_ru.html',
              },
              {
                label: 'Найти дилера',
                to: 'https://iridi.com/ru/find-a-dealer/',
              },
              {
                label: 'Новости',
                to: 'https://blog.iridi.com/ru/',
              },
              {
                label: 'YouTube',
                to: 'https://www.youtube.com/channel/UCl9ociaCoGdlMnFpreE7yXQ',
              },
              {
                label: 'Telegram',
                to: 'https://t.me/iRidiummobileRu',
              }
            ],
          },
        ],
        logo: {
          alt: 'Logo iRidi wiki',
          src: '/img/logo.svg',
        },
        //copyright: `Copyright ©${new Date().getFullYear()} Выполнили Дарья, Владимир и Оксана`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
