<script setup>
import GameListHeader from "@/components/pages/HomePage/GameList/GameListHeader.vue";
import WalletSection from "@/components/pages/HomePage/GameList/WalletSection.vue";
import NotificationBar from '@/components/pages/HomePage/NotificationBar.vue';
</script>

<template>
  <main>
    <div class="main-body">
      <GameListHeader />
      <div class="container relative bg-white_1">
        <div class="game_background" />
        <WalletSection />
        <NotificationBar />
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
                Trx Win Go <br />
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
          <div class="how_play_trx">
            <div
              class="w-full flex flex-col justify-center items-start gap-[5px]"
            >
              <button
                class="w-full border border-white rounded-full max-w-[80%] mt-[8px] flex justify-center items-center gap-[5px]"
              >
                <img
                  src="@/assets/gamelist/how_play_icon.png"
                  alt="Left Icon"
                  class="w-[20px] h-[20px]"
                />
                <p class="text-white text-[14px] font-[500]">How to play</p>
              </button>
              <p class="text-white text-[14px] font-[400] mx-[5px]">
                Win to 1Min
              </p>
              <div class="w-full flex jusitfy-between items-center gap-[5px]">
                <img
                  src="@/assets/gamelist/ball5.png"
                  alt="Left Icon"
                  class="w-full aspect-w-1 aspect-h-1 max-w-[27px]"
                />
                <img
                  src="@/assets/gamelist/ball9.png"
                  alt="Left Icon"
                  class="w-full aspect-w-1 aspect-h-1 max-w-[27px]"
                />
                <img
                  src="@/assets/gamelist/ball0.png"
                  alt="Left Icon"
                  class="w-full aspect-w-1 aspect-h-1 max-w-[27px]"
                />
                <img
                  src="@/assets/gamelist/ball9.png"
                  alt="Left Icon"
                  class="w-full aspect-w-1 aspect-h-1 max-w-[27px]"
                />
                <img
                  src="@/assets/gamelist/ball6.png"
                  alt="Left Icon"
                  class="w-full aspect-w-1 aspect-h-1 max-w-[27px]"
                />
              </div>
            </div>
            <div
              class="w-full flex flex-col justify-center items-end gap-[5px]"
            >
              <p class="text-white text-[14px] font-bold">Time remaining</p>
              <div
                class="flex jusitfy-between items-center gap-[5px] time_count"
              >
                <div class="first_clock">0</div>
                <div>0</div>
                <div>:</div>
                <div>0</div>
                <div class="last_clock">0</div>
              </div>
              <p class="text-white text-[18px] font-[500]">2024052611050</p>
            </div>
          </div>
        </div>
        <div class="w-full flex z-[10] p-[0px_15px]">
          <div
            class="w-full flex flex-col justify-center items-cetner gap-[15px] bg-white rounded-[10px] p-[8px_10px] white_shadow"
          >
            <div
              class="w-full flex justify-center items-center gap-[20px] color_section"
            >
              <button class="green_button">Green</button>
              <button class="violet_button">Violet</button>
              <button class="red_button">Red</button>
            </div>
            <div
              class="w-full grid grid-cols-5 bg-black_2 p-[10px] rounded-[15px]"
            >
              <img
                src="@/assets/gamelist/ball0.png"
                alt="Left Icon"
                class="w-[60px] h-[64px] mb-[5px]"
              />
              <img
                src="@/assets/gamelist/ball1.png"
                alt="Left Icon"
                class="w-[60px] h-[64px] mb-[5px]"
              />
              <img
                src="@/assets/gamelist/ball2.png"
                alt="Left Icon"
                class="w-[60px] h-[64px]"
              />
              <img
                src="@/assets/gamelist/ball3.png"
                alt="Left Icon"
                class="w-[60px] h-[64px] mb-[5px]"
              />
              <img
                src="@/assets/gamelist/ball4.png"
                alt="Left Icon"
                class="w-[60px] h-[64px] mb-[5px]"
              />
              <img
                src="@/assets/gamelist/ball5.png"
                alt="Left Icon"
                class="w-[60px] h-[64px]"
              />
              <img
                src="@/assets/gamelist/ball6.png"
                alt="Left Icon"
                class="w-[60px] h-[64px]"
              />
              <img
                src="@/assets/gamelist/ball7.png"
                alt="Left Icon"
                class="w-[60px] h-[64px]"
              />
              <img
                src="@/assets/gamelist/ball8.png"
                alt="Left Icon"
                class="w-[60px] h-[64px]"
              />
              <img
                src="@/assets/gamelist/ball9.png"
                alt="Left Icon"
                class="w-[60px] h-[64px]"
              />
            </div>
            <div
              class="w-full flex justify-center item-center gap-[5px] text-[14px] quality_button"
            >
              <button class="!bg-white border border-red text-red">
                Random
              </button>
              <button class="!bg-green text-white">X1</button>
              <button>X5</button>
              <button>X10</button>
              <button>X20</button>
              <button>X50</button>
              <button>X100</button>
            </div>
            <div
              class="w-full flex justify-center item-center text-[14px] big_small_button"
            >
              <button class="big_button min-w-[45%]">Big</button>
              <button class="small_button min-w-[45%]">Small</button>
            </div>
          </div>
        </div>
        <div class="w-full flex z-[10] p-[0px_15px]">
          <div
            class="w-full flex justify-center items-center gap-[10px] history_button"
          >
            <button class="selected_history">Game history</button>
            <button>Chart</button>
            <button>My history</button>
          </div>
        </div>
        <div
          class="w-full flex z-[10] p-[0px_15px] flex flex-col justify-center items-center"
        >
          <div
            class="w-full grid grid-cols-11 history_table bg-blue text-white text-[14px] font-bold"
          >
            <div class="col-span-4">Period</div>
            <div class="col-span-2">Number</div>
            <div class="col-span-2">Big Small</div>
            <div class="col-span-3">Color</div>
          </div>
          <div
            class="w-full grid grid-cols-11 h-[43px] bg-white text-[14px] font-bold mb-[3px]"
          >
            <div class="col-span-4 flex justify-center items-center">
              20240526011240
            </div>
            <div
              class="col-span-2 flex justify-center items-center text-[24px] font-bold text-green"
            >
              3
            </div>
            <div class="col-span-2 flex justify-center items-center">Small</div>
            <div class="col-span-3 flex justify-center items-center">
              <div class="w-[8px] h-[8px] bg-green rounded-full" />
            </div>
          </div>
          <div
            class="w-full grid grid-cols-11 h-[43px] bg-white text-[14px] font-bold mb-[3px]"
          >
            <div class="col-span-4 flex justify-center items-center">
              20240526011240
            </div>
            <div
              class="col-span-2 flex justify-center items-center text-[24px] font-bold text-[#fd565c]"
            >
              2
            </div>
            <div class="col-span-2 flex justify-center items-center">Small</div>
            <div class="col-span-3 flex justify-center items-center">
              <div class="w-[8px] h-[8px] bg-red rounded-full" />
            </div>
          </div>
          <div
            class="w-full grid grid-cols-11 h-[43px] bg-white text-[14px] font-bold mb-[3px]"
          >
            <div class="col-span-4 flex justify-center items-center">
              20240526011240
            </div>
            <div
              class="col-span-2 flex justify-center items-center text-[24px] font-bold number_0"
            >
              0
            </div>
            <div class="col-span-2 flex justify-center items-center">Big</div>
            <div class="col-span-3 flex justify-center items-center gap-[5px]">
              <div class="w-[8px] h-[8px] bg-red rounded-full" />
              <div class="w-[8px] h-[8px] bg-purple rounded-full" />
            </div>
          </div>
          <div
            class="w-full grid grid-cols-11 h-[43px] bg-white text-[14px] font-bold mb-[3px]"
          >
            <div class="col-span-4 flex justify-center items-center">
              20240526011240
            </div>
            <div
              class="col-span-2 flex justify-center items-center text-[24px] font-bold number_5"
            >
              5
            </div>
            <div class="col-span-2 flex justify-center items-center">Big</div>
            <div class="col-span-3 flex justify-center items-center gap-[5px]">
              <div class="w-[8px] h-[8px] bg-green rounded-full" />
              <div class="w-[8px] h-[8px] bg-purple rounded-full" />
            </div>
          </div>
        </div>
        <div class="w-full flex z-[10] p-[0px_15px_45px]">
          <div
            class="w-full h-[76px] bg-white flex justify-center items-center gap-[15px]"
          >
            <button class="arrow_button">{{ '<' }}</button>
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

.how_play_trx {
  background-image: url("@/assets/gamelist/trxbg-fc72fc04.png");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: black;
  border-width: 1px;
  border-radius: 20px;
  padding: 15px 10px;
}

.time_count div {
  background-color: #fff;
  color: #4781ff;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  padding: 1px 4.5px;
}

.time_count .first_clock {
  background: -webkit-linear-gradient(315deg, transparent 4.5pxpx, #fff 0) 0 0;
  background: linear-gradient(135deg, transparent 4.5px, #fff 0) 0 0;
}

.time_count .last_clock {
  background: -webkit-linear-gradient(135deg, transparent 4.5px, #fff 0) 0 0;
  background: linear-gradient(-45deg, transparent 4.5px, #fff 0) 0 0;
}

.white_shadow {
  box-shadow: 0 10px 20px #c5c5da40;
}

.color_section button {
  width: calc((100% - 14px) / 3);
  height: 36px;
  line-height: 17px;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  text-align: center;
}

.green_button {
  background: #40ad72;
  border-radius: 0 9px;
  box-shadow: 0 5px 10px #bae6b0;
}

.violet_button {
  background: #b659fe;
  box-shadow: 0 4px 10px #b988df;
  border-radius: 9px;
}

.red_button {
  background: #fd565c;
  border-radius: 9px 0;
  box-shadow: 0 5px 10px #f49d9d;
}

.quality_button button {
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 8px;
  background-color: #eeeeee;
}

.big_small_button {
  width: 100%;
  height: 40px;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
}

.big_small_button .big_button {
  background-color: #ffa82e;
  border-radius: 24px 0 0 24px;
}

.big_small_button .small_button {
  background: #6da7f4;
  border-radius: 0 24px 24px 0;
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

.number_0 {
  background: -webkit-linear-gradient(top, #fd565c 50.96%, #b659fe 50.97%);
  background: linear-gradient(182deg, #fd565c 50.96%, #b659fe 50.97%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.number_5 {
  background: -webkit-linear-gradient(top, #40ad72 51.48%, #b659fe 51.49%);
  background: linear-gradient(180deg, #40ad72 51.48%, #b659fe 51.49%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
