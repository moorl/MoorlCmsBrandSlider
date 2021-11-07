const Application = Shopware.Application;
import './component';
import './config';
import './preview';

const Criteria = Shopware.Data.Criteria;
const criteria = new Criteria();

Application.getContainer('service').cmsService.registerCmsElement({
    hidden: true,
    name: 'moorl-brand-slider',
    label: 'Brand slider',
    component: 'sw-cms-el-moorl-brand-slider',
    configComponent: 'sw-cms-el-config-moorl-brand-slider',
    previewComponent: 'sw-cms-el-preview-moorl-brand-slider',
    defaultConfig: {
        brands: {
            source: 'static',
            value: [],
            required: true,
            entity: {
                name: 'product_manufacturer',
                criteria: criteria
            }
        },
        rotate: {
            source: 'static',
            value: false
        },
        elMinWidth: {
            source: 'static',
            value: '200px'
        },
        height: {
            source: 'static',
            value: 'auto'
        },
        onlyImages: {
            source: 'static',
            value: false
        },
        useLink: {
            source: 'static',
            value: false
        },
    }
});
