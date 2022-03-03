import App from '@/app';
import { ManufacturingUnitsController } from '@/controllers/manufacturingUnits.controller';
import validateEnv from '@utils/validateEnv';
import { ComponentsController } from './controllers/components';
import { TestSystemsController } from './controllers/testSystems.controller';

validateEnv();

const app = new App([
    ManufacturingUnitsController,
    TestSystemsController,
    ComponentsController
]);

app.listen();
