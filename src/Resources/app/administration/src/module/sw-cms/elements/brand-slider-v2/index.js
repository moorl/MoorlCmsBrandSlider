import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
    hidden: false,
    name: 'moorl-brand-slider-v2',
    label: 'sw-cms.elements.moorl-brand-slider-v2.name',
    component: 'sw-cms-el-moorl-brand-slider-v2',
    previewComponent: 'sw-cms-el-preview-moorl-brand-slider-v2',
    configComponent: 'sw-cms-el-config-moorl-brand-slider-v2',
    defaultConfig: {}
});
