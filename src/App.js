import styles from "./RalexaLanding.module.scss";

import background from "./assets/images/logo2.jpg";
import handshake from "./assets/images/handshake.png";
import truck from "./assets/images/truck.png";
import blank from "./assets/images/blank.png";
import map from "./assets/images/map.png";
import cargo from "./assets/images/cargo.png";
import busImg from "./assets/images/busImg.png";
import bulgaria from "./assets/images/bulgaria.png";
import logo from "./assets/images/logo.png";

const App = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   company: "",
  //   phone: "",
  // });

  const cards = [
    {
      img: handshake,
      text: "Над 3000 успешно приключени товарни курса",
      isWhite: true,
    },
    {
      img: truck,
      text: "Ние обслужваме 20 различни индустрии по целият свят",
      isWhite: true,
    },
    {
      img: blank,
      text: "Сертификат за сигурност и надеждност",
      isWhite: false,
    },
  ];

  const bigCards = [
    {
      title: "Нашата мисия и техника",
      subTexts: [
        "Предлагаме транспортни услуги от град София и София област за цяла България.",
        "Разполагаме с бус Мерцедес Спринтер - самосвал и Мерцедес Спринтер фургон с падащ борд.",
        "Нашите служители са квалифицирани и с многогодишен опит в транспорта.",
      ],
      cardImg: truck,
    },
    {
      title: "Видове транспортни услуги",
      subTexts: [
        "Транспортни услуги с бус до 3,5 тона с падащ борд",
        "Транспорт със самосвал",
        "Превоз на всичко необходимо до 3,5 тона в София и страната",
      ],
      cardImg: cargo,
    },
    {
      title: "Защо да изберете нас",
      subTexts: [
        "Професионализъм, коректност и лоялност",
        "Ниски и разумни цени",
        "Работим за цялата страна и сме на разположение при всяка нужда",
      ],
      cardImg: handshake,
    },
  ];

  const footerInfo = {
    columns: [
      [
        { text: "Контакти" },
        { text: "Телефон: 0898662664" },
        { text: "Имейл: gurov77@abv.bg" },
      ],
      [
        { text: "Работно време" },
        { text: "Всеки ден: 08:00 - 20:00" },
        { text: "Работим за цялата страна" },
      ],
      [
        { text: "Услуги" },
        { text: "Транспорт с бус и самосвал" },
        { text: "До 3.5 тона" },
      ],
      [{ text: "" }, { text: "" }, { text: "", logo: true }],
    ],
  };

  // const scrollToSection = (className) => {
  //   const section = document.querySelector(`.${className}`);
  //   section && section.scrollIntoView({ behavior: "smooth" });
  // };

  // const submitForm = async () => {
  //   const { name, email, phone } = formData;
  //   if (!name || !email || !phone)
  //     return alert("Моля, попълнете всички задължителни полета.");

  //   try {
  //     const response = await fetch(
  //       "https://ralexatrans.netlify.app/api/send-email",
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           ...formData,
  //           company: formData.company || "Не е посочено",
  //         }),
  //       }
  //     );
  //     if (response.ok) {
  //       alert("Вашето съобщение беше изпратено успешно!");
  //       setFormData({ name: "", email: "", company: "", phone: "" });
  //     } else alert("Възникна проблем при изпращането на съобщението.");
  //   } catch (err) {
  //     console.error(err);
  //     alert("Възникна грешка при свързване със сървъра.");
  //   }
  // };

  return (
    <div className={styles.mainWrapper}>
      {/* Landing section */}
      <div className={styles.landingPage}>
        <img src={background} className={styles.background} alt="background" />
        <div className={styles.filter}></div>
        <div className={styles.Content}>
          <div className={styles.header}>
            <img className={styles.logo} src={logo} alt="logo" />
            <a href="tel:0898662664" className={styles.contactUs}>
              Свържете се с нас
            </a>
          </div>
          <div className={styles.midTextSection}>
            <div className={styles.text}>Движим</div>
            <div className={styles.text}>света</div>
            <div className={styles.text}>за вас</div>
          </div>
          <div className={styles.subText}>
            Професионални транспортни услуги в София и страната с товарни
            автомобили до 3,5 тона. Гарантирана надеждност и коректност.
          </div>
          <a href="tel:0898662664" className={styles.MainBtn}>
            Обади се
          </a>
        </div>
      </div>

      {/* Cards */}
      <div className={styles.secondPage}>
        <div className={styles.cardsContainer}>
          {cards.map((el) => (
            <div
              key={el.text}
              className={`${styles.card} ${
                !el.isWhite ? styles.cardNotWhite : ""
              }`}
            >
              <img src={el.img} className={styles.cardImg} alt="card" />
              <span className={styles.cardText}>{el.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Service Cards */}
      <div className={styles.thirdPage}>
        <img src={map} className={styles.map} alt="map" />
        <div className={styles.bigCardsWrapper}>
          {bigCards.map((card) => (
            <div key={card.title} className={styles.bigCard}>
              <img className={styles.bigCardImg} src={card.cardImg} alt="big" />
              <div className={styles.bigCardHeader}>{card.title}</div>
              {card.subTexts.map((t) => (
                <div key={t} className={styles.bigCardText}>
                  {t}
                </div>
              ))}
            </div>
          ))}
        </div>
        <img className={styles.busImg} src={busImg} alt="bus" />
      </div>

      {/* Why Us */}
      <div className={styles.fourthPage}>
        <div className={styles.Texts}>
          <div className={styles.Heading}>Защо нас?</div>
          <div className={styles.main}>"Професионализъм и надеждност"</div>
          <div className={styles.sub}>
            Доверете се на опитен екип с гарантирано качество на услугата.
          </div>
          <div className={styles.main}>"Гъвкавост на услугите"</div>
          <div className={styles.sub}>
            Предлагаме различни видове транспорт, съобразени с нуждите на
            клиента.
          </div>
          <div className={styles.main}>"Достъпни цени"</div>
          <div className={styles.sub}>
            Цените се договарят индивидуално за максимална изгодност.
          </div>
        </div>
        <div className={styles.ImageWithBtn}>
          <img src={bulgaria} className={styles.bulgaria} alt="bg" />
          <a
            href="tel:0898662664"
            className={`${styles.MainBtn} ${styles.MainBtn2}`}
          >
            Свържете се с нас
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <div className={styles.TopPart}>
          {footerInfo.columns.map((column, i) => (
            <div className={styles.columnWrapper} key={i}>
              {column.map((row, j) => (
                <div className={styles.column} key={j}>
                  <div className={styles.Text}>{row.text}</div>
                  {row.logo && (
                    <img src={logo} className={styles.logo} alt="footer logo" />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className={styles.BottomPart}></div>
      </div>
    </div>
  );
};

export default App;

/* <div className={styles.ContactFormWrapper}>
        <img src={trucksblack} className={styles.trucksBlack} alt="trucks" />
        <div className={styles.contactForm}>
          <span className={styles.contactHead}>Свържете се с нас</span>
          <label className={styles.label}>Име *</label>
          <input
            className={styles.inputText}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Вашето име"
          />

          <label className={styles.label}>Имейл адрес *</label>
          <input
            className={styles.inputText}
            value={formData.email}
            type="email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Вашият имейл"
          />

          <label className={styles.label}>Компания</label>
          <input
            className={styles.inputText}
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
            placeholder="Име на компанията"
          />

          <label className={styles.label}>Телефонен номер *</label>
          <input
            className={styles.inputText}
            value={formData.phone}
            type="tel"
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            placeholder="Вашият телефон"
          />

          <button className={styles.sendBtn} onClick={submitForm}>
            Изпрати
          </button>
        </div>
      </div> */
