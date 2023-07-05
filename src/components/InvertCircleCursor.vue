
<template>
  <div ref="curzr" class="curzr" hidden>
    <div class="circle" ref="curzrCircle"></div>
    <div class="dotted" ref="curzrDotted"></div>
  </div>
</template>

<script>
  export default {
    name: 'BigCircle',
    data() {
      return {
        pointerX: 0,
        pointerY: 0
      }
    },
    mounted() {
      if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
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
        this.pointerX = event.pageX + root.getBoundingClientRect().x
        this.pointerY = event.pageY + root.getBoundingClientRect().y
      
        this.$refs.curzrCircle.style.transform = `translate3d(${this.pointerX}px, ${this.pointerY}px, 0)`
        this.$refs.curzrDotted.style.transform = `translate3d(${this.pointerX}px, ${this.pointerY}px, 0)`

        if (event.target.localName === 'button' || 
            event.target.localName === 'a' || 
            event.target.onclick !== null ||
            event.target.className.includes('curzr-hover')) {
          this.hover()
        }
      },
      hover() {
        this.$refs.curzrCircle.style.transform += ` scale(1.5)`
      },
      click() {
        this.$refs.curzrCircle.style.transform += ` scale(0.75)`
        setTimeout(() => {
          this.$refs.curzrCircle.style.transform = this.$refs.curzrCircle.style.transform.replace(` scale(0.75)`, '')
        }, 35)
      }
    }
  }
</script>

<style scoped>
.curzr {
  --size: 31px;
  --delay: 40ms;
  --filter-invert: invert(1);
}

.curzr .circle {
  box-sizing: border-box;
  position: fixed;
  display: flex;
  top: calc(var(--size) / -6);
  left: calc(var(--size) / -2);
  z-index: 2147483647;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
  width: var(--size);
  height: var(--size);
  background-color: #fff0;
  border-radius: 50%;
  transition: 500ms, transform var(--delay);
  user-select: none;
  pointer-events: none;
}

.curzr .dotted {
  box-sizing: border-box;
  position: fixed;
  top: 6px;
  left: -3px;
  z-index: 2147483647;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  background-color: #fffd;
  border-radius: 50%;
  user-select: none;
  pointer-events: none;
  transition: 250ms, transform calc(var(--delay) * 0.75);
}

@supports (backdrop-filter: invert(1) grayscale(1)) {
  .circle {
    background-color: #fff0;
    backdrop-filter: var(--filter-invert) grayscale(1);
  }
  .dotted {
    background-color: #fff0;
    backdrop-filter: var(--filter-invert) grayscale(1);
  }
}

@supports not (backdrop-filter: invert(1) grayscale(1)) {
  .circle {
    background-color: #000;
    opacity: .75;
  }
  .dotted {
    background-color: #fff;
    opacity: .75;
  }
}
</style>