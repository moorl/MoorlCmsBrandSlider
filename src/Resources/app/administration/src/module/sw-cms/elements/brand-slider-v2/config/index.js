const {Component} = Shopware;

Component.extend(
    'sw-cms-el-config-moorl-brand-slider-v2',
    'sw-cms-el-config-moorl-foundation-listing',
    {
        data() {
            return {
                entity: 'product_manufacturer'
            }
        }
    }
);
