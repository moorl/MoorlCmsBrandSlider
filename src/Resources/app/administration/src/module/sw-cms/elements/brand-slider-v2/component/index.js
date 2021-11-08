const {Component} = Shopware;
const {Criteria} = Shopware.Data;

Component.extend('sw-cms-el-moorl-brand-slider-v2', 'sw-cms-el-moorl-foundation-listing', {
    data() {
        return {
            entity: 'product_manufacturer',
            elementName: 'moorl-brand-slider-v2',
            criteria: (new Criteria(1, 12)).addAssociation('media')
        }
    },
    methods: {
        itemTitle(item) {
            return item.name;
        },
        itemDescription(item) {
            return item.description;
        },
    }
});
