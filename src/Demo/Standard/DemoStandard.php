<?php declare(strict_types=1);

namespace MoorlCmsBrandSlider\Demo\Standard;

use MoorlMagazine\MoorlMagazine;
use MoorlFoundation\Core\System\DataExtension;
use MoorlFoundation\Core\System\DataInterface;

class DemoStandard extends DataExtension implements DataInterface
{
    public function getTables(): ?array
    {
        return array_merge(
            $this->getShopwareTables(),
            $this->getPluginTables()
        );
    }

    public function getLocalReplacers(): array
    {
        return [
            '{CMS_PAGE_ID}' => MoorlMagazine::CMS_PAGE_ID,
            '{MAIN_ENTITY}' => MoorlMagazine::MAIN_ENTITY,
        ];
    }

    public function getShopwareTables(): ?array
    {
        return MoorlMagazine::SHOPWARE_TABLES;
    }

    public function getPluginTables(): ?array
    {
        return MoorlMagazine::PLUGIN_TABLES;
    }

    public function getPluginName(): string
    {
        return MoorlMagazine::NAME;
    }

    public function getCreatedAt(): string
    {
        return MoorlMagazine::DATA_CREATED_AT;
    }

    public function getName(): string
    {
        return 'standard';
    }

    public function getType(): string
    {
        return 'demo';
    }

    public function getPath(): string
    {
        return __DIR__;
    }

    public function getRemoveQueries(): array
    {
        return [];
    }
}
