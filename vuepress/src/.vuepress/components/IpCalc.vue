<template>
  <v-app class="calcIp">
    <h1>!!!!!!!!</h1>
    <v-text-field label="source"></v-text-field>
    <v-text-field label="dist"></v-text-field>
  </v-app>
</template>

<script lang="ts">
import {
  CalcIp,
  Compare,
  Output,
} from "./IpCalc/calc-ip-address/TypeScript/built/mod";
const calc = ({ source, dist }: { source: string; dist: string }) => {
  return;
};
</script>
