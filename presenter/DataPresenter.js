
export class ItemPresenter {
    constructor(view) {
        this.view = view;
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
        this.view.updateItemList(this.items);
    }

    fetchItems() {

        const fakeData = [
            new Item(1, 'Item 1', 100),
            new Item(2, 'item 2', 150)
        ];
        this.items = fakeData;
        this.view.updateItemsList(this.items);
    }
}
