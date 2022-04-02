<?php declare(strict_types=1);

namespace MoorlCmsBrandSlider\Content;

use MoorlFoundation\Core\Content\Cms\FoundationListingCmsElementResolver;
use Shopware\Core\Content\Cms\Aggregate\CmsSlot\CmsSlotEntity;
use Shopware\Core\Content\Cms\DataResolver\CriteriaCollection;
use Shopware\Core\Content\Cms\DataResolver\Element\ElementDataCollection;
use Shopware\Core\Content\Cms\DataResolver\ResolverContext\ResolverContext;
use Shopware\Core\Content\Product\Aggregate\ProductManufacturer\ProductManufacturerDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;

class MoorlBrandSliderV2CmsElementResolver extends FoundationListingCmsElementResolver
{
    public function getType(): string
    {
        return 'moorl-brand-slider-v2';
    }

    public function collect(CmsSlotEntity $slot, ResolverContext $resolverContext): ?CriteriaCollection
    {
        $criteria = new Criteria();
        $criteria->addAssociation('media');
        $this->enrichCmsElementResolverCriteriaV2($slot, $criteria, $resolverContext);

        $collection = new CriteriaCollection();
        $collection->add($slot->getUniqueIdentifier(), ProductManufacturerDefinition::class, $criteria);

        return $collection->all() ? $collection : null;
    }

    public function enrich(CmsSlotEntity $slot, ResolverContext $resolverContext, ElementDataCollection $result): void
    {
        $searchResult = $result->get($slot->getUniqueIdentifier());

        $data = new MoorlBrandSliderStruct();
        $slot->setData($data);
        $data->setListing($searchResult);
    }
}
