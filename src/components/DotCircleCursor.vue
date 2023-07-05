
<template>
  <div class="curzr" ref="curzr" hidden>
    <div class="dotted"></div>
  </div>
</template>

<script>
  export default {
    name: 'RingDot',
    data() {
      return {
        pointerX: 0,
        pointerY: 0,
        cursorSize: 0
      }
    },
    computed: {
      cursorStyle() {
        return this.$refs.curzr.style
      }
    },
    mounted() {
      if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        this.cursorSize = Number(getComputedStyle(this.$refs.curzr).getPropertyValue('--size').slice(0, -2))
        this.$refs.curzr.removeAttribute("hidden")
        document.body.addEventListener('mousemove', (event) => {
          this.move(event, document.body)
        })
        document.body.addEventListener('click', () => {
          this.click()
        })
        
        document.body.style.cursor = 'none'
        document.body.querySelectorAll("button, label, input, textarea, select, a").forEach((el) => {
          el.style.cursor = 'inherit'
        })
      } else {
        this.$destroy()
        this.$el.parentNode.removeChild(this.$el)
      }
    },
    methods: {
      move(event, root) {
        if (event.target.localName === 'button' || 
            event.target.localName === 'a' || 
            event.target.onclick !== null ||
            event.target.className.includes('curzr-hover')) {
          this.hover(40)
        } else {
          this.hoverout(40)
        }

        this.pointerX = event.pageX + root.getBoundingClientRect().x
        this.pointerY = event.pageY + root.getBoundingClientRect().y

        this.cursorStyle.transform = `translate3d(${this.pointerX}px, ${this.pointerY}px, 0)`
      },
      hover(radius) {
        this.cursorStyle.width = this.cursorStyle.height = `${radius}px`
        this.cursorStyle.top = this.cursorStyle.left = `${radius / -2}px`
      },
      hoverout() {
        this.cursorStyle.width = this.cursorStyle.height = `${this.cursorSize}px`
        this.cursorStyle.top = this.cursorStyle.left = `${this.cursorSize / -2}px`
      },
      click() {
        this.cursorStyle.transform += ` scale(0.75)`
        setTimeout(() => {
          this.cursorStyle.transform = this.cursorStyle.transform.replace(` scale(0.75)`, '')
        }, 35)
      }
    }
  }
</script>

<style scoped>
.curzr {
  --size:  20px;
  --delay: 100ms;
  --body-color: #111920;
  --outline-color: #F2F5F8;

  box-sizing: border-box;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  /* z-index: '2147483647'; */
  width: var(--size);
  height: var(--size);
  transition: 200ms, transform var(--delay);
  background-color: #fff0;
  box-shadow: 0 0 0 1.25px var(--body-color), 0 0 0 2.25px var(--outline-color);
  border-radius: 50%;
  user-select: none;
  pointer-events: none;
}

.curzr .dotted {
  box-sizing: border-box;
  position: 'fixed';
  top: 50%;
  left: 50%;
  z-index: 99;
  /* z-index: '2147483647'; */
  width: 4px;
  height: 4px;
  background-color: var(--body-color);
  box-shadow: 0 0 0 1px var(--outline-color);
  border-radius: 50%;
  user-select: none;
  pointer-events: none;
}
</style>