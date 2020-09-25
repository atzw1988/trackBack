import html2canvas from 'html2canvas'
import Whammy from 'whammy'
import { setTimeout } from 'timers'

const replay = {
    data () {
        return {
            video: null,
            enble: false
        }
    },
    methods: {
        finalizeVideo () {
            setTimeout(() => {
                const output = this.video.compile(false)
                const url = URL.createObjectURL(output)
                document.getElementById('awesome').src = url
            }, 2000)
        },
        createFrame () {
            html2canvas(this.$refs.pages, {
                allowTaint: true,
                useCORS: true,
                backgroundColor: null,
                imageTimeout: 0,
                removeContainer: true,
                foreignObjectRendering: false
            }).then(canvas => {
                this.video.add(canvas)
                this.saveCanvas = canvas
            })
        },
        createSaveFrame () {
            this.video.add(this.saveCanvas)
        },
        createVideos () {
            const createVideo = (index) => {
                clearInterval(this.timer)
                const item = this.list[index]
                if (item.type === 1) {
                    this.select.scrollTop = item.top
                } else if (item.type === 6) {
                    console.log(item)
                    this[item.inputParam] = item.isShow === 'true'
                }
                this.createFrame()
                this.timer = setInterval(() => {
                    this.createSaveFrame()
                }, 200)
                if (index < this.list.length - 1) {
                    setTimeout(() => {
                        createVideo(index + 1)
                    }, item.time * 5)
                } else {
                    clearInterval(this.timer)
                    window.requestAnimationFrame(this.finalizeVideo)
                }
            }
            createVideo(1)
        },
        begin () {
            this.select = this.$refs.need
            this.createVideos()
        }
    },
    mounted () {
        this.video = new Whammy.Video(25)
    }
}

export { replay }
