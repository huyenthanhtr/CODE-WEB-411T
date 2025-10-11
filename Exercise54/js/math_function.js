function getValues() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
    const result = document.getElementById("result");
    return { a, b, c, result };
}

function findMax(a, b, c) {
    return Math.max(a, b, c);
}

function call_Max() {
    const { a, b, c, result } = getValues();
    result.value = findMax(a, b, c);
}

function findMin(a, b, c) {
    return Math.min(a, b, c);
}

function call_Min() {
    const { a, b, c, result } = getValues();
    result.value = findMin(a, b, c);
}

function call_multiply() {
    const { a, b, result } = getValues();
    result.value = a * b;
}

function find_sin() {
    const { a, result } = getValues();
    const rad = a * Math.PI / 180;
    result.value = Math.sin(rad);
}

function find_cos() {
    const { a, result } = getValues();
    const rad = a * Math.PI / 180;
    result.value = Math.cos(rad);
}
