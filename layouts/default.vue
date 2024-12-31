<template>
  <div class="mainWrapper">
    <div class="landingPage">
      <img :src="backgroundImg" class="background" />
      <div class="filter"> </div>
      <div class="Content">
        <div class="header">
          <div class="logo"> RALEXATRANS</div>
          <button class="contactUs">Свържете се с нас </button>

        </div>
        <div class="midTextSection">
          <div class="text">Движим </div>
          <div class="text"> света</div>
          <div class="text">за вас </div>
        </div>
        <div class="subText">
          Професионални транспортни услуги в София и страната с товарни автомобили до 3,5 тона. Гарантирана надеждност и
          коректност. </div>
        <btn class="MainBtn">За нас </btn>
      </div>
    </div>
    <div class="secondPage">
      <div class="cardsContainer">
        <div class="card">Card </div>
        <div class="card">Card</div>
        <div class="card">Card</div>
      </div>
    </div>

  </div>
</template>

<script>
import background from '../assets/images/mainBackground.png'
import handshake from '../assets/images/handshake.png'
import truck from '../assets/images/truck.png'
import blank from '../assets/images/blank.png'

export default {
  name: 'DefaultLayout',
  data() {
    return {
      backgroundImg: background,
      drawer: false,
      fixed: false,
    }
  }
}
</script>

<style scoped>
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

.secondPage {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
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

@media (max-width: 600px) {
  .subText {
    display: none !important;
  }

  .header {height: 70px !important; padding-left: 10px !important; padding-right: 10px !important;}

  .contactUs{
    height: 35px !important;
  }

  .MainBtn{
    height: 30px !important;
    width: 120px !important;
  }
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
}


.header {
  display: flex;
  top: 0px;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  z-index: 4;
  width: 100%;
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

.cardsContainer {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.card {
  display: flex;
  width: 328px;
  background-color: white;
  height: 254px;
}
</style>