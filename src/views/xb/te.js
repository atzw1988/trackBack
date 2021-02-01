function filter(arr) {
    const ret = [...arr]
    let lo = 0, hi = 0;
    // arr[0:lo] is odd
    while (hi < ret.length) {
        if (ret[hi] % 2 == 0) {
            hi++;
        } else {
            [ret[lo], ret[hi]] = [ret[hi], ret[lo]];
            lo++;
            hi++;
        }
        console.log(ret)
    }
    return ret;
}
var hasCycle = function(head) {
    try {
        JSON.stringify(head)
        return false
    } catch {
        return true
    }
}