import html2canvas from 'html2canvas'
import Whammy from 'whammy'
import { setTimeout } from 'timers'
import { get } from '@/utils/jutils.js'
import { getUserInfo } from '@/api/api.js'

const replay = {
    data () {
        return {
            maxSHow: 5,
            selfName: '边云',
            selfCardType: '身份证',
            selfCardNo: '130184197911244529',
            selfSex: '女',
            selfBirth: '1979-11-24',
            selfPhone: '18566688104',
            socialSecurity: 1,
            elseName: '',
            elseCardType: '身份证',
            elseCardNo: '',
            elseSex: '',
            elseBirth: '',
            elsePhone: '',
            destination: '',
            limitTimeValue: '',
            effectTime: '',
            overdueTime: '',
            total: 0,
            readFlag: false,
            video: null,
            list: [],
            pages: null,
            saveCanvas: null,
            timer: null,
            question0: false,
            question1: false,
            question2: false,
            question3: false,
            question4: false,
            question5: false,
            select: null,
            premium: 0,
            totalMoney: 0,
            moreText: '更多保障详情',
            showMore: false,
            unit: 1,
            loading: false,
            cardType: {
                '111': '身份证',
                '414': '护照',
                '511': '台胞证',
                '516': '港澳台居民居住证',
                '10': '外国人永久居住证'
            },
            idType: {
                '01': '身份证',
                '03': '护照',
                '02': '户口簿',
                '10': '外国永久居住证',
                '12': '台胞证',
                '81': '港澳台居民居住证'
            },
            sexList: {
                '1': '男',
                '2': '女'
            }
        }
    },
    methods: {
        finalizeVideo () {
            const output = this.video.compile(false)
            console.log(output)
            const url = URL.createObjectURL(output)
            document.getElementById('awesome').src = url
            this.loading = false
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
                } else if (item.type === 2 || item.type === 9 || item.type === 5) {
                    this[item.inputParam] = item.inputValue
                } else if (item.type === 6) {
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
                    console.log('生成结束' + new Date())
                    clearInterval(this.timer)
                    window.requestAnimationFrame(this.finalizeVideo)
                }
            }
            createVideo(1)
        },
        begin () {
            this.loading = true
            this.select = this.$refs.page
            this.createVideos()
        },
        async getInfo (params) {
            const { code, data } = await getUserInfo(params)
            console.log(code, data)
            if (code === 200) {
                this.selfName = data.name
                this.selfCardType = this.cardType[data.cardType]
                this.selfCardNo = data.cardNumber
                this.selfSex = this.sexList[data.sex]
                this.selfBirth = data.brithday
                this.selfPhone = data.phone
            }
        }
    },
    mounted () {
        this.video = new Whammy.Video(25)
        this.createFrame()
        const query = this.$route.query
        get(query.id, (list) => {
            this.list = list
        })
        const params = {
            id: query.userId
        }
        this.getInfo(params)
    }
}

export { replay }
