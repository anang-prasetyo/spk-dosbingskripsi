<template>
  <div>
    <div id="layout-right-mobile">
      <menu-right :light-mode="lightMode" />
    </div>
    <div style="margin-bottom: -2rem;">
      <div class="foo">
      <!-- <div class="foo" :class="lightMode ? 'light-mode-layout' : 'dark-mode-layout'"> -->
        <div style="width: 100%;">
          <div class="columns" style="display: flex; gap: 1rem;">
            <div class="column p-0">
              <div class="foo-col">
                <p>Inspirasi layout</p>
                <a href="https://www.apple.com/app-store/" target=”_blank” :class="lightMode ? 'typography-semu-light' : 'typography-semu-dark'">app store</a>
                <a href="https://vuesax.com/" target=”_blank” :class="lightMode ? 'typography-semu-light' : 'typography-semu-dark'">vuesax</a>
                <a href="https://mail.google.com/" target=”_blank” :class="lightMode ? 'typography-semu-light' : 'typography-semu-dark'">gmail</a>
              </div>
            </div>
            <div class="column p-0">
              <div class="foo-col">
                <p>Komponen</p>
                <a href="https://pangrampangram.com/" target=”_blank” :class="lightMode ? 'typography-semu-light' : 'typography-semu-dark'">font - pangram pangram</a>
                <a href="https://iconsax.io/" target=”_blank” :class="lightMode ? 'typography-semu-light' : 'typography-semu-dark'">ikon - iconsax</a>
                <a href="https://amrit.art/toy-faces" target=”_blank” :class="lightMode ? 'typography-semu-light' : 'typography-semu-dark'">avatar - toyfaces</a>
                <a href="https://www.freepik.com/author/xvector" target=”_blank” :class="lightMode ? 'typography-semu-light' : 'typography-semu-dark'">3d - xvector</a>
                <a href="https://www.shapefest.com/" target=”_blank” :class="lightMode ? 'typography-semu-light' : 'typography-semu-dark'">3d - shapefest</a>
                <a href="https://scribehow.com/" target=”_blank” :class="lightMode ? 'typography-semu-light' : 'typography-semu-dark'">slideshow - scribe</a>
                <a href="https://sweetalert.js.org/" target=”_blank” :class="lightMode ? 'typography-semu-light' : 'typography-semu-dark'">alert - sweetalert</a>
              </div>
            </div>
            <div class="column p-0">
              <div class="foo-col">
                <p>Kontak saya</p>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=praanang99@gmail.com&su=SPK-PDPS&body=Apa%20yang%20kamu%20pikirkan?" target=”_blank” :class="lightMode ? 'typography-semu-light' : 'typography-semu-dark'">gmail</a>
                <a href="https://wa.me/6282133938464" target=”_blank” :class="lightMode ? 'typography-semu-light' : 'typography-semu-dark'">whatsApp</a>
                <a href="https://www.instagram.com/pra_anang/" target=”_blank” :class="lightMode ? 'typography-semu-light' : 'typography-semu-dark'">instagram</a>
                <!-- <br><p>Temukan lebih</p>
                <a href="https://github.com/anang-prasetyo" target=”_blank” :class="lightMode ? 'typography-semu-light' : 'typography-semu-dark'">github</a>
                <a href="https://codepen.io/Ananggg" target=”_blank” :class="lightMode ? 'typography-semu-light' : 'typography-semu-dark'">codepen</a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="cr" :class="lightMode ? 'light-mode-layout typography-semu-light' : 'dark-mode-layout typography-semu-dark'" :style="lightMode ? 'border-top: 1px solid rgba(0,0,0,.05);' : 'border-top: 1px solid rgba(255,255,255,.1);'">Copyright &copy; 2023 Anang Prasetyo. All rights reserved.</div> -->
      <div class="cr mt-6" :class="lightMode ? 'typography-semu-light' : 'typography-semu-dark'" :style="lightMode ? 'border-top: 1px solid rgba(0,0,0,.05);' : 'border-top: 1px solid rgba(255,255,255,.1);'">Dibuat pada tahun 2023 oleh Anang Prasetyo.</div>
    </div>
  </div>
</template>

<script setup>
import MenuRight from '../layouts/MenuRight.vue';

defineProps({
  lightMode: Boolean
})
</script>

<style lang="scss" scoped>
@import '../sass/my-styles.scss';
@import '../sass/my-texts.scss';

* {
  font-size: 1rem;
  line-height: 1.33337;
  font-weight: 400;
  letter-spacing: -.01em;
}
.foo {
  display: flex;
  padding: 2rem;
  margin-top: 10rem;
  &-col{
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    & p{
      line-height: 1.75rem;
    }
  }
}
a {
  display: block;
  &:hover{
    color: currentColor;
  }
}
.cr {
  padding: 1rem 2rem;
  font-size: .85rem;
}
</style>