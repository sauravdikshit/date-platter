
export class Item {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }


    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        this.title = title;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price) {
        this.price = price;
    }
}
