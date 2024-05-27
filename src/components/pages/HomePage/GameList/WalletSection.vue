<template>
  <div class="w-full p-[15px_15px_0px] flex">
    <div
      class="flex flex-col justify-start items-center w-full bg-white border border-white z-[10] rounded-[23px] p-[20px]"
    >
      <div>
        <p class="font-bold text-[22px] text-black">₹0.00</p>
      </div>
      <div class="flex justify-center gap-[5px]">
        <img
          src="@/assets/gamelist/wallet.png"
          alt="Left Icon"
          class="w-[24px] h-[24px]"
        />
        <p class="text-black">Wallet balance</p>
      </div>
      <div class="flex justify-between w-full pt-[20px] game_top">
        <button class="bg-blue text-white">Withdraw</button>
        <button class="text-blue">Deposit</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.game_top button {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  border-width: 1px;
  border-color: #4784ff;
  border-radius: 30px;
  padding: 5px 40px;
}
</style>
