<script setup>
import GameListHeader from "@/components/pages/HomePage/GameList/GameListHeader.vue";
import WalletSection from "@/components/pages/HomePage/GameList/WalletSection.vue";
import NavigationBar from '@/components/pages/HomePage/NotificationBar.vue';
</script>

<template>
  <main>
    <div class="main-body">
      <GameListHeader />
      <div class="container relative bg-white_1">
        <div class="game_background" />
        <WalletSection />
        <NavigationBar/>
        <div class="w-full flex z-[10] p-[0px_15px]">
          <div
            class="w-full flex justify-center items-center p-[3px] bg-white rounded-[10px] white_shadow"
          >
            <div
              class="flex flex-col justify-center items-start p-[5px_20px] active_clock"
            >
              <img
                src="@/assets/gamelist/time-1b645da4.png"
                alt="Left Icon"
                class="w-full aspect-w-1 aspect-h-1"
              />
              <p class="text-center text-[14px] leading-[100%] text-black_1">
                Win Go <br />
                1Min
              </p>
            </div>
            <div class="flex flex-col justify-center items-start p-[5px_20px]">
              <img
                src="@/assets/gamelist/time-1b645da4.png"
                alt="Left Icon"
                class="w-full aspect-w-1 aspect-h-1"
              />
              <p class="text-center text-[14px] leading-[100%] text-black_1">
                Win Go <br />
                3Min
              </p>
            </div>
            <div class="flex flex-col justify-center items-start p-[5px_20px]">
              <img
                src="@/assets/gamelist/time-1b645da4.png"
                alt="Left Icon"
                class="w-full aspect-w-1 aspect-h-1"
              />
              <p class="text-center text-[14px] leading-[100%] text-black_1">
                Win Go <br />
                5Min
              </p>
            </div>
            <div class="flex flex-col justify-center items-start p-[5px_20px]">
              <img
                src="@/assets/gamelist/time-1b645da4.png"
                alt="Left Icon"
                class="w-full aspect-w-1 aspect-h-1"
              />
              <p class="text-center text-[14px] leading-[100%] text-black_1">
                Win Go <br />
                10Min
              </p>
            </div>
          </div>
        </div>

        <div class="w-full flex z-[10] p-[0px_15px]">
          <div
            class="w-full flex flex-col justify-center items-center gap-[20px] bg-white rounded-[15px]"
          >
            <div class="w-full p-[0px_15px] flex justify-between items-center">
              <div
                class="w-full flex flex-col justify-center items-start gap-[5px] px-[5px]"
              >
                <div
                  class="w-full flex justify-start items-center gap-[15px] mt-[15px]"
                >
                  <p class="text-black_1 text-[14px]">Period</p>
                  <button
                    class="w-full border border-blue rounded-full max-w-[80%] flex justify-center items-center gap-[5px]"
                  >
                    <img
                      src="@/assets/gamelist/blue_wallet.png"
                      alt="Left Icon"
                      class="w-[20px] h-[20px]"
                    />
                    <p class="text-blue text-[14px] font-[500]">How to play</p>
                  </button>
                </div>
                <p class="text-black text-[22px] font-[700] mx-[5px]">
                  20240527090123
                </p>
              </div>
              <div
                class="w-full flex flex-col justify-center items-end gap-[5px]"
              >
                <p class="text-black_1 text-[14px] font-[400]">
                  Time remaining
                </p>
                <div
                  class="flex jusitfy-between items-center gap-[5px] k3time_count"
                >
                  <div>0</div>
                  <div>0</div>
                  <div>:</div>
                  <div>0</div>
                  <div>0</div>
                </div>
              </div>
            </div>
            <div class="w-full p-[0px_15px] flex">
              <div
                class="w-full p-[0px_15px] flex justify-between items-center k3_run_screen"
              >
                <div class="w-full k3_run_box">
                  <div class="k3_num3" />
                  <div class="k3_num1" />
                  <div class="k3_num5" />
                </div>
              </div>
            </div>
            <div
              class="w-full rounded-[15px] p-[0px_15px] flex flex-col justify-center items-center gap-[20px]"
            >
              <div
                class="w-full flex justify-center items-center gap-[5px] k3_degree"
              >
                <button class="active_button">Total</button>
                <button>2 same</button>
                <button>3 same</button>
                <button>Different</button>
              </div>
              <div>This is balll count section</div>
              <div class="w-full flex z-[10] p-[0px]">
                <div
                  class="w-full flex justify-center items-center gap-[10px] history_button"
                >
                  <button class="selected_history">Game history</button>
                  <button>Chart</button>
                  <button>My history</button>
                </div>
              </div>
              <div
                class="w-full flex z-[10] p-[0px] flex flex-col justify-center items-center"
              >
                <div
                  class="w-full grid grid-cols-12 history_table bg-blue text-white text-[14px] font-bold"
                >
                  <div class="col-span-5">Period</div>
                  <div class="col-span-2">sum</div>
                  <div class="col-span-5">Result</div>
                </div>
                <div
                  class="w-full grid grid-cols-12 h-[43px] bg-white text-[14px] font-bold mb-[3px] border-b border-b-black_2"
                >
                  <div class="col-span-4 flex justify-center items-center">
                    20240527090551
                  </div>
                  <div class="col-span-1 flex justify-center items-center">
                    5
                  </div>
                  <div class="col-span-2 flex justify-center items-center">
                    Small
                  </div>
                  <div class="col-span-2 flex justify-center items-center">
                    Odd
                  </div>
                  <div
                    class="col-span-3 flex justify-center items-center k3_record gap-[10px]"
                  >
                    <div class="w-[22px] h-[22px] k3_dice1" />
                    <div class="w-[22px] h-[22px] k3_dice3" />
                    <div class="w-[22px] h-[22px] k3_dice5" />
                  </div>
                </div>
                <div
                  class="w-full grid grid-cols-12 h-[43px] bg-white text-[14px] font-bold mb-[3px] border-b border-b-black_2"
                >
                  <div class="col-span-4 flex justify-center items-center">
                    20240527090551
                  </div>
                  <div class="col-span-1 flex justify-center items-center">
                    5
                  </div>
                  <div class="col-span-2 flex justify-center items-center">
                    Big
                  </div>
                  <div class="col-span-2 flex justify-center items-center">
                    Even
                  </div>
                  <div
                    class="col-span-3 flex justify-center items-center k3_record gap-[10px]"
                  >
                    <div class="w-[22px] h-[22px] k3_dice4" />
                    <div class="w-[22px] h-[22px] k3_dice5" />
                    <div class="w-[22px] h-[22px] k3_dice6" />
                  </div>
                </div>
                <div
                  class="w-full grid grid-cols-12 h-[43px] bg-white text-[14px] font-bold mb-[3px] border-b border-b-black_2"
                >
                  <div class="col-span-4 flex justify-center items-center">
                    20240527090551
                  </div>
                  <div class="col-span-1 flex justify-center items-center">
                    5
                  </div>
                  <div class="col-span-2 flex justify-center items-center">
                    Small
                  </div>
                  <div class="col-span-2 flex justify-center items-center">
                    Odd
                  </div>
                  <div
                    class="col-span-3 flex justify-center items-center k3_record gap-[10px]"
                  >
                    <div class="w-[22px] h-[22px] k3_dice1" />
                    <div class="w-[22px] h-[22px] k3_dice2" />
                    <div class="w-[22px] h-[22px] k3_dice3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex z-[10] p-[0px_15px_45px]">
          <div
            class="w-full h-[76px] bg-white flex justify-center items-center gap-[15px]"
          >
            <button class="arrow_button">{{'<'}}</button>
            <p class="text-[16px] text-bold">
              <span>1</span>/<span>1712</span>
            </p>
            <button class="arrow_button">></button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.main-body {
  background-color: #f7f8ff;
  width: 400px;
  min-height: 100vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  overflow-y: auto;
  gap: 20px;
}

.game_background {
  width: 100%;
  height: 315px;
  background: #4784ff;
  border-radius: 0 0 1.53333rem 1.53333rem;
  position: absolute;
  top: 0;
  left: 0;
}

.active_clock {
  background: -webkit-linear-gradient(
    top,
    #4da6ff 0%,
    rgba(127, 220, 237, 0.5) 100%
  );
  background: linear-gradient(
    180deg,
    #4da6ff 0%,
    rgba(127, 220, 237, 0.5) 100%
  );
  box-shadow: inset 0 -0.02667rem 0.08rem #dbfaff,
    inset 0 0.02667rem 0.08rem #dbfaff;
  border-radius: 0.26667rem;
  color: white !important;
}

.k3time_count div {
  background-color: #efeff4;
  color: #4784ff;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  padding: 1px 4.5px;
}

.white_shadow {
  box-shadow: 0 10px 20px #c5c5da40;
}

.k3_run_screen {
  height: 130px;
  background: #00b977;
  border-radius: 8px;
  position: relative;
  padding: 9px;
}

.k3_run_screen::before {
  background: #008b59;
  border-radius: 5px 0 0 5px;
  left: -5px;
  content: "";
  display: block;
  width: 5.5px;
  height: 30px;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 0;
}

.k3_run_screen::after {
  background: #008b59;
  border-radius: 0 5px 5px 0;
  right: -5px;
  content: "";
  display: block;
  width: 5.5px;
  height: 30px;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 0;
}

.k3_run_box {
  background: #003c26;
  border-radius: 6px;
  height: 100%;
  width: 100%;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 6px;
}

.k3_run_box::before {
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  border-right: 22px solid transparent;
  border-left: 22px solid #00b977;
  position: absolute;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  content: "";
  z-index: 3;
}

.k3_run_box::after {
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  border-left: 22px solid transparent;
  border-right: 22px solid #00b977;
  position: absolute;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  content: "";
  z-index: 3;
}

.k3_run_box div {
  width: calc((100% - 16.8px) / 3);
  height: 96.6px;
  background-color: #333;
  border-radius: 5.5px;
  position: relative;
  background-position: center;
  background-size: 70%;
  background-repeat: no-repeat;

  box-shadow: inset 0 -5.6px 5.6px #0000004d, inset 0 5.6px 5.6px #0000004d;
}

.k3_num3 {
  background-image: url("@/assets/gamelist/num3.png");
}

.k3_num1 {
  background-image: url("@/assets/gamelist/num1.png");
}

.k3_num2 {
  background-image: url("@/assets/gamelist/num2.png");
}

.k3_num4 {
  background-image: url("@/assets/gamelist/num4.png");
}

.k3_num5 {
  background-image: url("@/assets/gamelist/num5.png");
}

.k3_num6 {
  background-image: url("@/assets/gamelist/num6.png");
}

.k3_degree button {
  text-align: center;
  width: calc(25% - 1px);
  height: 42px;
  background: #f6f6f6;
  border-radius: 5.6px 5.6px 0 0;
  font-size: 12px;
  font-weight: 500;
}

.k3_degree .active_button {
  background-color: #4784ff;
  color: white;
}

.history_table {
  height: 42px;
  background: #4781ff;
  border-radius: 5px 5px 0 0;
  font-weight: 700;
  color: #fff;
}

.history_table div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.history_button button {
  width: calc((100% - 24px) / 3);
  height: 40px;
  background: #e8e7e8;
  border-radius: 8px;
  font-size: 12px;
  color: #333;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
}

.selected_history {
  background: -webkit-linear-gradient(
    324.57deg,
    #4ca6ff 12.38%,
    #7ddced 87.13%
  ) !important;
  background: linear-gradient(
    125.43deg,
    #4ca6ff 12.38%,
    #7ddced 87.13%
  ) !important;
  box-shadow: inset 0 -2.5px 5.5px #dbfaff !important;
  font-weight: 600;
  color: #fff !important;
}

.k3_record div {
  width: 22px;
  height: 22px;
  background-repeat: no-repeat;
  background-size: 22px;
  background-position: center;
}

.k3_dice1 {
  background-image: url("@/assets/gamelist/dice_1.png");
}

.k3_dice2 {
  background-image: url("@/assets/gamelist/dice_2.png");
}

.k3_dice3 {
  background-image: url("@/assets/gamelist/dice_3.png");
}

.k3_dice4 {
  background-image: url("@/assets/gamelist/dice_4.png");
}

.k3_dice5 {
  background-image: url("@/assets/gamelist/dice_5.png");
}

.k3_dice6 {
  background-image: url("@/assets/gamelist/dice_6.png");
}

.arrow_button {
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: #4781ff;
  color: white;
}

@media (max-width: 480px) {
  .main-body {
    width: 100%;
  }
}

@media (max-width: 375px) {
  .container {
    margin-top: 40px;
    margin-bottom: 50px;
    overflow-y: auto;
  }
}
</style>
