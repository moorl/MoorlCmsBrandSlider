const {Component} = Shopware;

Component.extend(
    'sw-cms-el-moorl-brand-slider-v2',
    'sw-cms-el-moorl-foundation-listing',
    {
        data() {
            return {
                entity: 'product_manufacturer'
            }
        }
    }
);
