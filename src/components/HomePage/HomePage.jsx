
import styles from "./styles.modules.scss";

const list = [
  {
    title: 'i3 pro',
    description: 'пользовательское приложение для управления Умным домом',
    pro: true
  },
  {
    title: 'iRidium studio',
    description: 'среда разработки интерфейсов и серверных проектов',
    pro: true
  },
  {
    title: 'База драйверов',
    description: 'база драйверов для различных систем (AMX, Crestron, Bacnet, Modbus, Helvar и т.д.)',
    pro: true
  },
  {
    title: 'iRidium cloud',
    description: 'облачный сервис для хранения проектов визуализации,  серверных проектов и лицензий',
    pro: true
  },
  {
    title: 'iRidium JavaScript API',
    description: 'набор функций и событий API iRidium и JavaScript 1.5, предназначенных для управления визуальной частью и драйверами в проектах iRidium',
    pro: true
  },
  {
    title: 'iRidium server',
    description: 'контроллер для систем автоматизации и IoT, предназначенный для сбора и анализа данных, экспорта и импорта баз данных, создания сценариев и расписаний',
    pro: true
  },
  {
    title: 'i3 pro',
    description: 'контроллер для систем автоматизации и IoT, предназначенный для сбора и анализа данных, экспорта и импорта баз данных, создания сценариев и расписаний'
  }
]

function ItemHero({ title, description }) {
  console.log(title);
  return (
    <div className={styles.hero__items}>
      <strong>{title}</strong>
      <p>{description}</p>
    </div>
  );
}


export default function HomePage() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__video}></div>
      <div className={styles.hero__block}>
        <div className="container">
          <div className="row">
            <div className="col">
              <img src="img/hero/hero-logo.svg" alt="logo: iRidi Wiki" />
              <p>универсальная интернет-энциклопедия со свободным контентом для размещения документации iRidi</p>
              ПОИСК
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hero__info}>
        <h2>Платформы iRidium</h2>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className={styles.hero__infoWrapper}>
                <div className={styles.hero__item}>
                  <h3>iRidium pro</h3>
                  <p>система управления (визуализация + сервер) для больших проектов автоматизации</p>
                  <div className={styles.hero__itemsWrap}>
                    {list.map((props, idx) => {
                      if (props.pro) {
                        return <ItemHero key={idx} {...props} />;
                      }
                    })}
                  </div>
                </div>
                <div className={styles.hero__item}>
                  <h3>iRidium pro</h3>
                  <p>система управления (визуализация + сервер) для больших проектов автоматизации</p>
                  <div className={styles.hero__itemsWrap}>
                    {list.map((props, idx) => {
                      <ItemHero key={idx} {...props} />;
                      ItemHero({ ...props });
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}