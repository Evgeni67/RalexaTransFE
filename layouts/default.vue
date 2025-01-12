<template>
  <div class="mainWrapper">
    <div class="landingPage ">
      <img :src="backgroundImg" class="background" />
      <div class="filter"></div>
      <div class="Content">
        <div class="header">
          <img class="logo" :src="logo" />
          <button class="contactUs" @click="scrollToContact">Свържете се с нас</button>
        </div>
        <div class="midTextSection">
          <div class="text">Движим</div>
          <div class="text">света</div>
          <div class="text">за вас</div>
        </div>
        <div class="subText">
          Професионални транспортни услуги в София и страната с товарни автомобили до 3,5 тона. Гарантирана надеждност и
          коректност.
        </div>
        <btn class="MainBtn" @click="scrollToWhyUs">За нас</btn>
      </div>
    </div>

    <div class="secondPage ">
      <div class="cardsContainer">
        <div v-for="element in cards" :key="element.text" class="card " :class="!element.isWhite && 'cardNotWhite'">
          <img :src="element.img" class="cardImg" />
          <span class="cardText">{{ element.text }}</span>
        </div>
      </div>
    </div>

    <div class="thirdPage ">
      <img :src="map" class="map" />
      <div class="bigCardsWrapper">
        <div v-for="bigCard in bigCards" :key="bigCard.title" class="bigCard ">
          <img class="bigCardImg" :src="bigCard.cardImg" />
          <div class="bigCardHeader">{{ bigCard.title }}</div>
          <div v-for="bigCardText in bigCard.subTexts" :key="bigCardText" class="bigCardText">{{ bigCardText }}</div>
        </div>
      </div>
      <img class="busImg" :src="busImg" />
    </div>

    <div class="fourthPage ">
      <div class="Texts">
        <div class="Heading">Защо нас?</div>
        <div class="main">"Бързина и ефективност"</div>
        <div class="sub">Оптимизираме маршрути и процеси, за да гарантираме скорост и качество.</div>
        <div class="main">"Модерна техника"</div>
        <div class="sub">Нашият автопарк отговаря на всички съвременни стандарти за безопасност и екологичност.</div>
        <div class="main">"На разположение 24/7"</div>
        <div class="sub">Ние сме тук, за да обслужваме вашите нужди, независимо от времето и мястото.</div>
        <div class="main">"Местен партньор, глобален обхват"</div>
        <div class="sub">Като българска фирма, ние разбираме местните нужди и предлагаме решения с международно качество.</div>
      </div>
      <div class="ImageWithBtn">
        <img :src="bulgaria" class="bulgaria" />
        <div class="MainBtn MainBtn2">Запазете транспорт сега</div>
      </div>
    </div>

    <div class="ContactFormWrapper ">
      <img :src="trucksblack" class="trucksBlack" />
      <div class="contactForm">
        <span class="contactHead">Свържете се с нас</span>
        <span class="label">Име *</span>
        <input v-model="formData.name" class="inputText" placeholder="Вашето име" />

        <span class="label">Имейл адрес *</span>
        <input v-model="formData.email" class="inputText" placeholder="Вашият имейл" type="email" />

        <span class="label">Компания</span>
        <input v-model="formData.company" class="inputText" placeholder="Име на компанията" />

        <span class="label">Телефонен номер *</span>
        <input v-model="formData.phone" class="inputText" placeholder="Вашият телефон" type="tel" />

        <button @click="submitForm" class="sendBtn">Изпрати</button>
      </div>
    </div>

    <div class="footer ">
      <div class="TopPart">
        <div v-for="column in footerInfo.columns" :key="column[0].text" class="columnWrapper">
          <div v-for="row in column" :key="row.text" class="column">
            <div class="Text">{{ row.text }}</div>
          </div>
        </div>
      </div>
      <div class="BottomPart"></div>
    </div>
  </div>
</template>

<script>
import background from '../assets/images/mainBackground.png';
import handshake from '../assets/images/handshake.png';
import truck from '../assets/images/truck.png';
import blank from '../assets/images/blank.png';
import map from '../assets/images/map.png';
import cityscape from '../assets/images/cityscape.png';
import cargo from '../assets/images/cargo.png';
import waterTruck from '../assets/images/waterTruck2.png';
import emergency from '../assets/images/emergency.png';
import busImg from '../assets/images/busImg.png';
import bulgaria from '../assets/images/bulgaria.png';
import trucksblack from '../assets/images/trucksblack.png';
import logo from '../assets/images/logo.png';

export default {
  name: 'DefaultLayout',
  data() {
    return {
      backgroundImg: background,
      map,
      trucksblack,
      busImg,
      logo,
      bulgaria,
      footerInfo: {
        columns: [
          [{ text: 'Text' }, { text: 'Text' }, { text: 'Text' }],
          [{ text: 'Text' }, { text: 'Text' }, { text: 'Text' }],
          [{ text: 'Text' }, { text: 'Text' }, { text: 'Text' }],
          [{ text: 'Text' }, { text: 'Text' }, { text: 'Text' }]
        ]
      },
      cards: [
        {
          img: handshake,
          text: 'Над 3000 успешно приключени товарни курса',
          isWhite: true
        },
        {
          img: truck,
          text: 'Ние обслужваме 20 различни индустрии по целият свят',
          isWhite: true
        },
        {
          img: blank,
          text: 'Сертификат за сигурност и надеждност',
          isWhite: false
        }
      ],
      bigCards: [
        {
          title: 'Консултантски услуги за логистика и транспорт',
          subTexts: [
            'Анализ на транспортните нужди на клиенти и оптимизация на логистичните процеси.',
            'Предложения за намаляване на разходите за транспорт чрез планиране на маршрути и консолидация на товари.',
            'Създаване на персонализирани логистични стратегии за фирми.'
          ],
          cardImg: cargo
        },
        {
          title: 'Транспорт за частни и корпоративни клиенти',
          subTexts: [
            'Транспорт на мебели и вещи – при премествания на домове или офиси',
            'Транспорт за събития – пренос на оборудване за изложения, концерти и събития.',
            'Абонаментен транспорт – дългосрочен договор за редовни превози.'
          ],
          cardImg: cityscape
        },
        {
          title: 'Превоз на горива и течности',
          subTexts: [
            'Специализирани цистерни за транспорт на горива, масла или други течности.',
            'Превоз на вода за хуманитарни цели или строителни обекти.'
          ],
          cardImg: waterTruck
        },
        {
          title: 'Извънреден и спешен транспорт',
          subTexts: [
            '24/7 логистика за спешни доставки на оборудване, медицински консумативи или критични части.',
            'Реакция при аварийни ситуации.'
          ],
          cardImg: emergency
        }
      ],
      formData: {
        name: '',
        email: '',
        company: '',
        phone: ''
      },
      apiUrl: 'https://ralexatrans.netlify.app/api/send-email'
    };
  },
  mounted() {
    this.setupScrollAnimations();
  },
  methods: {
    setupScrollAnimations() {
      const elements = document.querySelectorAll('.');
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      elements.forEach(el => observer.observe(el));
    },
    scrollToWhyUs() {
      const whyUsSection = document.querySelector('.fourthPage');
      if (whyUsSection) {
        whyUsSection.scrollIntoView({ behavior: 'smooth' });
      }
    },
    scrollToContact() {
      const contactSection = document.querySelector('.ContactFormWrapper');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    },
    async submitForm() {
      if (!this.formData.name || !this.formData.email || !this.formData.phone) {
        alert('Моля, попълнете всички задължителни полета.');
        return;
      }

      try {
        const response = await fetch(this.apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.formData.name,
            email: this.formData.email,
            company: this.formData.company || 'Не е посочено',
            phone: this.formData.phone
          })
        });

        if (response.ok) {
          alert('Вашето съобщение беше изпратено успешно!');
          this.formData = { name: '', email: '', company: '', phone: '' };
        } else {
          alert('Възникна проблем при изпращането на съобщението.');
        }
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Възникна грешка при свързване със сървъра.');
      }
    }
  }
};
</script>

<style scoped>
.footer {
  display: flex;
  width: 100%;
  background-color: white;
  flex-direction: column;
  position: relative;
  z-index: 5;
  padding: 30px;
  margin-top: 200px;
}

.TopPart {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.mainWrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}


.Content {
  display: flex;
  position: absolute;
  top: 0%;
  width: 100%;
  flex-direction: column;
}
.logo{
  width:200px;
}
.secondPage {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  background-color: #F3FFFD;

}

.thirdPage {
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  padding-top: 50px;
  background-color: #F3FFFD;
  z-index: 3;

}

.ContactFormWrapper {
  display: flex;
  width: 80%;
  margin: -80px auto;
  background-color: white;
}

.busImg {
  position: absolute;
  bottom: 0px;
  right: -30px;
  z-index: 0;
}

.bigCardsWrapper {
  display: flex;
  position: absolute;
  width: 100%;
  justify-content: center;
  align-items: center;
  top: 50px;
  gap: 25px;
  flex-wrap: wrap;
  margin: 0 auto;
  column-gap: 20px;
  z-index: 5;
}

.column{
  display: flex;
  flex-direction: column;
  gap:15px;

  &:first-child{
    font-weight: bold;
  }
}

.bigCardImg {
  width: 100px;
}

.bigCardText {
  text-align: center;
  margin-bottom: 10px;
}

.bigCardHeader {
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 25px;
  margin-top: 25px;
}

.bigCard {
  display: flex;
  backdrop-filter: blur(10px);
  /* Apply blur effect */
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-left: 15px;
  padding-right: 15px;
  flex-direction: column;
  width: 70%;
  max-width: 520px;
  min-width: 350px;
  height: 426px;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 15px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
}

.midTextSection {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 2.75rem;
  position: relative;
  z-index: 3;
}

.landingPage {
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
}




@media (max-width: 1080px) {
.trucksBlack{
  display: none !important;
}

.ContactFormWrapper{
  margin-top: -40px !important;
}

.inputText{
  width: 100% !important;

}

.contactForm{
  width: 100% !important;
  justify-content: center;
}

  .thirdPage {
    padding-bottom: 800px;
  }

  .header {
    height: 70px !important;
    padding-left: 10px !important;
    padding-right: 10px !important;
  }

  .contactUs {
    height: 35px !important;
  }

  .MainBtn {
    height: 30px !important;
    width: 120px !important;
  }

  .cardsContainer {
    margin-top: 20px !important;
  }
}

@media (max-width: 710px) {
  .subText {
    display: none !important;
  }

  .busImg {
    width: 300px;
  }

  .thirdPage {
    padding-bottom: 1320px;
  }

  .fourthPage {
    flex-direction: column;
  }
}
.columnWrapper{
  display: flex;
  flex-direction: column;
  gap:15px
}
.MainBtn {
  display: flex;
  width: 150px;
  height: 35px;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #00CCA6;
  border-radius: 15px;
  z-index: 4;
  margin: 20px auto;
  cursor: pointer;
}

.MainBtn2 {
  width: 230px !important;
  height: 50px !important;
  font-size: 1.25rem;
  margin-top: 0px;
}


.header {
  display: flex;
  top: 20px;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  z-index: 4;
  width: 100%;
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 40px;
}

.subText {
  display: flex;
  width: 400px;
  text-align: center;
  margin: 20px auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.25rem;
  letter-spacing: 1px;
  position: relative;
  z-index: 3;
}

.contactUs {
  display: flex;
  width: 170px;
  height: 52px;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #00CCA6;
  border-radius: 5px;
}

.background {
  width: 100%;
  min-width: 520px;
  height: auto;
}

.filter {
  position: absolute;
  background-color: black;
  opacity: 0.6;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;

}

.sendBtn{
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #00CCA6;
  color:white;
  justify-content: center;
  align-items: center;  font-size: 1.25rem;
  margin-top: 35px;
  border-radius: 5px;

}

.cardsContainer {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: -150px;
  z-index: 5;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 328px;
  padding: 40px;
  padding-top: 20px;
  background-color: white;
  height: 220px;
  font-weight: bold;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
  color: rgba(0, 0, 0, 0.85)
}

.cardImg {
  width: 50px;
  height: 50px;
}

.cardText {
  width: 80%;
  line-height: 35px;
  font-size: 1.25rem;

}

.cardNotWhite {
  color: white !important;
  background-color: #00CCA6;
}

.bulgaria {
  width: 300px;
}

.trucksBlack{
  width: 50%;
  height: auto;
}

.fourthPage {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #252b42;
  padding: 10%;
}

.Big {
  width: 100% !important;
  border-radius: 5px !important;
  height: 52px !important;
  font-size: 1.25rem;
}

.ImageWithBtn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center
}

.Heading {
  font-size: 1.75rem;
  font-weight: bold;

}

.main {
  font-size: 1.15rem;
}

.sub {
  margin-bottom: 15px;
}

.Texts {
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;
  width: 80%;
}

.contactForm {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
  padding: 25px;
}

.contactHead{
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 1.75rem;
  text-align: center;
  color: #252b42
  ;margin-top: 15px;
}

.label {
  font-weight: bold;
margin-top: 15px;
  border-radius: 5px;
}

.inputText {
  border-radius: 5px;
  border: 2px solid #dddddd77;
  background-color: #f9f9f9;
  max-width: 100%;
  height: 50px;
  padding-left: 15px;
}
. {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

..visible {
  opacity: 1;
  transform: translateY(0);
}

/* Add your existing styles here */
</style>