function divideAndConquerSum(a) {
    if (a.length == 0) return 0;
    if (a.length == 1) return a[0];
    return sumRange(a, 0, a.length - 1);
}

function sumRange (a, start, end) {
    var partLen = end - start + 1;

    if (start == end) return a[start];
    if (start == end - 1) return a[start] + a[end];
    if (start == end - 2) return a[start] + a[start + 1] + a[end];

    var leftThird = Math.floor(partLen / 3);
    var midThird = partLen - Math.ceil(partLen / 3);

    var leftSum = sumRange(a, start, leftThird);
    var midSum = sumRange(a, leftThird + 1, midThird);
    var rightSum = sumRange(a, midThird + 1, end);

    return leftSum + midSum + rightSum;
}