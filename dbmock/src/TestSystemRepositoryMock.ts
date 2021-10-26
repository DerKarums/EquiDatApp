import { CreateTestSystemRepository, ShowTestSystemRepository, SystemPropertyType, SystemProperty, TestSystem, AllTestSystemsUseCase, AllTestSystemsCallbacks, AllTestSystemsRepository } from "core"

export class TestSystemRepositoryMock implements CreateTestSystemRepository, ShowTestSystemRepository , AllTestSystemsRepository{
   
    private initialTestSystems = [
        new TestSystem(
            this.getSchema(), 
            new Map([
                ["name", "M21_E01"], 
                ["supplier", "Lenze Engineering"], 
                ["manufacturer", "Westermann"], 
                ["test_type", "HV"], 
                ["diagram_id", "71052"], 
                ["diagram_url", "https://de.wikipedia.org/wiki/Schaltplan#/media/Datei:OpAmpTransistorLevel_Colored_DE.svg"], 
                ["construction_year", "2017"], 
                ["locker_count", "1"], 
                ["terminal_box_count", "1"], 
                ["installation_date", "2017-10-01"], 
                ["voltage", "1 PE/N 230V 50Hz"], 
                ["rated_current", "10A"], 
                ["backup_current", "16A"], 
                ["voltage_it", "1 PE/N 230V 50Hz"], 
                ["rated_current_it", "10A"], 
                ["backup_current_it", "16A"], 
            ])
        ),
        new TestSystem(
            this.getSchema(), 
            new Map([
                ["name", "M21_E02"], 
                ["supplier", "Lenze Engineering"], 
                ["manufacturer", "Westermann"], 
                ["test_type", "EoL"], 
                ["diagram_id", "71053"], 
                ["diagram_url", "https://de.wikipedia.org/wiki/Schaltplan#/media/Datei:OpAmpTransistorLevel_Colored_DE.svg"], 
                ["construction_year", "2017"], 
                ["locker_count", "1"], 
                ["terminal_box_count", "2"], 
                ["installation_date", "2017-10-01"], 
                ["voltage", "3 PE/N 230V/400V 50Hz"], 
                ["rated_current", "25A"], 
                ["backup_current", "32A"], 
                ["voltage_it", "1 PE/N 230V 50Hz"], 
                ["rated_current_it", "10A"], 
                ["backup_current_it", "16A"], 
                ["voltage_lighting", "1 PE/N 230V 50Hz"], 
                ["rated_current_lighting", "10A"], 
                ["backup_current_lighting", "16A"], 
            ])
        ),
        new TestSystem(
            this.getSchema(), 
            new Map([
                ["name", "M21_E03"], 
                ["supplier", "Lenze Vertrieb"], 
                ["manufacturer", "Westermann"], 
                ["test_type", "EoL"], 
                ["diagram_id", "2021-0275"], 
                ["diagram_url", "https://de.wikipedia.org/wiki/Schaltplan#/media/Datei:OpAmpTransistorLevel_Colored_DE.svg"], 
                ["construction_year", "2021"], 
                ["locker_count", "1"], 
                ["terminal_box_count", "2"], 
                ["installation_date", "2021-05-22"], 
                ["voltage", "3 PE/N 230V/400V 50Hz"], 
                ["rated_current", "25A"], 
                ["backup_current", "32A"], 
                ["voltage_it", "1 PE/N 230V 50Hz"], 
                ["rated_current_it", "10A"], 
                ["backup_current_it", "16A"], 
                ["voltage_lighting", "1 PE/N 230V 50Hz"], 
                ["rated_current_lighting", "10A"], 
                ["backup_current_lighting", "16A"], 
            ])
        ),
    ];
    
    private testSystems: Map<string, TestSystem> = new Map(this.initialTestSystems.map(testSystem => [testSystem.id, testSystem]));
    
    getTestSystems(): TestSystem[] {
        return [... this.testSystems.values()];
    }

    createTestSystem(testSystem: TestSystem): void {
        console.log("createTestSystem");
        this.testSystems.set(testSystem.id, testSystem);
    }

    getTestSystem(id: string): TestSystem {
        return this.testSystems.get(id) as TestSystem;
    }


    getSchema(): SystemProperty[] {
        return [
            new SystemProperty("Name", SystemPropertyType.StringType, true, "name"),
            new SystemProperty("Lieferant", SystemPropertyType.StringType, true, "supplier"),
            new SystemProperty("Hersteller", SystemPropertyType.StringType, true, "manufacturer"),
            new SystemProperty("Testertyp", SystemPropertyType.StringType, true, "test_type"),
            new SystemProperty("Schaltplan", SystemPropertyType.StringType, true, "diagram_id"),
            new SystemProperty("Link zum Schaltplan", SystemPropertyType.StringType, true, "diagram_url"),
            new SystemProperty("Baujahr", SystemPropertyType.StringType, true, "construction_year"),
            new SystemProperty("Schränke", SystemPropertyType.StringType, true, "locker_count"),
            new SystemProperty("Klemmenkästen", SystemPropertyType.StringType, true, "terminal_box_count"),
            new SystemProperty("Inbetriebnahme", SystemPropertyType.StringType, true, "installation_date"),
            new SystemProperty("Außerbetriebnahme", SystemPropertyType.StringType, true, "decommissioning_date"),
            new SystemProperty("Betriebsspannung", SystemPropertyType.StringType, true, "voltage"),
            new SystemProperty("Nennstrom", SystemPropertyType.StringType, true, "rated_current"),
            new SystemProperty("Vorsicherung", SystemPropertyType.StringType, true, "backup_current"),
            new SystemProperty("Betriebsspannung IT", SystemPropertyType.StringType, true, "voltage_it"),
            new SystemProperty("Nennstrom IT", SystemPropertyType.StringType, true, "rated_current_it"),
            new SystemProperty("Vorsicherung IT", SystemPropertyType.StringType, true, "backup_current_it"),
            new SystemProperty("Betriebsspannung Beleuchtung", SystemPropertyType.StringType, true, "voltage_lighting"),
            new SystemProperty("Nennstrom Beleuchtung", SystemPropertyType.StringType, true, "rated_current_lighting"),
            new SystemProperty("Vorsicherung Beleuchtung", SystemPropertyType.StringType, true, "backup_current_lighting"),
           
        ];
    }

    getSystemPropertiesByIds(ids: string[]): { systemProperty: SystemProperty | null; id: string; }[] {
        return ids.map(id => ({ systemProperty: this.getSystemPropertyById(id), id }))
    }

    getSystemPropertyById(id: string): SystemProperty | null {
        return this.getSchema().find(systemProperty => systemProperty.id === id) ?? null;
    }
}