<!-- routify:options index=1 -->
<script>
  import { goto } from "@roxi/routify";
  import BottomContainer from "./_components/BottomContainer.svelte";

  import Chart from "./analytics/_components/Chart.svelte";
  import InfoBar from "./analytics/_components/InfoBar.svelte";
  import InfoCard from "./analytics/_components/InfoCard.svelte";
  import { authFetch, getLastTransaction } from "./_api";
  import { onMount } from "svelte";
  import { entryCode } from "./goodsStores";
  import WideCard from "./_components/WideCard.svelte";
  import TransactionCard from "./analytics/_components/TransactionCard.svelte";

  let lastTransaction;

  onMount(async () => {
    // Пока всегда запрашиваем
    // if (!$entryCode) {
    let personalEditCode = await authFetch("users/profile").then(
      (r) => r.catalog.entry_code
    );

    entryCode.set(personalEditCode);
    localStorage.setItem("entryCode", personalEditCode);
    // }

    lastTransaction = await getLastTransaction();
  });

  //   import bg from "../../../assets/images/anal-bg.svg";
</script>

<style>
  .anal {
    background-color: #ff9e46;
    background-image: url("/images/anal-bg.svg");
    background-size: cover;
  }

  .anal > div {
    margin: auto;
    max-width: 900px;
  }
  .arrow {
    position: absolute;
    left: 25px;
    top: 25px;
    width: 30px;
    height: 30px;
  }
  .arrow:hover {
    cursor: pointer;
  }
</style>

<div class="anal">
  <svg class="arrow" on:click={() => $goto('../editor')}>
    <line
      x1="0"
      y1="15"
      x2="15"
      y2="30"
      stroke="#FFFFFF"
      stroke-width="2"
      stroke-linecap="round" />
    <line
      x1="0"
      y1="15"
      x2="15"
      y2="0"
      stroke="#FFFFFF"
      stroke-width="2"
      stroke-linecap="round" />
  </svg>
  <div>
    <Chart />
    <div style="text-align: center;margin-bottom: 17px;">
      <InfoBar>lel</InfoBar>
    </div>
    <BottomContainer>
      {#if lastTransaction}
        <TransactionCard {...lastTransaction} />
      {/if}
      <InfoCard
        main="Прирост выручки"
        sub="Посмотрите количество прибыли за год"
        type="percent"
        value={75} />
      <InfoCard
        main="Новые заказы"
        sub="Посмотрите количество новых заказов за год"
        type="increase"
        value={140} />
      <InfoCard
        main="Новые заказы"
        sub="Посмотрите количество новых заказов за год"
        type="increase"
        value={140} />
      <InfoCard
        main="Новые заказы"
        sub="Посмотрите количество новых заказов за год"
        type="increase"
        value={140} />
      <InfoCard
        main="Новые заказы"
        sub="Посмотрите количество новых заказов за год"
        type="increase"
        value={140} />
    </BottomContainer>
  </div>
</div>
