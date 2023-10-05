export function calculateTotal (items, tax) {
    let total = 0;

    tax = Math.abs(tax);

    for (const item of items) {
        total += item.price;

        if (item.taxable) {
            total += item.price * tax;
        }
    }
    return total;
}





