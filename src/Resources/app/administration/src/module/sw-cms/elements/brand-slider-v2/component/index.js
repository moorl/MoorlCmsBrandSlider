const {Component} = Shopware;
const {Criteria} = Shopware.Data;

Component.extend(
    'sw-cms-el-moorl-brand-slider-v2',
    'sw-cms-el-moorl-foundation-listing',
    {
        data() {
            return {
                entity: 'product_manufacturer'
            }
        },

        computed: {
            defaultCriteria() {
                const criteria = new Criteria();
                criteria.setLimit(12);
                criteria.addAssociation('media');

                return criteria;
            },

            repository() {
                return this.repositoryFactory.create(this.entity);
            },
        },

        methods: {
            itemTitle(item) {
                return item.name;
            },

            itemDescription(item) {
                return item.description;
            },
        }
    }
);
