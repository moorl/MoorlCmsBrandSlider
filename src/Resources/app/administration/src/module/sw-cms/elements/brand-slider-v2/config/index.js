const {Component} = Shopware;
const {Criteria} = Shopware.Data;

Component.extend('sw-cms-el-config-moorl-brand-slider-v2', 'sw-cms-el-config-moorl-foundation-listing', {
    data() {
        return {
            entity: 'product_manufacturer',
            criteria: (new Criteria(1, 12)).addAssociation('media'),
            configWhitelist: {
                listingSource: ['static', 'select']
            }
        }
    }
});
