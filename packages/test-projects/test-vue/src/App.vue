<template>
  <cardano-initialize :config="blockfrost">
    <cardano-send-button :recipients="recipients" outlined label="send"></cardano-send-button>
    <cardano-stake-button :stakepoolId="pool" outlined label="stake"></cardano-stake-button>
    <div style="position: relative; width: 50px">
      <button @click=updateOpen ref="button">open</button>
      <cardano-connect-wallet-component ref="menu" activatable @state="stateHandler"></cardano-connect-wallet-component>
    </div>
  </cardano-initialize>
</template>

<script>
//import { CardanoAPI } from '@chain-lib/cardano-api'
import { ref, onMounted } from 'vue'
import {CardanoInitialize, CardanoConnectWalletComponent, CardanoSendButton, CardanoStakeButton} from '@chain-lib/cardano-components'

export default {
  name: 'App',
  components: {CardanoInitialize, CardanoConnectWalletComponent, CardanoSendButton, CardanoStakeButton},
  setup(){
    const menu = ref()
    const button = ref()
    const blockfrost = {'blockfrost':{'testnet': ""}}
    const recipients = [{address: "addr_test1qqnwfdcyv4kxwrs87aaadgck4pygyhud9zwvlprtvp9lrxsx8zvtu8eyyh9e0x7ytf5jvrryf452q8ze6nsy2ks99egsh6ucvl", "amount": 5}]
    const pool = "pool1weu4vlg9t8knma7t2j5y3w2k3vzdr9mtnynd2jhfalwn76nwh48"
    const stateHandler = (event) => {
      console.log(event.detail.reducer);
    }

    onMounted(()=>{
      menu.value.anchor = button.value
      menu.value.corner = "BOTTOM_START"
    })
  
    const updateOpen = () => {
      menu.value.open = true
    }
    return{ blockfrost, recipients, pool, stateHandler, updateOpen, menu, button}
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
