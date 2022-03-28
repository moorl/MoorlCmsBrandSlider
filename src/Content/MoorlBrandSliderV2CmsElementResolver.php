<?php declare(strict_types=1);

namespace MoorlCmsBrandSlider\Content;

use MoorlFoundation\Core\Service\SortingService;
use Shopware\Core\Content\Cms\Aggregate\CmsSlot\CmsSlotEntity;
use Shopware\Core\Content\Cms\DataResolver\CriteriaCollection;
use Shopware\Core\Content\Cms\DataResolver\Element\AbstractCmsElementResolver;
use Shopware\Core\Content\Cms\DataResolver\Element\ElementDataCollection;
use Shopware\Core\Content\Cms\DataResolver\ResolverContext\ResolverContext;
use Shopware\Core\Content\Product\Aggregate\ProductManufacturer\ProductManufacturerDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;

class MoorlBrandSliderV2CmsElementResolver extends AbstractCmsElementResolver
{
    private SortingService $sortingService;

    public function __construct(
        SortingService $sortingService
    )
    {
        $this->sortingService = $sortingService;
    }

    public function getType(): string
    {
        return 'moorl-brand-slider-v2';
    }

    public function collect(CmsSlotEntity $slot, ResolverContext $resolverContext): ?CriteriaCollection
    {
        $criteria = new Criteria();
        $criteria->addAssociation('media');
        $this->sortingService->enrichCmsElementResolverCriteria(
            $slot,
            $criteria,
            $resolverContext->getSalesChannelContext()->getContext()
        );

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
