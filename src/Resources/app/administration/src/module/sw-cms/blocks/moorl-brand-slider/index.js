import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'moorl-brand-slider',
    label: 'moorl-cms.blocks.general.brandSlider.label',
    category: 'moorl-cms',
    component: 'sw-cms-block-moorl-brand-slider',
    previewComponent: 'sw-cms-preview-moorl-brand-slider',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        one: {
            type: 'moorl-brand-slider'
        }
    }
});
