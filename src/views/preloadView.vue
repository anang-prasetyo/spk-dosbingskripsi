<template>
  <div class="preload">
    <div>Demo web aplikasi SPK-PDPS</div>
    <div class="mb-2">Silahkan pilih masuk sebagai siapa</div>
    <div class="button-my glow success-glow" @click="$emit('pilih', 'mahasiswa')">Mahasiswa</div>
    <div class="button-my glow warning-glow" @click="$emit('pilih2', 'mahasiswa', 'wahaha@email.com', 'Wahaha123')">Dosen</div>
    <div class="button-my glow danger-glow disable">Admin</div>
    <!-- <div class="button-my glow danger-glow" @click="$emit('pilih2', 'mahasiswa', 'admin1@email.com', 'admin1Satu')">Admin</div> -->
    <div class="mt-6 alert-my alert-link" style="max-width: 75% !important">
      <div>Jika tidak bisa beralih ke <b>Mahasiswa</b>, silahkan klik <b>Sign Out</b> terlebih dahulu pada sesi sebelumnya.</div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '../sass/my-styles.scss';

.preload{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  gap: 1rem;
}
</style>