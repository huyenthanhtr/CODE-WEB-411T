function quadratic(a, b, c) {
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return "Please enter valid numeric values.";
    }

    if (a === 0) {
        if (b === 0) {
            return c === 0 ? "Infinite solutions." : "No solution.";
        } else {
            return "Linear equation: x = " + (-c / b);
        }
    }

    const delta = b * b - 4 * a * c;

    if (delta < 0) {
        return "No real roots.";
    } else if (delta === 0) {
        const x = -b / (2 * a);
        return "Double root: x = " + x;
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return "x₁ = " + x1 + " ; x₂ = " + x2;
    }
}

function solveQuadratic() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const c = document.getElementById("c").value;
    const result = document.getElementById("result");
    result.value = quadratic(a, b, c);
}
