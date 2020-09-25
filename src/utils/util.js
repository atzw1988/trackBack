export function parkingTime (value) {
  let text = ''
  const time = Math.ceil(value / 1000)
  if (time <= 60) {
    text = time + '秒'
  } else if (time > 60 && time <= 3600) {
    text = parseInt(time / 60) + '分钟' + (time % 60) + '秒'
  } else if (time > 3600) {
    text = parseInt(time / 3600) + '小时' + parseInt((time % 3600) / 60) + '分钟' + (time % 60) + '秒'
  }
  return text
}
