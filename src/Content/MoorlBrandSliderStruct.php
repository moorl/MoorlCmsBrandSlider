<?php declare(strict_types=1);

namespace MoorlCmsBrandSlider\Content;

use Shopware\Core\Content\Product\Aggregate\ProductManufacturer\ProductManufacturerCollection;
use Shopware\Core\Framework\DataAbstractionLayer\EntityCollection;
use Shopware\Core\Framework\Struct\Struct;

class MoorlBrandSliderStruct extends Struct
{
    protected ?ProductManufacturerCollection $brands = null;
    protected ?EntityCollection $listing = null;

    public function getBrands(): ?ProductManufacturerCollection
    {
        return $this->brands;
    }

    public function setBrands(ProductManufacturerCollection $brands): void
    {
        $this->brands = $brands;
    }

    /**
     * @return EntityCollection|null
     */
    public function getListing(): ?EntityCollection
    {
        return $this->listing;
    }

    /**
     * @param EntityCollection|null $listing
     */
    public function setListing(?EntityCollection $listing): void
    {
        $this->listing = $listing;
    }
}
