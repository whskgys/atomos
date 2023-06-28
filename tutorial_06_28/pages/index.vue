<template>
  <div>
    이것은 테스트 입니다.
    <br />
    <div v-if="ip_addr">당신의 ip주소는 {{ ip_addr }}입니다.</div>
    <div v-else>IP주소 로딩 중입니다!!@@</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('session', ['ip_addr']),
  },
  mounted() {
    this.$store.dispatch('session/get_ip_addr')
  }
}
</script>