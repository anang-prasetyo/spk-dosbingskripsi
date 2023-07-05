<template>
  <div class="pt-1" id="saw">
    <div class="card-my">
      <div class="card-my-head">
        <div class="card-my-title">
          <div class="card-my-title">
            <div class="card-my--title-1">Simple Additive Weighting</div>
            <div class="card-my--title-2">Apa itu Metode SAW?</div>
          </div>
        </div>
      </div>
      <div class="card-my-main">
        <div>
          <span>SAW merupakan salah satu dari metode Fuzzy Multiple Attribute Decision Making (FMADM) yang digunakan untuk mencari alternatif optimal dari sejumlah alternatif dengan cara penjumlahan terbobot dari rating kinerja pada setiap alternatif pada semua atribut.</span>
        </div>
        <div class="my-3">2 Rumus yang digunakan dalam metode SAW :</div>
        <div class="rumus-2">
          <div>
            <div class="columns" style="align-items: center">
              <div class="column">
                <div class="isi">
                  <div>r<sub>ij</sub> = </div>
                  <div style="height: 110px; border: 1px solid #000; width: 10px; border-right: 1px solid transparent;"></div>
                  <div class="flex-col" style="gap: 1rem">
                    <div style="display: flex; align-items: center; gap: 1rem;">
                      <div>
                        <div style="border-bottom: 1px solid #000; text-align: center;">x<sub>ij</sub></div>
                        <div>Max x<sub>ij</sub></div>
                      </div>
                      <div>jika j adalah atribut keuntungan (benefit)</div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 1rem;">
                      <div>
                        <div style="border-bottom: 1px solid #000;">Min x<sub>ij</sub></div>
                        <div style="text-align: center;">x<sub>ij</sub></div>
                      </div>
                      <div>jika j adalah atribut biaya (cost)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-1">&</div>
              <div class="column">
                <div class="isi">
                  <div class="fs-md">V <sub>i</sub> = </div>
                  <div class="fs-lg">&sum;</div>
                  <div class="flex-col fs-sm">
                    <div>n</div>
                    <div>j=1</div>
                  </div>
                  <div class="fs-md">w<sub>j</sub> r<sub>ij</sub></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-my-foot">
        <div>
          <RouterLink to="/saw">
            <div class="button-my glow primary-glow">Tampilkan Lebih</div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import '../../sass/my-styles.scss';
.rumus {
  &-2 {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    background: $white;
    border-left: 3px solid $info;
    padding: 1rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    .isi {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
      .flex {
        &-col {
          display: flex;
          flex-direction: column;
        }
      }
      .fs {
        &-sm {
          font-size: .7rem;
        }
        &-md {
          font-size: 1.25rem;
        }
        &-lg {
          font-size: 1.5rem;
        }
      }
    }
  }
}
</style>