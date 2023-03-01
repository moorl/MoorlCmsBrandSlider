import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
    plugin: 'MoorlCmsBrandSlider',
    icon: 'regular-view-grid',
    name: 'moorl-brand-slider-v2',
    label: 'sw-cms.elements.moorl-brand-slider-v2.name',
    component: 'sw-cms-el-moorl-brand-slider-v2',
    previewComponent: true,
    configComponent: 'sw-cms-el-config-moorl-brand-slider-v2',
    defaultConfig: {
        listingLayout: {
            source: 'static',
            value: 'slider'
        },
        itemLayout: {
            source: 'static',
            value: 'image-or-title'
        },
        gapSize: {
            source: 'static',
            value: '15px'
        },
        itemWidth: {
            source: 'static',
            value: '220px'
        },
        displayMode: {
            source: 'static',
            value: 'contain'
        },
        itemHeight: {
            source: 'static',
            value: '130px'
        },
        hasButton: {
            source: 'static',
            value: false
        },
    }
});
