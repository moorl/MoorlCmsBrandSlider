<?php declare(strict_types=1);

namespace MoorlCmsBrandSlider;

use MoorlFoundation\Core\PluginHelpers;
use Shopware\Core\Framework\Plugin;
use Shopware\Core\Framework\Plugin\Context\UninstallContext;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Loader\XmlFileLoader;

class MoorlCmsBrandSlider extends Plugin
{
    public function build(ContainerBuilder $container): void
    {
        parent::build($container);

        $loader = new XmlFileLoader($container, new FileLocator(__DIR__ . '/Content/DependencyInjection'));
        $loader->load('manufacturer.xml');
    }

    public function uninstall(UninstallContext $context): void
    {
        parent::uninstall($context);

        if ($context->keepUserData()) {
            return;
        }

        PluginHelpers::removeCmsBlocks($this->container, $context->getContext(), [
            'moorl-brand-slider'
        ]);

        PluginHelpers::removeCmsSlots($this->container, $context->getContext(), [
            'moorl-brand-slider'
        ]);
    }
}
