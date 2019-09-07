import * as api from '../services/api'

const model = {
    items: [],
    add(item) {
        return api.saveItem(item).then(savedItem => {
            this.items.push(savedItem);

            return savedItem;
        })
    },

    delete(id) {
        return api.deleteItem(id).then(() => {
            this.items = this.items.filter(item => item.id !== id)
            ;

            return id;
        })
    }
}

export default model;