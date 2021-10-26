import { ManufacturingUnit, SystemProperty, SystemPropertyType, CreateManufacturingUnitRepository, ShowManufacturingUnitRepository, AllManufacturingUnitsUseCase, AllManufacturingUnitsCallbacks, AllManufacturingUnitsRepository } from "core";

export class ManufacturingUnitRepositoryMock implements CreateManufacturingUnitRepository, ShowManufacturingUnitRepository, AllManufacturingUnitsRepository {


    private initialManufacturingUnits = [
        new ManufacturingUnit(
            this.getSchema(),
            new Map([
                ["country", "Deutschland"],
                ["location", "Groß Berkel"],
                ["building", "Werk 1"],
                ["street", "Hans-Lenze-Straße 1"],
                ["city", "31855 Aerzen"],
                ["name", "Montagezelle 21 (i950)"],
                ["fertigungssteuerer", "MKA"],
                ["region", "Gerätemontage"],
                ["products", "i950"],
                ["power", "<=15kW"],
                ["size", "3, 4, 5"],
                ["mes", "Sigma Leitrechner"],
                ["trace_system", "Itac"],
                ["function", "HV- und EoL- Prüfung für Servoantriebsregler i950"],
                ["comments", "..."],
            ])
        ),
        new ManufacturingUnit(
            this.getSchema(),
            new Map([
                ["country", "Deutschland"],
                ["location", "Groß Berkel"],
                ["building", "Werk 1"],
                ["street", "Hans-Lenze-Straße 1"],
                ["city", "31855 Aerzen"],
                ["name", "Montagezelle 22 (i930)"],
                ["fertigungssteuerer", "MKA"],
                ["region", "Gerätemontage"],
                ["products", "i930"],
                ["power", "<=15kW"],
                ["size", "3, 4, 5"],
                ["mes", "Sigma Leitrechner"],
                ["trace_system", "Itac"],
                ["function", "HV- und EoL- Prüfung für Servoantriebsregler i950"],
                ["comments", "Keine Kommentare"],
            ])
        ),
        new ManufacturingUnit(
            this.getSchema(),
            new Map([
                ["country", "Deutschland"],
                ["location", "Groß Berkel"],
                ["building", "Werk 1"],
                ["street", "Hans-Lenze-Straße 1"],
                ["city", "31855 Aerzen"],
                ["name", "Montagezelle 23 (i960)"],
                ["fertigungssteuerer", "MKA"],
                ["region", "Gerätemontage"],
                ["products", "i960"],
                ["power", "<=15kW"],
                ["size", "3, 4, 5"],
                ["mes", "Sigma Leitrechner"],
                ["trace_system", "Itac"],
                ["function", "HV- und EoL- Prüfung für Servoantriebsregler i950"],
            ])
        ),
    ];

    private manufacturingUnits: Map<string, ManufacturingUnit> = new Map(this.initialManufacturingUnits.map(manufacturingUnit => [manufacturingUnit.id, manufacturingUnit]));

    getManufacturingUnits(): ManufacturingUnit[] {
        return [... this.manufacturingUnits.values()];
    }

    createManufacturingUnit(manufacturingUnit: ManufacturingUnit): void {
        console.log("createManufacturingUnit");
        this.manufacturingUnits.set(manufacturingUnit.id, manufacturingUnit);
    }

    getManufacturingUnit(id: string): ManufacturingUnit {
        return this.manufacturingUnits.get(id) as ManufacturingUnit;
    }

    getSchema(): SystemProperty[] {
        return [
            new SystemProperty("Land", SystemPropertyType.StringType, true, "country"),
            new SystemProperty("Standort", SystemPropertyType.StringType, true, "location"),
            new SystemProperty("Gebäude / Werk", SystemPropertyType.StringType, true, "building"),
            new SystemProperty("Straße", SystemPropertyType.StringType, true, "street"),
            new SystemProperty("PLZ / Ort", SystemPropertyType.StringType, true, "city"),
            new SystemProperty("Name", SystemPropertyType.StringType, true, "name"),
            new SystemProperty("Fertigungssteuerer", SystemPropertyType.StringType, true, "fertigungssteuerer"),
            new SystemProperty("Bereich", SystemPropertyType.StringType, true, "region"),
            new SystemProperty("Produkte", SystemPropertyType.StringType, true, "products"),
            new SystemProperty("Leistung", SystemPropertyType.StringType, true, "power"),
            new SystemProperty("Bauform / Baugröße", SystemPropertyType.StringType, true, "size"),
            new SystemProperty("MES", SystemPropertyType.StringType, false, "mes"),
            new SystemProperty("Trace-System", SystemPropertyType.StringType, false, "trace_system"),
            new SystemProperty("Funktion", SystemPropertyType.StringType, false, "function"),
            new SystemProperty("Bemerkungen", SystemPropertyType.StringType, false, "comments"),
        ];
    }

    getSystemPropertiesByIds(ids: string[]): { systemProperty: SystemProperty | null; id: string; }[] {
        return ids.map(id => ({ systemProperty: this.getSystemPropertyById(id), id }))
    }

    getSystemPropertyById(id: string): SystemProperty | null {
        return this.getSchema().find(systemProperty => systemProperty.id === id) ?? null;
    }
}