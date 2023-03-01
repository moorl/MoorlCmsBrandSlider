<?php declare(strict_types=1);

namespace MoorlCmsBrandSlider\Content;

use Shopware\Core\Content\Product\Aggregate\ProductManufacturer\ProductManufacturerCollection;
use Shopware\Core\Framework\DataAbstractionLayer\Search\EntitySearchResult;
use Shopware\Core\Framework\Struct\Struct;

class MoorlBrandSliderStruct extends Struct
{
    protected ?ProductManufacturerCollection $brands = null;
    protected EntitySearchResult $listing;

    public function getBrands(): ?ProductManufacturerCollection
    {
        return $this->brands;
    }

    public function setBrands(ProductManufacturerCollection $brands): void
    {
        $this->brands = $brands;
    }

    public function getListing(): EntitySearchResult
    {
        return $this->listing;
    }

    public function setListing(EntitySearchResult $listing): void
    {
        $this->listing = $listing;
    }
}
