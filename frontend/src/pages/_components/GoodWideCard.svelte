<script>
  import { createEventDispatcher } from "svelte";
  import { fnTot } from "../_utils";

  import WideCard from "./WideCard.svelte";
  const dispatch = createEventDispatcher();

  export let name = "🍷Кола";
  export let code = "Арт. 189650141";
  // не используется
  let id = 123123123;
  export let price = 100;
  export let quantity = 1;

  // не используется
  export let editable = false;
  const onInc = () => dispatch("increase", id);
  const onDec = () => dispatch("decrease", id);
  const onClick = () => {
    console.log("clicked");
    dispatch("click", id);
  };
</script>

<style>
  .main {
    font-size: 20px;
    font-weight: 900;
  }

  .sub {
    font-size: 10px;
    color: #ababab;
  }

  .price,
  .quantity {
    font-weight: 900;
    font-size: 20px;
    text-align: right;
  }

  .price > span,
  .quantity,
  .button {
    color: #ff9e46;
  }
  .quantity > span {
    color: black;
    font-weight: 700;
    font-size: 14px;
    display: inline-block;
  }

  .quantity-wrapper {
    display: flex;
    justify-content: flex-end;
  }

  .button {
    width: 30px;
    height: 30px;
    background-color: #f6f6f6;
    opacity: 0.8;
    border-radius: 50%;
    font-weight: 900;
    font-size: 30px;
    text-align: center;
    display: inline-block;
    position: relative;
    cursor: pointer;
  }

  .decrease::after {
    content: "-";
  }

  .increase::after {
    content: "+";
  }

  .increase::after,
  .decrease::after {
    line-height: 18px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>

<WideCard on:click={onClick}>
  <div>
    <div class="main" onclick>{name}</div>
    <div class="sub">{code}</div>
  </div>
  <div>
    <div class="price">{fnTot(price)}</div>
    <div class="quantity-wrapper">
      {#if editable}
        <div class="button decrease" on:click={onDec} />&nbsp;
      {/if}
      <div class="quantity">{quantity} <span>шт</span></div>
      {#if editable}
        &nbsp;
        <div class="button increase" on:click={onInc} />
      {/if}
    </div>
  </div>
</WideCard>
