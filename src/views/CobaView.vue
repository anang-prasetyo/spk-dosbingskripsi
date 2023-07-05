<template>
  <div>
    <div class="content-my">
      <div class="content-my--head">
        <div class="content-my--head-value">Komponen-ku</div>
      </div>
      <div class="content-my--main">
        <div class="white mt-2 p-4">
          <div class="content-my--title">Button</div>
          <div class="block">
            <div class="komponen-nama">Default</div>
            <div class="in-light">
              <div class="button-my primary">primary</div>
              <div class="button-my link">link</div>
              <div class="button-my info">info</div>
              <div class="button-my warning">warning</div>
              <div class="button-my danger">danger</div>
              <div class="button-my success">success</div>
              <div class="button-my dark">dark</div>
              <div class="button-my black">black</div>
              <div class="button-my light">light</div>
            </div>
            <div>
              <div class="komponen-nama">Light</div>
              <div class="in-light">
                <div class="button-my primary-light-border">primary</div>
                <div class="button-my link-light-border">link</div>
                <div class="button-my info-light-border">info</div>
                <div class="button-my warning-light-border">warning</div>
                <div class="button-my danger-light-border">danger</div>
                <div class="button-my success-light-border">success</div>
              </div>
            </div>
            <div>
              <div class="komponen-nama">Transparent</div>
              <div class="in-light">
                <div class="button-my primary-transparent">primary</div>
                <div class="button-my link-transparent">link</div>
                <div class="button-my info-transparent">info</div>
                <div class="button-my warning-transparent">warning</div>
                <div class="button-my danger-transparent">danger</div>
                <div class="button-my success-transparent">success</div>
                <div class="button-my dark-transparent">dark</div>
                <div class="button-my light-transparent">light</div>
              </div>
            </div>
            <div>
              <div class="komponen-nama">Glow</div>
              <div class="in-light">
                <div class="button-my glow primary-glow">primary</div>
                <div class="button-my glow link-glow">link</div>
                <div class="button-my glow info-glow">info</div>
                <div class="button-my glow warning-glow">warning</div>
                <div class="button-my glow danger-glow">danger</div>
                <div class="button-my glow success-glow">success</div>
                <div class="button-my glow dark-glow">dark</div>
                <div class="button-my glow light-glow">light</div>
              </div>
            </div>
            <div>
              <div class="komponen-nama">Glow Light</div>
              <div class="in-light">
                <div class="button-my glow primary-light-glow">primary</div>
                <div class="button-my glow link-light-glow">link</div>
                <div class="button-my glow info-light-glow">info</div>
                <div class="button-my glow warning-light-glow">warning</div>
                <div class="button-my glow danger-light-glow">danger</div>
                <div class="button-my glow success-light-glow">success</div>
              </div>
            </div>
            <div>
              <div class="komponen-nama">White</div>
              <div class="in-dark">
                <div class="button-my white">white</div>
                <div class="button-my glow white-glow">white</div>
              </div>
            </div>
            <div>
              <div class="komponen-nama">Light</div>
              <div class="in-dark">
                <div class="button-my light">light</div>
                <div class="button-my light-transparent">light</div>
                <div class="button-my glow light-glow">light</div>
              </div>
            </div>
          </div>
        </div>
        <div class="white mt-2 p-4">
          <div class="content-my--title">Color</div>
          <div class="primary p-2">primary</div>
          <div class="link p-2">link</div>
          <div class="info p-2">info</div>
          <div class="warning p-2">warning</div>
          <div class="danger p-2">danger</div>
          <div class="success p-2">success</div>
          <div class="light p-2">light</div>
          <div class="dark p-2">dark</div>
          <div class="white p-2">white</div>
          <div class="black p-2">black</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped></script>

<style lang="scss" scoped>
@import '../sass/my-styles.scss';
.komponen-nama {
  display: block;
  padding: 1rem 0;
}
.button-my {
  text-transform: capitalize;
}
.in-dark {
  display: inline-flex;
  gap: .5rem;
  background: $dark;
  padding: .5rem;
  margin-left: .5rem;
}
.in-light {
  display: inline-flex;
  gap: .5rem;
}
</style>
