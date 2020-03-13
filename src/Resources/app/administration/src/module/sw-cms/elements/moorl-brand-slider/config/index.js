const { Component, Mixin } = Shopware;
const { Criteria, EntityCollection } = Shopware.Data;

import template from './index.html.twig';
import './index.scss';

Component.register('sw-cms-el-config-moorl-brand-slider', {
    template,

    inject: ['repositoryFactory'],

    mixins: [
        Mixin.getByName('cms-element')
    ],

    data() {
        return {
            brandCollection: null
        };
    },

    computed: {
        brandRepository() {
            return this.repositoryFactory.create('product_manufacturer');
        },
        brands() {
            if (this.element.data && this.element.data.brands && this.element.data.brands.length > 0) {
                return this.element.data.brands;
            }
            return null;
        },
        brandMediaFilter() {
            const criteria = new Criteria(1, 25);
            criteria.addAssociation('media');
            //criteria.addFilter(Criteria.equals('mediaId', true));
            return criteria;
        },
        brandMultiSelectContext() {
            const context = Object.assign({}, Shopware.Context.api);
            return context;
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('moorl-brand-slider');

            this.brandCollection = new EntityCollection('/product-manufacturer', 'product_manufacturer', Shopware.Context.api);

            if (this.element.config.brands.value.length > 0) {
                const criteria = new Criteria(1, 100);
                criteria.addAssociation('media');
                //criteria.addFilter(Criteria.equals('mediaId', true));
                criteria.setIds(this.element.config.brands.value);
                this.brandRepository.search(criteria, Object.assign({}, Shopware.Context.api, {}))
                    .then(result => {
                        this.brandCollection = result;
                    });
            }
        },

        onBrandsChange() {
            this.element.config.brands.value = this.brandCollection.getIds();
            this.$set(this.element.data, 'brands', this.brandCollection);
        }
    }
});
