const { Component, Application, Mixin } = Shopware;
import template from './index.html.twig';
import './index.scss';

Component.register('sw-cms-el-moorl-brand-slider', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    data() {
        return {
            sliderBoxLimit: 3
        };
    },

    computed: {
        demoProductElement() {
            return {
                config: {
                    boxLayout: {
                        source: 'static',
                        value: this.element.config.boxLayout.value
                    },
                    displayMode: {
                        source: 'static',
                        value: this.element.config.displayMode.value
                    }
                },
                data: {
                    brand: {
                        name: 'Lorem ipsum dolor',
                        description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua.`.trim(),
                        price: [
                            { gross: 19.90 }
                        ],
                        cover: {
                            media: {
                                url: '/administration/static/img/cms/preview_glasses_large.jpg',
                                alt: 'Lorem Ipsum dolor'
                            }
                        }
                    }
                }
            };
        },

        sliderBoxMinWidth() {
            if (this.element.config.elMinWidth.value && this.element.config.elMinWidth.value.indexOf('px') > -1) {
                return `repeat(auto-fit, minmax(${this.element.config.elMinWidth.value}, 1fr))`;
            }

            return null;
        },

        currentDeviceView() {
            return this.cmsPageState.currentCmsDeviceView;
        },

        verticalAlignStyle() {
            if (!this.element.config.verticalAlign.value) {
                return null;
            }

            return `align-self: ${this.element.config.verticalAlign.value};`;
        }
    },

    watch: {
        'element.config.elMinWidth.value': {
            handler() {
                this.setSliderRowLimit();
            }
        },

        currentDeviceView() {
            setTimeout(() => {
                this.setSliderRowLimit();
            }, 400);
        }
    },

    created() {
        this.createdComponent();
    },

    mounted() {
        this.mountedComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('moorl-brand-slider');
            this.initElementData('moorl-brand-slider');
        },

        mountedComponent() {
            this.setSliderRowLimit();
        },

        setSliderRowLimit() {
            if (this.currentDeviceView === 'mobile' || this.$refs.brandHolder.offsetWidth < 500) {
                this.sliderBoxLimit = 1;
                return;
            }

            if (!this.element.config.elMinWidth.value ||
                this.element.config.elMinWidth.value === 'px' ||
                this.element.config.elMinWidth.value.indexOf('px') === -1) {
                this.sliderBoxLimit = 3;
                return;
            }

            if (parseInt(this.element.config.elMinWidth.value.replace('px', ''), 0) <= 0) {
                return;
            }

            // Subtract to fake look in storefront which has more width
            const fakeLookWidth = 100;
            const boxWidth = this.$refs.brandHolder.offsetWidth;
            const elGap = 32;
            let elWidth = parseInt(this.element.config.elMinWidth.value.replace('px', ''), 0);

            if (elWidth >= 300) {
                elWidth -= fakeLookWidth;
            }

            this.sliderBoxLimit = Math.floor(boxWidth / (elWidth + elGap));
        },

        getProductEl(brand) {
            return {
                config: {
                    boxLayout: {
                        source: 'static',
                        value: this.element.config.boxLayout.value
                    },
                    displayMode: {
                        source: 'static',
                        value: this.element.config.displayMode.value
                    }
                },
                data: {
                    brand
                }
            };
        }
    }
});
